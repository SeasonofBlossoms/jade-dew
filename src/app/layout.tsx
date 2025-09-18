import "./globals.scss";
import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@ant-design/v5-patch-for-react-19";
import "bytemd/dist/index.css";
import { notoSerifSC, inter } from "./layoutConfig";

export default function RootBlogLayoutRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${notoSerifSC.className} ${inter.className}`}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
