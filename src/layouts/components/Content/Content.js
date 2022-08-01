import { useSelector } from "react-redux/es/hooks/useSelector";

function Content() {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <div>
      <h1>This is Content</h1>
      {todos.map((todo) => (
        <p>{todo.name}</p>
      ))}
    </div>
  );
}

export default Content;
