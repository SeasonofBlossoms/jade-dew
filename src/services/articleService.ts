// src/services/articleService.ts
import apiClient from '@/lib/api-client';
import {
  Article,
  CreateArticleRequest,
  UpdateArticleRequest,
  ArticleFilters,
} from '@/types/article';
import { ApiResponse, PaginatedResponse } from '@/types/api';
// 基础 URL
const article_URL = "/article";
class ArticleService {
  // 获取待办事项列表（支持分页和筛选）
  async getArticles (filters: ArticleFilters = {}): Promise<PaginatedResponse<Article>> {
    const queryParams = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined) {
        queryParams.append(key, String(value));
      }
    });

    const queryString = queryParams.toString();
    const endpoint = queryString ? `${article_URL}?${queryString}` : article_URL;

    return apiClient.get<PaginatedResponse<Article>>(endpoint);
  }

  // 获取单个待办事项
  async getArticle (id: number) {
    return apiClient.get<ApiResponse>(`${article_URL}/${id}`);
  }

  // 创建待办事项
  async createArticle (articleData: CreateArticleRequest) {
    return apiClient.post<ApiResponse>(article_URL, articleData);
  }

  // 更新待办事项
  async updateArticle (id: number, articleData: UpdateArticleRequest) {
    return apiClient.put<ApiResponse>(`${article_URL}/${id}`, articleData);
  }

  // 删除待办事项
  async deleteArticle (id: number): Promise<void> {
    await apiClient.delete<ApiResponse>(`${article_URL}/${id}`);
  }
}

// 创建单例实例
export const articleService = new ArticleService();
export default articleService;