import "./index.scss";
import Link from "next/link";
import PickaxeIcon from "/public/pickaxe.svg";
import SearchIcon from "/public/search.svg";
import Image from "next/image";

export default function NavBar() {
  const navList = [
    { navName: "首页", routePath: "home" },
    { navName: "文章", routePath: "articles" },
    { navName: "分类", routePath: "categories" },
    { navName: "项目", routePath: "projects" },
    { navName: "关于", routePath: "about" },
  ];
  const listItems = navList.map((item) => (
    <li key={item.routePath}>
      <Link href={`#${item.routePath}`} className="nav_link">
        {item.navName}
      </Link>
    </li>
  ));
  return (
    <header className="nav_bar flex">
      <div className="container fac">
        <Link href="#" className="flex logo">
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
        <div className="fac search_button">
          <button id="searchBtn" className="fajc transition_custom">
            <Image
              width={24}
              height={24}
              src={SearchIcon}
              unoptimized
              alt="nuknow"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
