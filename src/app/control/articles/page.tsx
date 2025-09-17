"use client";
import { useState, useEffect } from "react";
import { Article } from "@/types/article";
import articleService from "@/services/articleService";
import { Button, Table } from "antd";
import type { TableProps } from "antd";
export default function Posts() {
  const [articles, setArticles] = useState<Article[]>([]);

  async function getList() {
    try {
      const res = await articleService.getArticles();
      const articlesWithKey = (res.data || []).map((item) => ({
        ...item,
        key: item.id,
      }));
      setArticles(articlesWithKey);
    } catch {}
  }

  useEffect(() => {
    getList();
  }, []);
  const columns: TableProps<Article>["columns"] = [
    {
      title: "标题",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "描述",
      dataIndex: "description",
      key: "description",
    },
  ];

  return (
    <div className="container">
      <Button href="/article/new/edit">新增</Button>
      <Table<Article> columns={columns} dataSource={articles} />;
    </div>
  );
}
