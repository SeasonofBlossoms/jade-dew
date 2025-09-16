import "./globals.scss";
import NavBar from "@/components/NavBar";
import { Noto_Serif_SC, Inter } from "next/font/google";
import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
// 配置中文字体
const notoSerifSC = Noto_Serif_SC({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

// 配置英文字体
const inter = Inter({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${notoSerifSC.className} ${inter.className}`}>
        <AntdRegistry>
          <NavBar></NavBar>
          <main>{children}</main>
        </AntdRegistry>
      </body>
    </html>
  );
}
