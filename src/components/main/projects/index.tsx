import Image from "next/image";
import Link from "next/link";
import "./index.scss";
export default function Projects() {
  return (
    <div className="projects">
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
  );
}
