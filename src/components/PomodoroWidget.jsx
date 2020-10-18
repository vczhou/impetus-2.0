import  React, { useRef} from 'react';
import Countdown from 'react-countdown';
import { Button } from 'antd';


function PomodoroWidget(props) {
  const clockRef = useRef();
  const handleStart = () => clockRef.current.start();
  const handlePause = () => clockRef.current.pause();

  return (
    <div className="pomodoro-widget">
      <Countdown autoStart={false} date={Date.now() + 1500000} ref={clockRef} />
      <div>
        <Button onClick={handleStart}>Start</Button>
        <Button onClick={handlePause}>Stop</Button>
        <Button>Reset</Button>
      </div>
    </div>
  );
}

export default PomodoroWidget;
