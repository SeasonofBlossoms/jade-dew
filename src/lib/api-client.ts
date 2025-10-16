// src/lib/api-client.ts
import { ApiResponse, RequestOptions, UploadOptions } from '@/types/api';

class ApiError extends Error {
  constructor(
    public message: string,
    public code?: number,
    public details?: unknown
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

class ApiClient {
  private baseURL: string;
  private defaultOptions: RequestOptions;

  constructor(url: string = '', defaultOptions: RequestOptions = {}) {
    this.baseURL = `${url}/api`;
    this.defaultOptions = {
      timeout: 10000,
      ...defaultOptions,
    };
  }

  private getToken (): string | null {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiLmn7PmtKrmtpsiLCJpYXQiOjE3NjA1ODUwNzUsImV4cCI6MTc2MDY3MTQ3NX0.1vPU5YG_A9Zj5ae9dvQzDuuXhh7VXkJ1mlW8L9wJXb8'
    if (typeof window !== 'undefined') {
      return localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token');
    }
    return null;
  }

  public setToken (token: string, persist: boolean = true): void {
    if (typeof window !== 'undefined') {
      if (persist) {
        localStorage.setItem('auth_token', token);
      } else {
        sessionStorage.setItem('auth_token', token);
      }
    }
  }

  public removeToken (): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_token');
      sessionStorage.removeItem('auth_token');
    }
  }

  private async request<T> (
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), options.timeout || this.defaultOptions.timeout);

    // 智能构建 headers
    const headers: Record<string, string> = {};

    // 1. 按需设置 Content-Type
    const hasBody = options.body && options.body !== undefined;
    const isFormData = hasBody && options.body instanceof FormData;
    const isJsonBody = hasBody && typeof options.body === 'object' && !isFormData;

    if (isJsonBody) {
      headers['Content-Type'] = 'application/json';
    }

    // 2. 按需设置认证
    const token = this.getToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    // 3. 合并其他 headers
    Object.assign(headers, this.defaultOptions.headers, options.headers);

    const config: RequestInit = {
      ...this.defaultOptions,
      ...options,
      signal: controller.signal,
      headers,
    };

    // 处理请求体
    if (isJsonBody) {
      config.body = JSON.stringify(config.body);
    }

    try {
      const response = await fetch(url, config);
      clearTimeout(timeoutId);

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch {
          errorData = { message: await response.text() };
        }

        throw new ApiError(
          errorData.message || `HTTP error! status: ${response.status}`,
          response.status,
          errorData
        );
      }

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data: ApiResponse<T> = await response.json();
        return data as T;
      }

      return await response.text() as unknown as T;
    } catch (error) {
      clearTimeout(timeoutId);
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(
        error instanceof Error ? error.message : '网络请求失败',
        0,
        error
      );
    }
  }

  // 简化的方法 - 让浏览器自动处理头部
  get<T = unknown> (endpoint: string, options: RequestOptions = {}): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'GET',
      ...options,
    });
  }

  post<T = unknown> (endpoint: string, body?: any, options: RequestOptions = {}): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body,
      ...options,
    });
  }

  put<T = unknown> (endpoint: string, body?: any, options: RequestOptions = {}): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body,
      ...options,
    });
  }

  delete<T = unknown> (endpoint: string, options: RequestOptions = {}): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'DELETE',
      ...options,
    });
  }

  // 文件上传
  // 文件上传
  async uploadFile<T = unknown> (
    endpoint: string,
    file: File,
    options: UploadOptions = {},
    requestOptions: RequestOptions = {}
  ): Promise<T> {
    const formData = new FormData();
    formData.append(options.fieldName || 'file', file);

    // 创建自定义请求选项，移除Content-Type让浏览器自动设置
    const uploadOptions: RequestOptions = {
      ...requestOptions,
      headers: {
        ...requestOptions.headers,
      },
    };

    // 删除Content-Type，让浏览器自动设置
    if (uploadOptions.headers && 'Content-Type' in uploadOptions.headers) {
      delete uploadOptions.headers['Content-Type'];
    }

    // 如果有进度回调，使用XMLHttpRequest而不是fetch
    if (options.onProgress) {
      return this.uploadWithProgress<T>(endpoint, formData, options, uploadOptions);
    }

    return this.request<T>(endpoint, {
      method: 'POST',
      body: formData,
      ...uploadOptions,
    });
  }

  // 带进度条的文件上传
  private uploadWithProgress<T> (
    endpoint: string,
    formData: FormData,
    options: UploadOptions,
    requestOptions: RequestOptions = {}
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const url = `${this.baseURL}${endpoint}`;

      xhr.open('POST', url, true);

      // 设置请求头
      if (requestOptions.headers) {
        Object.entries(requestOptions.headers).forEach(([key, value]) => {
          xhr.setRequestHeader(key, value as string);
        });
      }

      // 进度事件
      xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable && options.onProgress) {
          const progress = (event.loaded / event.total) * 100;
          options.onProgress(progress);
        }
      });

      // 完成事件
      xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const response = JSON.parse(xhr.responseText);
            if (response.success) {
              resolve(response.data);
            } else {
              reject(new ApiError(
                response.message || '上传失败',
                xhr.status,
                response.errors
              ));
            }
          } catch (error) {
            reject(new ApiError(
              '解析响应失败',
              xhr.status,
              error
            ));
          }
        } else {
          reject(new ApiError(
            `上传失败: ${xhr.status} ${xhr.statusText}`,
            xhr.status
          ));
        }
      });

      // 错误事件
      xhr.addEventListener('error', () => {
        reject(new ApiError('网络错误', 0));
      });

      // 中止事件
      xhr.addEventListener('abort', () => {
        reject(new ApiError('请求被中止', 0));
      });

      // 发送请求
      xhr.send(formData);
    });
  }
}

// 创建实例
const apiClient = new ApiClient(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000');

export { ApiClient, ApiError };
export default apiClient;