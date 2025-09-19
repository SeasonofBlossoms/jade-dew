"use client";
import React, { useState } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, Flex } from "antd";
import articleService from "@/services/articleService";
import { Article } from "@/types/article";
import "./page.scss";

import ByteMDEditorField from "@/components/ByteMDEditorField";

export default function EditArticle() {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  const layout = {
    labelCol: { span: 1 },
    wrapperCol: { span: 23 },
  };

  const onFinish: FormProps<Article>["onFinish"] = async (values) => {
    setSubmitting(true);
    try {
      console.log("提交的数据:", values);
      // 这里调用 API 提交数据
      // const res = await articleService.createArticle(values);
      // console.log(res);
      // message.success("文章发布成功");
    } catch (error) {
      console.error("提交失败:", error);
      // message.error("文章发布失败");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="edit">
      <Form
        form={form}
        {...layout}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item label="文章标题" required>
          <Flex gap="small">
            <Form.Item
              noStyle
              style={{ display: "inline-block", flex: 1 }}
              name="title"
              rules={[{ required: true, message: "请输入文章标题" }]}
            >
              <Input placeholder="请输入文章标题" />
            </Form.Item>
            <Form.Item noStyle>
              <Button type="primary" htmlType="submit" loading={submitting}>
                发布
              </Button>
            </Form.Item>
          </Flex>
        </Form.Item>

        {/* 添加文章内容字段 */}
        <Form.Item
          label="文章内容"
          name="content"
          rules={[{ required: true, message: "请输入文章内容" }]}
        >
          <ByteMDEditorField />
        </Form.Item>
      </Form>
    </div>
  );
}
