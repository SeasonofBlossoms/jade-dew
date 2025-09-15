"use client";
import "./index.scss";
import Link from "next/link";
import PickaxeIcon from "/public/pickaxe.svg";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
export default function NavBar() {
  const router = useRouter();
  const pathName = usePathname();
  interface NavItem {
    navName: string;
    routePath: string;
  }
  const navList: NavItem[] = [
    { navName: "首页", routePath: "home" },
    { navName: "文章", routePath: "articles" },
    { navName: "分类", routePath: "categories" },
    { navName: "项目", routePath: "projects" },
    { navName: "关于", routePath: "about" },
  ];
  function clickNav(item: NavItem) {
    if (pathName === "/") {
      const element = document.getElementById(item.routePath);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    } else {
      router.push(`/${item.routePath === "home" ? "/" : item.routePath}`);
    }
  }

  const listItems = navList.map((item) => (
    <li key={item.routePath} onClick={() => clickNav(item)}>
      <div className="nav_link">{item.navName}</div>
    </li>
  ));
  return (
    <header className="nav_bar flex">
      <div className="container fac">
        <Link href="/" className="flex logo">
          <span className="fajc logo_img">
            <Image
              width={20}
              height={20}
              src={PickaxeIcon}
              unoptimized
              alt="nuknow"
            />
          </span>
          <span className="font_serif logo_text">林间漫笔</span>
        </Link>
        <ul className="fac nav_list">{listItems}</ul>
      </div>
    </header>
  );
}
