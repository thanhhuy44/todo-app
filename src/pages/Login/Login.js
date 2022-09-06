import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setIsLogin } from "../../redux/features/todosSlice";
import axios from "axios";

const cx = classNames.bind(styles);

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleOnClick = async () => {
    console.log(userName, password);
    await axios
      .post("https://iot.innovation.com.vn/api/auth/login", {
        username: userName,
        password: password,
      })
      .then((res) => {
        console.log(res.data.data);
      });
    dispatch(setIsLogin(true));
    navigate("/");
  };
  return (
    <div
      className={
        cx("container") +
        " flex fixed top-0 right-0 bottom-0 left-0 bg-slate-400 items-center justify-center"
      }
    >
      <div className=" bg-white p-4 rounded">
        <h1>LOGIN</h1>
        <div className="mt-4">
          <label className="font-semibold">User Name</label>
          <input
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            className="p-2"
            placeholder="type your user name..."
          />
        </div>
        <div className="mt-4">
          <label className="font-semibold">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="p-2"
            placeholder="type your password..."
            type="password"
          />
        </div>

        <button onClick={handleOnClick} className="mt-4 p-2 bg-slate-400">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
