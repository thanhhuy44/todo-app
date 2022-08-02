import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

import { useSelector } from "react-redux/es/hooks/useSelector";
import classNames from "classnames/bind";
import styles from "./Content.module.scss";
import Button from "../../../components/Button";

import TodoItem from "../TodoItem";
import { resetTodos } from "../../../redux/features/todosSlice";

const cx = classNames.bind(styles);

function Content() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const [isLaterOpen, setIsLaterOpen] = useState(true);
  const [isCompletedOpen, setIsCompletedOpen] = useState(true);

  const handleOpenLaterTodo = () => {
    setIsLaterOpen(!isLaterOpen);
  };

  const handleOpenCompletedTodo = () => {
    setIsCompletedOpen(!isCompletedOpen);
  };

  const handleResetTodos = () => {
    dispatch(resetTodos());
  };

  return (
    <div className={cx("container")}>
      <div className={cx("todos")}>
        {todos.map(
          (todo, index) =>
            todo.isDone === false &&
            todo.isPause === false && <TodoItem key={index} data={todo} />
        )}
      </div>
      <div className={cx("todo-later")}>
        <div>
          <Button
            className={cx("controller")}
            onClick={() => handleOpenLaterTodo()}
          >
            <span>Todo Later</span>
            {isLaterOpen ? (
              <FontAwesomeIcon icon={faChevronDown} />
            ) : (
              <FontAwesomeIcon icon={faChevronRight} />
            )}
          </Button>
        </div>
        {isLaterOpen &&
          todos.map(
            (todo) =>
              todo.isDone === false &&
              todo.isPause === true && <TodoItem key={todo.id} data={todo} />
          )}
      </div>
      <div className={cx("todo-completed")}>
        <div>
          <Button
            className={cx("controller")}
            onClick={handleOpenCompletedTodo}
          >
            <span>Todo Completed</span>
            {isCompletedOpen ? (
              <FontAwesomeIcon icon={faChevronDown} />
            ) : (
              <FontAwesomeIcon icon={faChevronRight} />
            )}
          </Button>
        </div>
        {isCompletedOpen &&
          todos.map(
            (todo) =>
              todo.isDone && (
                <TodoItem
                  key={todo.id}
                  data={todo}
                  className={cx("completed")}
                />
              )
          )}
      </div>
      {todos.length !== 0 && (
        <div className={cx("reset-todos")}>
          <Button className={cx("reset-btn")} onClick={handleResetTodos}>
            Reset Progress
          </Button>
        </div>
      )}
    </div>
  );
}

export default Content;
