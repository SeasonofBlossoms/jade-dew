import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";

interface UseMenuSelectionProps {
    menuMap: Record<string, string>;
    parentMap: Record<string, string>;
}

// 菜单选择状态管理 Hook
export const useMenuSelection = ({ menuMap, parentMap }: UseMenuSelectionProps) => {
    const pathname = usePathname();
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
    const [openKeys, setOpenKeys] = useState<string[]>([]);

    const updateMenuSelection = useCallback(() => {
        const normalizedPath = pathname === "/control/" ? "/control" : pathname;
        const routeKey = menuMap[normalizedPath];

        if (routeKey) {
            setSelectedKeys([routeKey]);

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

    return {
        selectedKeys,
        openKeys,
        setOpenKeys,
    };
};