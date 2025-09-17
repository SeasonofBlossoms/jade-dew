// src/types/api.ts
export interface ApiResponse<T = unknown> {
    success: boolean;
    code: number;
    message: string;
    data?: T;
    errors?: unknown;
    timestamp: string;
}

export interface PaginationParams {
    page?: number;
    limit?: number;
    [key: string]: unknown;
}

export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

export interface RequestOptions extends RequestInit {
    timeout?: number;
    retry?: number;
    retryDelay?: number;
}

export interface UploadOptions {
    fieldName?: string;
    onProgress?: (progress: number) => void;
}