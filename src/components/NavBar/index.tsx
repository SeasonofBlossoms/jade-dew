import "./index.scss";
import Link from "next/link";
import PickaxeIcon from "@/icons/pickaxe.svg";
import SearchIcon from "@/icons/search.svg";
import Image from "next/image";
export default function NavBar() {
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
        <div className="fac nav_list">
          <Link href="#home" className="nav_link">
            首页
          </Link>
          <Link href="#articles" className="nav_link">
            文章
          </Link>
          <Link href="#categories" className="nav_link">
            分类
          </Link>
          <Link href="#projects" className="nav_link">
            项目
          </Link>
          <Link href="#about" className="nav_link">
            关于
          </Link>
        </div>
        <div className="fac search_button">
          <button id="searchBtn" className="fajc transition-custom">
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
