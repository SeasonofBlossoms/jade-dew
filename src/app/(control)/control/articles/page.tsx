"use client";
import { useState, useEffect } from "react";
import { Article } from "@/types/article";
import articleService from "@/services/articleService";
import { Button, Table, Flex, Dropdown, Modal, message } from "antd";
import type { TableProps } from "antd";
import { useRouter } from "next/navigation";
export default function Posts() {
  const router = useRouter();
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
  const items = [
    {
      key: "delete",
      label: "删除",
    },
    {
      key: "unshelved",
      label: "下架",
    },
    {
      key: "detail",
      label: "详情",
    },
  ];
  const [messageApi, messageContextHolder] = message.useMessage();
  const [modal, modalContextHolder] = Modal.useModal();

  async function operaClick(key: string, record: Article) {
    switch (key) {
      case "edit":
        // window.open()
        router.push(`/control/articles/${record.id}/edit`);
        break;
      case "delete":
        modal.confirm({
          title: "确定删除？",
          content: "删除后将不展示！",
          okText: "确认",
          cancelText: "取消",
          onOk: () => {
            messageApi.success("This is a success message");
          },
        });
        break;
      case "unshelved":
        break;
      case "detail":
        router.push(`/control/articles/${record.id}`);
        break;
    }
  }

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
    {
      title: "操作",
      key: "opera",
      width: 180,
      render: (_: any, record: Article) => (
        <Flex align="flex-start" gap="small" vertical>
          <Dropdown.Button
            onClick={() => {
              operaClick("edit", record);
            }}
            menu={{
              items: items,
              onClick: (e) => {
                operaClick(e.key, record);
              },
            }}
          >
            编辑
          </Dropdown.Button>
        </Flex>
      ),
    },
  ];

  return (
    <div className="container">
      {messageContextHolder}
      {modalContextHolder}
      <Button href="/control/article/new/edit">新增</Button>
      <Table<Article> columns={columns} dataSource={articles} />
    </div>
  );
}
