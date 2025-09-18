"use client";
import React, { useState } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, Flex } from "antd";
import articleService from "@/services/articleService";
import { Article } from "@/types/article";
import "./page.scss";
import gfm from "@bytemd/plugin-gfm";
import { Editor, Viewer } from "@bytemd/react";
const plugins = [gfm()];
const onFinish: FormProps<Article>["onFinish"] = async (values) => {
  console.log("Success:", values);
  try {
    const res = await articleService.createArticle(values);
    console.log(res);
  } catch {}
};

export default function EditArticle() {
  const [form] = Form.useForm();
  const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 22 },
  };

  const [value, setValue] = useState("");
  return (
    <div className="edit">
      <Form
        form={form}
        {...layout}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item label="文章标题" required>
          <Flex gap="small">
            <Form.Item
              noStyle
              style={{ display: "inline-block", flex: 1 }}
              name="title"
              rules={[{ required: true, message: "请输入" }]}
            >
              <Input placeholder="请输入文章标题" />
            </Form.Item>
            <Form.Item noStyle>
              <Button type="primary" htmlType="submit">
                发布
              </Button>
            </Form.Item>
          </Flex>
        </Form.Item>
      </Form>
      <Editor
        value={value}
        plugins={plugins}
        onChange={(v) => {
          setValue(v);
        }}
      />
    </div>
  );
}
