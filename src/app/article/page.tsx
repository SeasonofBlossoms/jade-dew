"use client";
import { useState, useEffect } from "react";
import { Article } from "@/types/article";
import articleService from "@/services/articleService";
import { Button } from "antd";
export default function Posts() {
  const [articles, setArticles] = useState<Article[]>([]);

  async function getList() {
    try {
      const res = await articleService.getArticles();
      setArticles(res.items || []);
    } catch {}
  }
  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="container">
      <Button href="/article/new/edit">新增</Button>
      <ul>
        {articles.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
