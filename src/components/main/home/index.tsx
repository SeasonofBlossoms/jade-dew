import Link from "next/link";
import "./index.scss";
export default function Home() {
  return (
    <section className="home" id="home">
      <div className="show_content fac">
        <h1 className="font_serif">
          记录生活与思考的<span className="text-primary">个人空间</span>
        </h1>
        <p>这里有技术探索、读书感悟、生活思考和旅行见闻，欢迎驻足交流</p>
        <div className="flex">
          <Link className="read_articles" href="#articles">
            浏览文章
          </Link>
          <Link className="about_author" href="#about">
            关于博主
          </Link>
        </div>
      </div>
    </section>
  );
}
