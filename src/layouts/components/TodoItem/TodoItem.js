import classNames from "classnames/bind";
import styles from "./TodoItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck, faPause } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux/es/exports";

import Button from "../../../components/Button";
import { deleteTodoItem } from "../../../redux/features/todosSlice";

const cx = classNames.bind(styles);

function TodoItem({ todo, id }) {
  const dispatch = useDispatch();
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodoItem(id));
  };

  return (
    <div className={cx("item")}>
      <p className={cx("todo")}>{todo}</p>
      <Button type="complete" className={cx("todo-btn")}>
        <FontAwesomeIcon icon={faCheck} />
      </Button>
      <Button type="pause" className={cx("todo-btn")}>
        <FontAwesomeIcon icon={faPause} />
      </Button>
      <Button
        type="delete"
        className={cx("todo-btn")}
        onClick={() => handleDeleteTodo(id)}
      >
        <FontAwesomeIcon icon={faXmark} />
      </Button>
    </div>
  );
}

export default TodoItem;
