import "../style/common.module.scss";
import "./page.scss";
import Image from "next/image";
import Link from "next/link";
import PickaxeIcon from "@/icons/pickaxe.svg";
export default function Home() {
  return (
    <div className="home">
      <section className="show">
        <div className="container">
          <div className="show_description fac">
            <h1 className="font_serif">
              记录生活与思考的<span className="text-primary">个人空间</span>
            </h1>
            <p>这里有技术探索、读书感悟、生活思考和旅行见闻，欢迎驻足交流</p>
            <div className="flex">
              <Link className="articles" href="#articles">
                浏览文章
              </Link>
              <Link className="about_author" href="#about">
                关于博主
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="latest_articles">
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
      <section className="special">
        <div className="container">
          <div className="description">
            <h2 className="font_serif">特色内容</h2>
            <p>精选的深度文章和系列内容</p>
          </div>
          <div className="special_list fac">
            <div className="special_item fac">
              <div className="left_img">
                <span className="font_serif">前端开发系列</span>
                <Image
                  fill
                  alt="左侧图片"
                  src="https://picsum.photos/seed/frontendseries/600/800"
                ></Image>
              </div>
              <div className="right_content">
                <h3 className="font_serif">现代前端技术栈全解析</h3>
                <p>
                  一个全面介绍现代前端开发技术栈的系列文章，从基础到进阶，帮助你系统掌握前端开发技能。
                </p>
                <ul>
                  <li>JavaScript 核心概念与实践</li>
                  <li>JavaScript 核心概念与实践</li>
                  <li>JavaScript 核心概念与实践</li>
                  <li>JavaScript 核心概念与实践</li>
                </ul>
                <div className="to_all">查看系列全部文章</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="classification">
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
            <div className="classification_number">
              <h3>分类文章数量</h3>
            </div>
            <div className="classification_tags">
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
      <div className="my_project">
        <div className="container">
          <div className="description">
            <h2 className="font_serif">个人项目</h2>
            <p>我开发的一些项目和作品</p>
          </div>
          <div className="project_list fac">
            <div className="project_item">
              <div className="project_img transition_custom">
                <Image
                  fill
                  src={"https://picsum.photos/seed/frontend/600/400"}
                  alt="项目图片"
                ></Image>
              </div>
              <div className="project_content">
                <div className="project_tags flex">
                  <div className="project_tag">React</div>
                </div>
                <h3 className="font_serif transition_custom">
                  <Link href="#bk">个人博客系统</Link>
                </h3>
                <p>
                  基于React和Node.js开发的全功能博客系统，支持Markdown编辑、评论、分类和标签管理。
                </p>
                <div className="to_project fac">
                  <Link href="#bk">查看项目</Link>
                  <Link href="#bk">github</Link>
                </div>
              </div>
            </div>
            <div className="project_item">2</div>
            <div className="project_item">3</div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="flex info">
            <div className="left_img">
              <div className="my_picture">
                <Image
                  src="https://picsum.photos/seed/author/600/800"
                  alt="博主照片"
                  fill
                />
              </div>
              <div className="picture_mask"></div>
            </div>
            <div className="right_content">
              <h2 className="font_serif">关于我</h2>
              <p className="my_descrption">
                你好，我是一名热爱技术与生活的开发者。白天，我是一名前端工程师，专注于构建流畅、美观的用户界面；夜晚，我喜欢阅读、写作和探索世界。
              </p>
              <p className="blog_descrption">
                这个博客是我记录思考的空间，在这里你可以看到我对技术的探索、对书籍的感悟、对生活的思考以及旅行中的见闻。我相信分享是最好的学习方式，希望这里的内容能给你带来一些启发。
              </p>
              <div className="technology_hobby flex">
                <div className="technology">
                  <h3 className="fac">
                    <div className="type_icon fajc">
                      <Image
                        width={14}
                        height={14}
                        src={PickaxeIcon}
                        unoptimized
                        alt="nuknow"
                      />
                    </div>
                    技术领域
                  </h3>
                  <ul>
                    <li>前端开发 (React, Vue)</li>
                  </ul>
                </div>
                <div className="hobby"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
