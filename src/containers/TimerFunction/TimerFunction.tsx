import React, { useEffect, useState } from "react";
import TimerBox from "../../components/TimerBox";
import classes from "./TimerFunction.module.css";

const TimerFunction = () => {
  const [seconds, setSeconds] = useState(55);
  const [minutes, setMinutes] = useState(59);
  const [hours, setHours] = useState(23);
  const [days, setDays] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const toggleIsActive = () => {
    setIsActive(!isActive);
  };

  const handleClear = () => {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setDays(0);
  };

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);

      if (seconds === 60 && minutes === 59 && hours === 23) {
        setMinutes(() => 0);
        setSeconds(() => 0);
        setHours(() => 0);
        setDays((days) => days + 1);
      } else if (seconds === 60 && minutes === 59) {
        setMinutes(() => 0);
        setSeconds(() => 0);
        setHours((hours) => hours + 1);
      } else if (seconds === 60) {
        setMinutes((minutes) => minutes + 1);
        setSeconds(() => 0);
      }
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, minutes, hours, days]);

  return (
    <>
      <div className={classes.TimerFunction}>
        <TimerBox count={days} name="Days" />
        <TimerBox count={hours} name="Hours" />
        <TimerBox count={minutes} name="Mins" />
        <TimerBox count={seconds} name="Secs" />
      </div>
      <div className={classes.buttons}>
        <button onClick={toggleIsActive}>{isActive ? "PAUSE" : "START"}</button>
        <button
          onClick={handleClear}
          style={{ backgroundColor: "red", color: "white" }}
        >
          CLEAR
        </button>
      </div>
    </>
  );
};

export default TimerFunction;
