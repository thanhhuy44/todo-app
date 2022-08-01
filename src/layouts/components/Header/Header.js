import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { setTodosList } from "../../../redux/features/todosSlice";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const handleAddJob = (value) => {
    dispatch(
      setTodosList({
        name: value,
        isDone: false,
      })
    );
    setInputValue("");
    inputRef.current.focus();
  };

  return (
    <div className={cx("container")}>
      <h1 className={cx("title")}>Todo App</h1>
      <div className={cx("input-section")}>
        <input
          ref={inputRef}
          type="text"
          className={cx("input")}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add something..."
        />
        <button
          onClick={() => handleAddJob(inputValue)}
          className={cx("input-btn")}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Header;
