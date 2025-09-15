import Link from "next/link";
import "./index.scss";
export default function Categories() {
  return (
    <div className="categories" id="categories">
      <div className="container">
        <div className="description">
          <h2 className="font_serif">内容分类</h2>
          <p>探索不同主题的文章内容</p>
        </div>
        <div className="multiclass fajc">
          <div className="calss_item transition_custom">全部</div>
          <div className="calss_item transition_custom">前端开发</div>
        </div>
        <div className="content fac">
          <div className="categories_number">
            <h3>分类文章数量</h3>
          </div>
          <div className="categories_tags">
            <h3>热门标签</h3>
            <div className="tags flex">
              <Link href="#JavaScript" className="tag_item transition_custom">
                #JavaScript
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
