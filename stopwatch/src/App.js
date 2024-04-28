import {useEffect, useState} from "react";
import './App.css';

export default function Stopwatch() {

  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    
    let timer;
    if(isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  

  const formatTime = () => {

    const min = Math.floor(time/60).toString().padStart(1, "0");
    const sec = (time%60).toString().padStart(2, "0");

    return `${min}:${sec}`;

  };


  const startStopWatch = () => {
    setIsRunning(true);
  };

  const stopStopWatch = () => {
    setIsRunning(false);
  }

  const resetStopWatch = () => {

    setTime(0);
    setIsRunning(false);
  };



  return (
    <div className="stopwatch">

      <h2>Stopwatch</h2>

      <div className="timer">
        Time: {formatTime()}
      </div>
      
      <div>
        
        {isRunning ? (
          <button onClick = {stopStopWatch}>Stop</button>
        ) : (
          <button onClick = {startStopWatch}>Start</button>
        )
        }

        <button onClick = {resetStopWatch}>Reset</button>

      </div>
    </div>
  );
}


