import Image from "next/image";
import Link from "next/link";
import "./index.scss";
export default function Articles() {
  return (
    <section className="articles">
      <div className="container">
        <div className="description">
          <div className="title font_serif">最新文章</div>
          <div className="description_info fac">
            <div className="info">最近的思考与记录</div>
            <div className="readall">查看全部文章</div>
          </div>
        </div>
        <div className="article_list fac">
          <div className="article_item transition_custom">
            <div className="article_type fajc">前端开发</div>
            <div className="article_img ">
              <Image
                className="transition_custom"
                fill
                src={"https://picsum.photos/seed/frontend/600/400"}
                alt="文章图片"
              ></Image>
            </div>

            <div className="article_content">
              <div className="article_date">📅 2025-09-10</div>
              <h3 className="article_title font_serif">
                保持优雅的视觉风格和良好的用户体验
              </h3>
              <p className="article_desciption">
                采用自然绿色作为主色调，搭配温暖的橙色作为辅助色，营造出舒适、宁静而不失活力的氛围，适合展示多样化的内容。
              </p>
              <Link className="toArticleDetail" href="#articleDetail">
                阅读全文
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
