import  React from 'react';
import Countdown from 'react-countdown';
import { Button } from 'antd';


function PomodoroWidget(props) {
  return (
    <div className="pomodoro-widget">
      <Countdown autostart={false} date={Date.now() + 1500000} />
      <div>
        <Button>Start</Button>
        <Button>Stop</Button>
        <Button>Reset</Button>
      </div>
    </div>
  );
}

export default PomodoroWidget;
