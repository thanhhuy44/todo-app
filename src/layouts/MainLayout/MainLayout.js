import Header from "../components/Header/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import styles from "./MainLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function MainLayout() {
  return (
    <div className={cx("container")}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default MainLayout;
