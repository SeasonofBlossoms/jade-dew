"use client";
import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import articleService from "@/services/articleService";
import { Article } from "@/types/article";

const onFinish: FormProps<Article>["onFinish"] = async (values) => {
  console.log("Success:", values);
  try {
    const res = await articleService.createArticle(values);
    console.log(res);
  } catch {}
};

const onFinishFailed: FormProps<Article>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const App: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<Article>
      label="title"
      name="title"
      rules={[{ required: true, message: "Please input your title!" }]}
    >
      <Input />
    </Form.Item>
    <Form.Item<Article>
      label="description"
      name="description"
      rules={[{ required: true, message: "Please input your description!" }]}
    >
      <Input />
    </Form.Item>
    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default App;
