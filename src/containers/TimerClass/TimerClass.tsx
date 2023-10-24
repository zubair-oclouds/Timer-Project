import React, { Component } from "react";
import TimerBox from "../../components/TimerBox";
import classes from "../TimerFunction/TimerFunction.module.css";

export default class TimerClass extends Component {
  state = {
    time: { seconds: 55, minutes: 59, hours: 23, days: 0 },
    isActive: false,
    interval: null,
  };

  toggleIsActive = () => {
    this.setState((prevState: any) => ({
      isActive: !prevState.isActive,
    }));
    if (!this.state.isActive) this.startTimer();
    else this.pauseTimer();
  };

  handleClear = () => {
    this.setState(() => ({
      time: { seconds: 0, minutes: 0, hours: 0, days: 0 },
    }));
  };

  componentWillUnmount(): void {
    console.log("unmount called");
  }

  // componentDidMount(): void {
  //   let interval: any = null;
  //   interval = setInterval(() => {
  //     this.setState({
  //       ...this.state,
  //       time: { ...this.state.time, seconds: this.state.time.seconds + 1 },
  //     });
  //   }, 1000);
  // }

  startTimer = () => {
    this.setState({
      interval: setInterval(() => {
        if (
          this.state.time.seconds === 59 &&
          this.state.time.minutes === 59 &&
          this.state.time.hours === 23
        ) {
          this.setState({
            time: {
              ...this.state.time,
              seconds: 0,
              minutes: 0,
              hours: 0,
              days: this.state.time.days + 1,
            },
          });
        } else if (
          this.state.time.seconds === 59 &&
          this.state.time.minutes === 59
        ) {
          this.setState({
            time: {
              ...this.state.time,
              seconds: 0,
              minutes: 0,
              hours: this.state.time.hours + 1,
            },
          });
        } else if (this.state.time.seconds === 59) {
          this.setState({
            time: {
              ...this.state.time,
              seconds: 0,
              minutes: this.state.time.minutes + 1,
            },
          });
        } else {
          this.setState({
            ...this.state,
            time: {
              ...this.state.time,
              seconds: this.state.time.seconds + 1,
            },
          });
        }
      }, 1000),
    });
  };

  pauseTimer = () => {
    clearInterval(this.state.interval as any);
  };

  shouldComponentUpdate(
    nextProps: Readonly<{}>,
    nextState: Readonly<{}>,
    nextContext: any
  ): boolean {
    return true;
  }

  render() {
    return (
      <>
        <div className={classes.TimerFunction}>
          <TimerBox count={this.state.time.days} name="Days" />
          <TimerBox count={this.state.time.hours} name="Hours" />
          <TimerBox count={this.state.time.minutes} name="Mins" />
          <TimerBox count={this.state.time.seconds} name="Secs" />
        </div>
        <div className={classes.buttons}>
          <button onClick={this.toggleIsActive}>
            {this.state.isActive ? "PAUSE" : "START"}
          </button>
          <button
            onClick={this.handleClear}
            style={{ backgroundColor: "red", color: "white" }}
          >
            CLEAR
          </button>
        </div>
      </>
    );
  }
}
