import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { setTodosList } from "../../../redux/features/todosSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import uniqid from "uniqid";

import Button from "../../../components/Button";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
  const [isValidInput, setIsValidInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const handleOnChangeInput = (e) => {
    setInputValue(e.target.value);
    if (e.target.value === "" || !e.target.value.trim()) {
      setIsValidInput(false);
    } else {
      setIsValidInput(true);
    }
  };

  const handleAddJob = (value) => {
    dispatch(
      setTodosList({
        id: uniqid(),
        name: value,
        isDone: false,
        isPause: false,
      })
    );
    setInputValue("");
    setIsValidInput(false);
    inputRef.current.focus();
  };

  return (
    <div className={cx("container") + " fixed"}>
      <h1 className="text-4xl py-3 text-center font-bold">Todo App</h1>
      <div className=" flex rounded overflow-hidden bg-white text-textprimary text-lg">
        <input
          ref={inputRef}
          type="text"
          className={cx("input") + " flex-1 font-semibold p-3"}
          onChange={handleOnChangeInput}
          value={inputValue}
          placeholder="Add something..."
        />
        <Button
          disable={!isValidInput}
          onClick={() => handleAddJob(inputValue)}
          className="text-lg font-semibold px-4 bg-transparent text-textprimary"
        >
          <FontAwesomeIcon icon={faAdd} />
        </Button>
      </div>
    </div>
  );
}

export default Header;
