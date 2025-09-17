"use client";
import React from "react";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import "./layout.scss";
const { Sider, Content } = Layout;
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const items2: MenuProps["items"] = [
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  ].map((icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: Array.from({ length: 4 }).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  });
  return (
    <Layout className="control_layout">
      <Sider width={200}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%" }}
          items={items2}
        />
      </Sider>
      <Content style={{ padding: "0 24px", minHeight: 280 }}>
        {children}
      </Content>
    </Layout>
  );
}
