import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({ children, onClick, type, className, disable }) {
  const classNames = cx("button", type, className);

  return (
    <button disabled={disable} className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
