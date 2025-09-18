import NavBar from "@/components/NavBar";
import React from "react";
export default function RootBlogLayoutRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar></NavBar>
      <main className="blog-main ">{children}</main>
    </>
  );
}
