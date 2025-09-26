// src/types/article.ts
export interface Article {
    id: number;
    title: string;
    content?: string;
    created_at: string;
    updated_at: string;
    [x: string]: any
}

export interface CreateArticleRequest {
    title: string;
    content?: string;
}

export interface UpdateArticleRequest {
    title?: string;
    content?: string;
}

export interface ArticleFilters {
    title?: string;
    page?: number;
    limit?: number;
}