import "./globals.scss";
import NavBar from "@/components/NavBar";
import { Noto_Serif_SC, Inter } from "next/font/google";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSerifSC.className} ${inter.className}`}>
        <NavBar></NavBar>
        <main>{children}</main>
      </body>
    </html>
  );
}
