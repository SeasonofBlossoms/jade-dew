// src/types/article.ts
export interface Article {
    id: number;
    title: string;
    description?: string;
    created_at: string;
    updated_at: string;
    [x: string]: any
}

export interface CreateArticleRequest {
    title: string;
    description?: string;
}

export interface UpdateArticleRequest {
    title?: string;
    description?: string;
}

export interface ArticleFilters {
    title?: string;
    page?: number;
    limit?: number;
}