// src/types/upload.ts
export interface UploadedFile {
    filename: string;
    originalName: string;
    size: number;
    mimetype: string;
    url: string;
}

export interface UploadResponse {
    data: UploadedFile | UploadedFile[];
}