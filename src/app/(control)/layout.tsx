"use client";
import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import type { MenuProps } from "antd";
import "./layout.scss";
const { Header, Sider, Content } = Layout;
import { BookOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
export default function RootControlLayoutRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const menus: MenuProps["items"] = [BookOutlined].map((icon) => {
    return {
      key: "articles",
      icon: React.createElement(icon),
      label: "文章",
    };
  });
  const router = useRouter();
  const clickMenuItem: MenuProps["onClick"] = (e) => {
    router.push(`/control/${e.key}`);
  };
  const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
    key,
    label: `nav ${key}`,
  }));
  return (
    <div className="control">
      <Layout>
        <Header style={{ display: "flex", alignItems: "center" }}>
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items1}
            style={{ flex: 1, minWidth: 0 }}
          />
        </Header>
        <div style={{ padding: "0 48px" }}>
          <Breadcrumb
            style={{ margin: "16px 0" }}
            items={[{ title: "Home" }, { title: "List" }, { title: "App" }]}
          />
          <Layout
            style={{
              padding: "24px 0",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
            className="control_layout"
          >
            <Sider width={200}>
              <Menu
                onClick={clickMenuItem}
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%" }}
                items={menus}
              />
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              {children}
            </Content>
          </Layout>
        </div>
      </Layout>
    </div>
  );
}
