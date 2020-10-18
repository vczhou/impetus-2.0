import  React, { useRef, useState } from 'react';
import Countdown from 'react-countdown';
import { Button } from 'antd';


function PomodoroWidget(props) {
  const timeInSec = 1500000;
  const [currentTime, setCurrentTime] = useState(Date.now() + timeInSec);
  const clockRef = useRef();

  const handleStart = () => {
    clockRef.current.start();
  }
  const handlePause = () => {
    clockRef.current.pause();
  }
  const handleReset = () => {
    setCurrentTime(Date.now() + timeInSec)
  }

  return (
    <div className="pomodoro-widget">
      <Countdown 
        autoStart={false}
        date={currentTime}
        ref={clockRef} 
        onComplete={() => {
          // reset current time
          setCurrentTime(Date.now() + timeInSec);
        }}
      />
      <div>
        <Button onClick={handleStart}>Start</Button>
        <Button onClick={handlePause}>Stop</Button>
        <Button onClick={handleReset}>Reset</Button>
      </div>
    </div>
  );
}

export default PomodoroWidget;
