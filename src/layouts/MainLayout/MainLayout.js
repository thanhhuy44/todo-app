import Header from "../components/Header/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import styles from "./MainLayout.module.scss";
import classNames from "classnames/bind";
import { Navigate } from "react-router-dom";

const cx = classNames.bind(styles);

function MainLayout({ isLogin, children }) {
  console.log(isLogin);
  if (isLogin) {
    return (
      <div className={cx("container")}>
        <Header />
        <div className={cx("page")}>{children}</div>
        <Footer />
      </div>
    );
  } else {
    return <Navigate to="/login" replace />;
  }
}

export default MainLayout;
