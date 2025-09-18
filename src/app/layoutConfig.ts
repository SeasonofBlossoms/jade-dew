import { Noto_Serif_SC, Inter } from "next/font/google";
export const notoSerifSC = Noto_Serif_SC({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
});

// 配置英文字体
export const inter = Inter({
    weight: ["300", "400", "500", "600"],
    subsets: ["latin"],
    display: "swap",
});
