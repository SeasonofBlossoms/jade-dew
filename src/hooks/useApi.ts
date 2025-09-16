// src/hooks/useApi.ts
import { useState, useCallback } from 'react';
import { ApiError } from '@/lib/api-client';

type ApiFunction<T, P extends unknown[]> = (...args: P) => Promise<T>;

interface UseApiOptions<T> {
    onSuccess?: (data: T) => void;
    onError?: (error: ApiError) => void;
    immediate?: boolean;
}

interface UseApiResult<T, P extends unknown[]> {
    data: T | null;
    loading: boolean;
    error: ApiError | null;
    execute: (...args: P) => Promise<T>;
    reset: () => void;
}

export function useApi<T, P extends unknown[]> (
    apiFunction: ApiFunction<T, P>,
    options: UseApiOptions<T> = {}
): UseApiResult<T, P> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(options.immediate || false);
    const [error, setError] = useState<ApiError | null>(null);

    const execute = useCallback(async (...args: P): Promise<T> => {
        setLoading(true);
        setError(null);

        try {
            const result = await apiFunction(...args);
            setData(result);
            options.onSuccess?.(result);
            return result;
        } catch (err) {
            const apiError = err instanceof ApiError ? err : new ApiError('未知错误');
            setError(apiError);
            options.onError?.(apiError);
            throw apiError;
        } finally {
            setLoading(false);
        }
    }, [apiFunction, options]);

    const reset = useCallback(() => {
        setData(null);
        setLoading(false);
        setError(null);
    }, []);

    return {
        data,
        loading,
        error,
        execute,
        reset,
    };
}