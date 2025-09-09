import "../style/common.module.scss";
import "./page.scss";
import Link from "next/link";
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
              <Link className="about" href="#about">
                关于博主
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="articles" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="font_serif font-bold text-3xl mb-3">最新文章</h2>
              <p className="text-neutral-600">最近的思考与记录</p>
            </div>
            <a
              href="#"
              className="mt-4 md:mt-0 text-primary hover:text-primary/80 font-medium flex items-center group"
            >
              查看全部文章
              <i className="fa fa-long-arrow-right ml-2 transform group-hover:translate-x-1 transition-custom"></i>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="article-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-custom border border-neutral-200">
              <div className="relative overflow-hidden h-48">
                <img
                  src="https://picsum.photos/seed/frontend/600/400"
                  alt="前端性能优化实践"
                  className="w-full h-full object-cover transition-custom duration-700 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-primary/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  前端开发
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-neutral-500 mb-3">
                  <span>
                    <i className="fa fa-calendar-o mr-1"></i> 2023-06-28
                  </span>
                  <span className="mx-2">•</span>
                  <span>
                    <i className="fa fa-eye mr-1"></i> 842
                  </span>
                </div>
                <h3 className="font_serif font-semibold text-xl mb-3 hover:text-primary transition-custom">
                  <a href="#">现代前端性能优化的10个实用技巧</a>
                </h3>
                <p className="text-neutral-600 mb-4 line-clamp-3">
                  从代码优化到构建流程，从资源加载到运行时性能，本文总结了10个前端性能优化的实用技巧，帮助你打造更流畅的用户体验。
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  阅读全文
                  <i className="fa fa-angle-right ml-1"></i>
                </a>
              </div>
            </article>

            <article className="article-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-custom border border-neutral-200">
              <div className="relative overflow-hidden h-48">
                <img
                  src="https://picsum.photos/seed/book/600/400"
                  alt="《原子习惯》读书笔记"
                  className="w-full h-full object-cover transition-custom duration-700 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-secondary/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  读书笔记
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-neutral-500 mb-3">
                  <span>
                    <i className="fa fa-calendar-o mr-1"></i> 2023-06-15
                  </span>
                  <span className="mx-2">•</span>
                  <span>
                    <i className="fa fa-eye mr-1"></i> 1256
                  </span>
                </div>
                <h3 className="font_serif font-semibold text-xl mb-3 hover:text-primary transition-custom">
                  <a href="#">《原子习惯》：如何培养好习惯，戒除坏习惯</a>
                </h3>
                <p className="text-neutral-600 mb-4 line-clamp-3">
                  这本书教会我们，微小的改变积累起来能带来巨大的成果。本文分享了书中关于习惯养成的核心观点和可实践的方法，帮助你成为更好的自己。
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  阅读全文
                  <i className="fa fa-angle-right ml-1"></i>
                </a>
              </div>
            </article>

            <article className="article-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-custom border border-neutral-200">
              <div className="relative overflow-hidden h-48">
                <img
                  src="https://picsum.photos/seed/travel/600/400"
                  alt="云南大理旅行"
                  className="w-full h-full object-cover transition-custom duration-700 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-purple-500/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  旅行见闻
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-neutral-500 mb-3">
                  <span>
                    <i className="fa fa-calendar-o mr-1"></i> 2023-05-30
                  </span>
                  <span className="mx-2">•</span>
                  <span>
                    <i className="fa fa-eye mr-1"></i> 987
                  </span>
                </div>
                <h3 className="font_serif font-semibold text-xl mb-3 hover:text-primary transition-custom">
                  <a href="#">大理七日：在苍山洱海间寻找宁静</a>
                </h3>
                <p className="text-neutral-600 mb-4 line-clamp-3">
                  远离城市喧嚣，在大理的七天里，我漫步古城，环行洱海，攀登苍山，感受着风花雪月的浪漫与宁静。这是一段关于放松与思考的旅程。
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  阅读全文
                  <i className="fa fa-angle-right ml-1"></i>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font_serif font-bold text-3xl mb-3 text-center">
            特色内容
          </h2>
          <p className="text-neutral-600 text-center max-w-2xl mx-auto mb-12">
            精选的深度文章和系列内容
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-custom">
              <div className="md:flex">
                <div className="md:w-1/3 relative">
                  <img
                    src="https://picsum.photos/seed/frontendseries/600/800"
                    alt="前端开发系列文章"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center justify-center">
                    <span className="text-white font_serif font-bold text-xl md:text-2xl rotate-[-90deg] md:rotate-0 whitespace-nowrap">
                      前端开发系列
                    </span>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="font_serif font-semibold text-xl mb-4">
                    现代前端技术栈全解析
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    一个全面介绍现代前端开发技术栈的系列文章，从基础到进阶，帮助你系统掌握前端开发技能。
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-neutral-700">
                      <i className="fa fa-check-circle text-primary mr-2"></i>
                      <a
                        href="#"
                        className="hover:text-primary transition-custom"
                      >
                        JavaScript 核心概念与实践
                      </a>
                    </li>
                    <li className="flex items-center text-neutral-700">
                      <i className="fa fa-check-circle text-primary mr-2"></i>
                      <a
                        href="#"
                        className="hover:text-primary transition-custom"
                      >
                        React 生态系统详解
                      </a>
                    </li>
                    <li className="flex items-center text-neutral-700">
                      <i className="fa fa-check-circle text-primary mr-2"></i>
                      <a
                        href="#"
                        className="hover:text-primary transition-custom"
                      >
                        Vue 3 组合式API完全指南
                      </a>
                    </li>
                    <li className="flex items-center text-neutral-700">
                      <i className="fa fa-check-circle text-primary mr-2"></i>
                      <a
                        href="#"
                        className="hover:text-primary transition-custom"
                      >
                        前端工程化与自动化部署
                      </a>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    查看系列全部文章
                    <i className="fa fa-long-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-custom">
              <div className="md:flex">
                <div className="md:w-1/3 relative">
                  <img
                    src="https://picsum.photos/seed/bookseries/600/800"
                    alt="年度读书计划"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-transparent flex items-center justify-center">
                    <span className="text-white font_serif font-bold text-xl md:text-2xl rotate-[-90deg] md:rotate-0 whitespace-nowrap">
                      年度读书计划
                    </span>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="font_serif font-semibold text-xl mb-4">
                    2023年阅读清单与感悟
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    记录我2023年读过的书籍，包括技术、文学、心理学、历史等多个领域，每本书都附有详细的读书笔记。
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-neutral-700">
                      <i className="fa fa-check-circle text-secondary mr-2"></i>
                      <a
                        href="#"
                        className="hover:text-secondary transition-custom"
                      >
                        《思考，快与慢》：认知偏差解析
                      </a>
                    </li>
                    <li className="flex items-center text-neutral-700">
                      <i className="fa fa-check-circle text-secondary mr-2"></i>
                      <a
                        href="#"
                        className="hover:text-secondary transition-custom"
                      >
                        《人类简史》：从认知革命到科技未来
                      </a>
                    </li>
                    <li className="flex items-center text-neutral-700">
                      <i className="fa fa-check-circle text-secondary mr-2"></i>
                      <a
                        href="#"
                        className="hover:text-secondary transition-custom"
                      >
                        《代码整洁之道》：编写可维护代码的艺术
                      </a>
                    </li>
                    <li className="flex items-center text-neutral-700">
                      <i className="fa fa-check-circle text-secondary mr-2"></i>
                      <a
                        href="#"
                        className="hover:text-secondary transition-custom"
                      >
                        《活着》：生命的意义与韧性
                      </a>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="inline-flex items-center text-secondary font-medium hover:underline"
                  >
                    查看全部读书笔记
                    <i className="fa fa-long-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font_serif font-bold text-3xl mb-3 text-center">
            内容分类
          </h2>
          <p className="text-neutral-600 text-center max-w-2xl mx-auto mb-12">
            探索不同主题的文章内容
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button className="px-5 py-2 bg-primary text-white rounded-full text-sm font-medium">
              全部
            </button>
            <button className="px-5 py-2 bg-neutral-200 hover:bg-neutral-300 rounded-full text-sm font-medium transition-custom">
              前端开发
            </button>
            <button className="px-5 py-2 bg-neutral-200 hover:bg-neutral-300 rounded-full text-sm font-medium transition-custom">
              读书笔记
            </button>
            <button className="px-5 py-2 bg-neutral-200 hover:bg-neutral-300 rounded-full text-sm font-medium transition-custom">
              生活思考
            </button>
            <button className="px-5 py-2 bg-neutral-200 hover:bg-neutral-300 rounded-full text-sm font-medium transition-custom">
              旅行见闻
            </button>
            <button className="px-5 py-2 bg-neutral-200 hover:bg-neutral-300 rounded-full text-sm font-medium transition-custom">
              工具推荐
            </button>
            <button className="px-5 py-2 bg-neutral-200 hover:bg-neutral-300 rounded-full text-sm font-medium transition-custom">
              学习方法
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-neutral-100 rounded-xl p-6">
              <h3 className="font_serif font-semibold text-xl mb-6">
                分类文章数量
              </h3>
              <div className="h-64">
                <canvas id="categoryChart"></canvas>
              </div>
            </div>

            <div className="bg-neutral-100 rounded-xl p-6">
              <h3 className="font_serif font-semibold text-xl mb-6">
                热门标签
              </h3>
              <div className="flex flex-wrap gap-2">
                <a
                  href="#"
                  className="px-3 py-1 bg-white rounded-full text-sm hover:bg-primary hover:text-white transition-custom border border-neutral-200"
                >
                  #JavaScript
                </a>
                <a
                  href="#"
                  className="px-3 py-1 bg-white rounded-full text-sm hover:bg-primary hover:text-white transition-custom border border-neutral-200"
                >
                  #React
                </a>
                <a
                  href="#"
                  className="px-3 py-1 bg-white rounded-full text-sm hover:bg-primary hover:text-white transition-custom border border-neutral-200"
                >
                  #读书
                </a>
                <a
                  href="#"
                  className="px-3 py-1 bg-white rounded-full text-sm hover:bg-primary hover:text-white transition-custom border border-neutral-200"
                >
                  #旅行
                </a>
                <a
                  href="#"
                  className="px-3 py-1 bg-white rounded-full text-sm hover:bg-primary hover:text-white transition-custom border border-neutral-200"
                >
                  #自我提升
                </a>
                <a
                  href="#"
                  className="px-3 py-1 bg-white rounded-full text-sm hover:bg-primary hover:text-white transition-custom border border-neutral-200"
                >
                  #Vue
                </a>
                <a
                  href="#"
                  className="px-3 py-1 bg-white rounded-full text-sm hover:bg-primary hover:text-white transition-custom border border-neutral-200"
                >
                  #CSS
                </a>
                <a
                  href="#"
                  className="px-3 py-1 bg-white rounded-full text-sm hover:bg-primary hover:text-white transition-custom border border-neutral-200"
                >
                  #生活方式
                </a>
                <a
                  href="#"
                  className="px-3 py-1 bg-white rounded-full text-sm hover:bg-primary hover:text-white transition-custom border border-neutral-200"
                >
                  #效率工具
                </a>
                <a
                  href="#"
                  className="px-3 py-1 bg-white rounded-full text-sm hover:bg-primary hover:text-white transition-custom border border-neutral-200"
                >
                  #前端工程化
                </a>
                <a
                  href="#"
                  className="px-3 py-1 bg-white rounded-full text-sm hover:bg-primary hover:text-white transition-custom border border-neutral-200"
                >
                  #心理学
                </a>
                <a
                  href="#"
                  className="px-3 py-1 bg-white rounded-full text-sm hover:bg-primary hover:text-white transition-custom border border-neutral-200"
                >
                  #历史
                </a>
                <a
                  href="#"
                  className="px-3 py-1 bg-white rounded-full text-sm hover:bg-primary hover:text-white transition-custom border border-neutral-200"
                >
                  #性能优化
                </a>
                <a
                  href="#"
                  className="px-3 py-1 bg-white rounded-full text-sm hover:bg-primary hover:text-white transition-custom border border-neutral-200"
                >
                  #学习方法
                </a>
                <a
                  href="#"
                  className="px-3 py-1 bg-white rounded-full text-sm hover:bg-primary hover:text-white transition-custom border border-neutral-200"
                >
                  #摄影
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font_serif font-bold text-3xl mb-3 text-center">
            个人项目
          </h2>
          <p className="text-neutral-600 text-center max-w-2xl mx-auto mb-12">
            我开发的一些项目和作品
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-custom border border-neutral-200 group">
              <div className="relative h-48 overflow-hidden bg-neutral-200">
                <img
                  src="https://picsum.photos/seed/project1/600/400"
                  alt="个人博客系统"
                  className="w-full h-full object-cover transition-custom duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-neutral-500 mb-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs mr-2">
                    React
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                    Node.js
                  </span>
                </div>
                <h3 className="font_serif font-semibold text-xl mb-2 group-hover:text-primary transition-custom">
                  <a href="#">个人博客系统</a>
                </h3>
                <p className="text-neutral-600 mb-4">
                  基于React和Node.js开发的全功能博客系统，支持Markdown编辑、评论、分类和标签管理。
                </p>
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-primary font-medium hover:underline text-sm"
                  >
                    查看项目
                  </a>
                  <a
                    href="#"
                    className="text-neutral-500 hover:text-primary transition-custom"
                  >
                    <i className="fa fa-github text-lg"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-custom border border-neutral-200 group">
              <div className="relative h-48 overflow-hidden bg-neutral-200">
                <img
                  src="https://picsum.photos/seed/project2/600/400"
                  alt="任务管理应用"
                  className="w-full h-full object-cover transition-custom duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-neutral-500 mb-2">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs mr-2">
                    Vue
                  </span>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">
                    Firebase
                  </span>
                </div>
                <h3 className="font_serif font-semibold text-xl mb-2 group-hover:text-primary transition-custom">
                  <a href="#">任务管理应用</a>
                </h3>
                <p className="text-neutral-600 mb-4">
                  基于Vue
                  3和Firebase开发的任务管理应用，支持拖拽排序、标签筛选和数据同步。
                </p>
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-primary font-medium hover:underline text-sm"
                  >
                    查看项目
                  </a>
                  <a
                    href="#"
                    className="text-neutral-500 hover:text-primary transition-custom"
                  >
                    <i className="fa fa-github text-lg"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hiddenhidden shadow-sm hover:shadow-md transition-custom border border-neutral-200 group">
              <div className="relative h-48 overflow-hidden bg-neutral-200">
                <img
                  src="https://picsum.photos/seed/project3/600/400"
                  alt="旅行照片集"
                  className="w-full h-full object-cover transition-custom duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-neutral-500 mb-2">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs mr-2">
                    Next.js
                  </span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">
                    Tailwind
                  </span>
                </div>
                <h3 className="font_serif font-semibold text-xl mb-2 group-hover:text-primary transition-custom">
                  <a href="#">旅行照片集</a>
                </h3>
                <p className="text-neutral-600 mb-4">
                  基于Next.js开发的旅行照片展示网站，采用Tailwind
                  CSS设计，支持照片分类和位置标记。
                </p>
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-primary font-medium hover:underline text-sm"
                  >
                    查看项目
                  </a>
                  <a
                    href="#"
                    className="text-neutral-500 hover:text-primary transition-custom"
                  >
                    <i className="fa fa-github text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-primary/5 rounded-2xl transform rotate-2"></div>
                  <div className="relative bg-white p-2 rounded-xl shadow-sm">
                    <img
                      src="https://picsum.photos/seed/author/600/800"
                      alt="博主照片"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3">
                <h2 className="font_serif font-bold text-3xl mb-6">关于我</h2>
                <p className="text-neutral-700 mb-4 leading-relaxed">
                  你好，我是一名热爱技术与生活的开发者。白天，我是一名前端工程师，专注于构建流畅、美观的用户界面；夜晚，我喜欢阅读、写作和探索世界。
                </p>
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  这个博客是我记录思考的空间，在这里你可以看到我对技术的探索、对书籍的感悟、对生活的思考以及旅行中的见闻。我相信分享是最好的学习方式，希望这里的内容能给你带来一些启发。
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="font-medium text-lg mb-3 flex items-center">
                      <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-2">
                        <i className="fa fa-code"></i>
                      </span>
                      技术领域
                    </h3>
                    <ul className="space-y-2 text-neutral-600">
                      <li className="flex items-center">
                        <i className="fa fa-angle-right text-primary mr-2"></i>{" "}
                        前端开发 (React, Vue)
                      </li>
                      <li className="flex items-center">
                        <i className="fa fa-angle-right text-primary mr-2"></i>{" "}
                        UI/UX 设计
                      </li>
                      <li className="flex items-center">
                        <i className="fa fa-angle-right text-primary mr-2"></i>{" "}
                        响应式网站开发
                      </li>
                      <li className="flex items-center">
                        <i className="fa fa-angle-right text-primary mr-2"></i>{" "}
                        性能优化
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-3 flex items-center">
                      <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-2">
                        <i className="fa fa-heart-o"></i>
                      </span>
                      兴趣爱好
                    </h3>
                    <ul className="space-y-2 text-neutral-600">
                      <li className="flex items-center">
                        <i className="fa fa-angle-right text-primary mr-2"></i>{" "}
                        阅读与写作
                      </li>
                      <li className="flex items-center">
                        <i className="fa fa-angle-right text-primary mr-2"></i>{" "}
                        旅行与摄影
                      </li>
                      <li className="flex items-center">
                        <i className="fa fa-angle-right text-primary mr-2"></i>{" "}
                        跑步与骑行
                      </li>
                      <li className="flex items-center">
                        <i className="fa fa-angle-right text-primary mr-2"></i>{" "}
                        咖啡与美食
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-neutral-200 text-neutral-700 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-custom"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-neutral-200 text-neutral-700 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-custom"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-neutral-200 text-neutral-700 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition-custom"
                  >
                    <i className="fa fa-weixin"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-neutral-200 text-neutral-700 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-custom"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font_serif font-bold text-3xl mb-4">订阅我的博客</h2>
            <p className="text-neutral-600 mb-8">
              获取最新文章更新，不错过任何精彩内容
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="输入你的邮箱地址"
                className="flex-1 px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-custom"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white rounded-lg shadow-sm hover:shadow-md hover:bg-primary/90 transition-custom font-medium whitespace-nowrap"
              >
                立即订阅
              </button>
            </form>

            <p className="text-neutral-500 text-sm mt-4">
              我尊重你的隐私，不会向第三方分享你的信息，你可以随时取消订阅
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
}
