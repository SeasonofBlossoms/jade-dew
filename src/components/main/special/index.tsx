import Image from "next/image";
import "./index.scss";
export default function Special() {
  return (
    <section className="special" id="special">
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
  );
}
