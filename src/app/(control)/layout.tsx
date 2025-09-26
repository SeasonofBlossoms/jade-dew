"use client";
import React, { useCallback } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import type { MenuProps } from "antd";
import "./layout.scss";
const { Header, Sider, Content } = Layout;
import { useRouter } from "next/navigation";

// 导入自定义 Hook
import { useMenuConfig } from "./hooks/useMenuConfig";
import { useMenuMapping } from "./hooks/useMenuMapping";
import { useMenuSelection } from "./hooks/useMenuSelection";
import { useTopMenu } from "./hooks/useTopMenu";

export default function RootControlLayoutRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const router = useRouter();

  // 使用自定义 Hook
  const menus = useMenuConfig();
  const { menuMap, parentMap } = useMenuMapping(menus);
  const { selectedKeys, openKeys, setOpenKeys } = useMenuSelection({
    menuMap,
    parentMap,
  });
  const topMenuItems = useTopMenu();

  // 菜单点击处理
  const clickMenuItem: MenuProps["onClick"] = useCallback(
    (e: { key: string }) => {
      const path = e.key === "/" ? "/control" : `/control/${e.key}`;
      router.push(path);
    },
    [router]
  );

  // 菜单展开/收起处理
  const handleOpenChange: MenuProps["onOpenChange"] = useCallback(
    (keys: React.SetStateAction<string[]>) => {
      setOpenKeys(keys);
    },
    [setOpenKeys]
  );

  return (
    <div className="control">
      <Layout style={{ height: "100vh" }}>
        <Header style={{ display: "flex", alignItems: "center" }}>
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["dashboard"]}
            items={topMenuItems}
            style={{ flex: 1, minWidth: 0 }}
          />
        </Header>

        <Layout
          style={{ padding: "0 24px 12px", height: "calc(100vh - 64px)" }}
        >
          <Breadcrumb
            items={[
              { title: "控制台" },
              { title: "管理" },
              { title: "当前页面" },
            ]}
          />

          <Layout
            style={{
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              overflow: "hidden",
            }}
            className="control_layout"
          >
            <Sider width={200} style={{ background: colorBgContainer }}>
              <Menu
                mode="inline"
                selectedKeys={selectedKeys}
                openKeys={openKeys}
                onOpenChange={handleOpenChange}
                onClick={clickMenuItem}
                style={{ height: "100%" }}
                items={menus}
              />
            </Sider>

            <Content style={{ padding: 24, overflow: "auto" }}>
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}
