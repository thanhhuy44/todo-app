import classNames from "classnames/bind";
import styles from "./TodoItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck, faPause } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux/es/exports";

import Button from "../../../components/Button";
import {
  deleteTodoItem,
  setTodoCompleted,
  setTodoLater,
} from "../../../redux/features/todosSlice";

const cx = classNames.bind(styles);

function TodoItem({ data, className }) {
  const dispatch = useDispatch();
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodoItem(id));
  };

  const handleDelayTodo = (id) => {
    dispatch(setTodoLater(id));
  };

  const handleCompleteTodo = (id) => {
    dispatch(setTodoCompleted(id));
  };

  return (
    <div
      className={
        cx("item", className) +
        " flex items-center mt-2 rounded text-base overflow-hidden"
      }
    >
      <p className={cx("todo")}>{data.name}</p>
      {data.isDone === false && (
        <Button
          type="complete"
          className={cx("todo-btn")}
          onClick={() => handleCompleteTodo(data.id)}
        >
          <FontAwesomeIcon icon={faCheck} />
        </Button>
      )}
      {data.isPause === false && data.isDone === false && (
        <Button
          type="pause"
          className={cx("todo-btn")}
          onClick={() => handleDelayTodo(data.id)}
        >
          <FontAwesomeIcon icon={faPause} />
        </Button>
      )}
      {data.isDone === false && (
        <Button
          type="delete"
          className={cx("todo-btn")}
          onClick={() => handleDeleteTodo(data.id)}
        >
          <FontAwesomeIcon icon={faXmark} />
        </Button>
      )}
    </div>
  );
}

export default TodoItem;
