import "../style/common.module.scss";
import "./page.scss";
import {
  Home,
  About,
  Articles,
  Categories,
  Projects,
  Special,
} from "@/components/main";

export default function main() {
  return (
    <div className="main" id="main">
      <Home />
      <Articles />
      <Special />
      <Categories />
      <Projects />
      <About />
    </div>
  );
}
