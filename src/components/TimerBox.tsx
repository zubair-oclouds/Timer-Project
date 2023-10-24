import React from 'react'
import classes from './TimerBox.module.css'

const TimerBox = (props:any) => {
  return (
    <div className={classes.TimerBox}>
      <div className={classes.number}>{props.count}</div>
      <div className={classes.text}>{props.name}</div>
    </div>
  );
}

export default TimerBox
