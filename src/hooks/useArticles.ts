// src/hooks/useArticles.ts
import { useState, useEffect } from 'react';
import { articleService } from '@/services/articleService';
import { Article, ArticleFilters } from '@/types/article';
import { PaginatedResponse, ApiResponse } from '@/types/api'
import { useApi } from './useApi';

export function useArticles (filters: ArticleFilters = {}) {
    const [articles, setArticles] = useState<Article[]>([]);
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 10,
        total: 0,
        totalPages: 0
    });

    const { data, loading, error, execute } = useApi<PaginatedResponse<Article>, [ArticleFilters]>(
        articleService.getArticles.bind(articleService)
    );

    const fetchArticles = async (newFilters: ArticleFilters = {}) => {
        const mergedFilters = { ...filters, ...newFilters };
        return execute(mergedFilters);
    };

    // 当筛选条件变化时自动获取数据
    useEffect(() => {
        fetchArticles();
    }, [filters.title]);

    // 当数据更新时更新状态
    useEffect(() => {
        if (data) {
            setArticles(data.items);
            setPagination({
                page: data.page,
                limit: data.limit,
                total: data.total,
                totalPages: data.totalPages
            });
        }
    }, [data]);

    // const createArticle = async (articleData: Article) => {
    //     const newArticle = await articleService.createArticle(articleData);
    //     setArticles(prev => [newArticle, ...prev]);
    //     return newArticle;
    // };

    // const updateArticle = async (id: number, updates: Partial<Article>) => {
    //     const updatedArticle = await articleService.updateArticle(id, updates);
    //     setArticles(prev => prev.map(article => article.id === id ? updatedArticle : article));
    //     return updatedArticle;
    // };

    const deleteArticle = async (id: number) => {
        await articleService.deleteArticle(id);
        setArticles(prev => prev.filter(article => article.id !== id));
    };



    return {
        articles,
        pagination,
        loading,
        error,
        fetchArticles,
        // createArticle,
        // updateArticle,
        deleteArticle,
        // toggleArticle,
    };
}