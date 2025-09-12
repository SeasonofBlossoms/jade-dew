import Image from "next/image";
import PickaxeIcon from "/public/pickaxe.svg";
import "./index.scss";
export default function About() {
  return (
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
  );
}
