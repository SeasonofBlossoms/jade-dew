import { useMemo } from "react";
import { MenuProps } from "antd";

interface MenuMappings {
    menuMap: Record<string, string>;
    parentMap: Record<string, string>;
}

// 菜单映射关系 Hook
export const useMenuMapping = (menus: MenuProps["items"]): MenuMappings => {
    return useMemo(() => {
        const map: Record<string, string> = {};
        const parentMap: Record<string, string> = {};

        const traverse = (items: MenuProps["items"], parentKey?: string) => {
            if (items) {
                items.forEach((item) => {
                    if (item && item.key) {
                        const keyString = item.key.toString();
                        const routePath = keyString === "/" ? "/control" : `/control/${keyString}`;

                        map[routePath] = keyString;

                        if (parentKey) {
                            parentMap[keyString] = parentKey;
                        }

                        if ("children" in item && item.children) {
                            traverse(item.children, keyString);
                        }
                    }
                });
            }
        };

        traverse(menus);
        return { menuMap: map, parentMap };
    }, [menus]);
};