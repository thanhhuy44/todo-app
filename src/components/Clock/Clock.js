import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Clock.module.scss";

const cx = classNames.bind(styles);

function Clock() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(date.toLocaleTimeString());
  const [day, setDay] = useState(date.toLocaleDateString());

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);
    return () => {
      setTime(date.toLocaleTimeString());
      setDay(date.toLocaleDateString());
      clearInterval(interval);
    };
  }, [date]);
  return (
    <div className={cx("container")}>
      <p className="text-4xl font-bold">{day}</p>
      <p className="mt-2 text-2xl">{time}</p>
    </div>
  );
}

export default Clock;
