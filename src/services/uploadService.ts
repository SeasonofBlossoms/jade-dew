// src/services/uploadService.ts
import apiClient from '@/lib/api-client';
import { UploadedFile, UploadResponse } from '@/types/upload';
import { UploadOptions } from '@/types/api';

class UploadService {
    // 上传单个文件
    async uploadSingle (
        file: File,
        options: UploadOptions = {}
    ): Promise<UploadedFile> {
        return apiClient.uploadFile<UploadedFile>(
            '/upload/single',
            file,
            options
        );
    }

    // 上传多个文件
    async uploadMultiple (
        files: File[],
        options: UploadOptions = {}
    ): Promise<UploadedFile[]> {
        const formData = new FormData();
        files.forEach(file => {
            formData.append('files', file);
        });

        // 如果有进度回调，使用XMLHttpRequest
        if (options.onProgress) {
            return apiClient.uploadFile<UploadedFile[]>(
                '/upload/multiple',
                files[0], // 使用第一个文件，但实际上会发送所有文件
                { ...options, fieldName: 'files' }
            );
        }

        return apiClient.post<UploadedFile[]>('/upload/multiple', formData);
    }

    // 获取文件列表
    async getFiles (): Promise<string[]> {
        return apiClient.get<string[]>('/upload/files');
    }

    // 删除文件
    async deleteFile (filename: string): Promise<void> {
        await apiClient.delete(`/upload/file/${filename}`);
    }

    // 获取文件URL
    getFileUrl (filename: string): string {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        return `${baseUrl}/uploads/${filename}`;
    }
}

// 创建单例实例
export const uploadService = new UploadService();
export default uploadService;