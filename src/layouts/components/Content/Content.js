import { useSelector } from "react-redux/es/hooks/useSelector";
import classNames from "classnames/bind";
import styles from "./Content.module.scss";

import TodoItem from "../TodoItem";

const cx = classNames.bind(styles);

function Content() {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <div className={cx("container")}>
      <div className={cx("todos")}>
        {todos.map(
          (todo, index) =>
            todo.isDone === false && (
              <TodoItem key={index} id={todo.id} todo={todo.name} />
            )
        )}
      </div>
      <div className={cx("todo-later")}></div>
      <div className={cx("todo-completed")}></div>
    </div>
  );
}

export default Content;
