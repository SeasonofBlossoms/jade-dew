"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import type { MenuProps } from "antd";
import "./layout.scss";
const { Header, Sider, Content } = Layout;
import { ReadOutlined, HomeOutlined } from "@ant-design/icons";
import { useRouter, usePathname } from "next/navigation";

// 定义安全的菜单项类型
type SafeMenuItem = {
  key: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  children?: SafeMenuItem[];
};

export default function RootControlLayoutRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const router = useRouter();
  const pathname = usePathname();

  // 使用useMemo包装菜单配置，避免每次渲染都重新创建
  const menus = useMemo(
    (): SafeMenuItem[] => [
      {
        key: "/", // 首页的特殊key
        icon: React.createElement(HomeOutlined),
        label: "首页",
      },
      {
        key: "content",
        icon: React.createElement(ReadOutlined),
        label: "内容管理",
        children: [
          {
            key: "articles",
            label: "文章管理",
          },
        ],
      },
    ],
    []
  ); // 空依赖数组确保只创建一次

  // 构建菜单映射关系 - 使用useCallback避免无限重渲染
  const { menuMap, parentMap } = useMemo(() => {
    const map: Record<string, string> = {};
    const parentMap: Record<string, string> = {};

    const traverse = (items: SafeMenuItem[], parentKey?: string) => {
      items.forEach((item) => {
        // 处理特殊key "/" 的路由映射
        const routePath =
          item.key === "/" ? "/control" : `/control/${item.key}`;

        map[routePath] = item.key;

        // 记录父子关系
        if (parentKey) {
          parentMap[item.key] = parentKey;
        }

        // 递归处理子菜单
        if (item.children) {
          traverse(item.children, item.key);
        }
      });
    };

    traverse(menus);
    return { menuMap: map, parentMap };
  }, [menus]); // 现在menus是稳定的引用

  // 计算当前选中的菜单项
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  // 使用useCallback包装路径处理逻辑
  const updateMenuSelection = useCallback(() => {
    // 特殊处理根路径
    const normalizedPath = pathname === "/control/" ? "/control" : pathname;

    // 根据路由路径获取菜单key
    const routeKey = menuMap[normalizedPath];

    if (routeKey) {
      setSelectedKeys([routeKey]);

      // 收集所有需要展开的父菜单
      const parentsToOpen = new Set<string>();
      let currentKey: string | undefined = routeKey;

      while (currentKey && parentMap[currentKey]) {
        const parentKey: string = parentMap[currentKey];
        parentsToOpen.add(parentKey);
        currentKey = parentKey;
      }

      setOpenKeys((prev) => Array.from(new Set([...prev, ...parentsToOpen])));
    } else {
      setSelectedKeys([]);
    }
  }, [pathname, menuMap, parentMap]);

  useEffect(() => {
    updateMenuSelection();
  }, [updateMenuSelection]);

  // 菜单点击处理
  const clickMenuItem: MenuProps["onClick"] = useCallback(
    (e: { key: string }) => {
      // 特殊处理首页路由
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
    []
  );

  // 顶部导航菜单项 - 使用useMemo避免重复创建
  const topMenuItems = useMemo(
    (): MenuProps["items"] => [
      { key: "dashboard", label: "控制台" },
      { key: "settings", label: "系统设置" },
      { key: "user", label: "用户中心" },
    ],
    []
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
                items={menus as MenuProps["items"]}
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
