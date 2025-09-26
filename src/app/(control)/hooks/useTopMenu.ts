import { useMemo } from "react";
import { MenuProps } from "antd";

// 顶部菜单配置 Hook
export const useTopMenu = () => {
    return useMemo((): MenuProps["items"] => [
        { key: "dashboard", label: "控制台" },
        { key: "settings", label: "系统设置" },
        { key: "user", label: "用户中心" },
    ], []);
};