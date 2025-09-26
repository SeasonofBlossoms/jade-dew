import React from "react";
import { useMemo } from "react";
import { MenuProps } from "antd";
import { ReadOutlined, HomeOutlined } from "@ant-design/icons";

// 菜单配置 Hook
export const useMenuConfig = () => {
    const menus = useMemo((): MenuProps["items"] => [
        {
            key: "/",
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
    ], []);

    return menus;
};