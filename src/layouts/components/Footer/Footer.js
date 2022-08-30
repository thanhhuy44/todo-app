import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Clock from "../../../components/Clock";
import {
  faGithub,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("container") + " fixed bottom-0 px-2 py-3 flex "}>
      <div className="flex-1">
        <Clock />
      </div>
      <div className="flex-1 text-base ">
        <p>Name: Thanh Huy</p>
        <p>
          <a href="mailto:thhuy28062001@gmail.com">
            Email: thhuy28062001@gmail
          </a>
        </p>
        <p>Phone Number: 0394674181</p>
        <p>
          <span>Socials: </span>
          <a
            className="ml-2"
            href="https://github.com/thanhhuy44"
            target="blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className={cx("social-link")}
            href="https://www.facebook.com/thanh.huy.44"
            target="blank"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            className={cx("social-link")}
            href="http://www.instagram.com/t.huy.44"
            target="blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
