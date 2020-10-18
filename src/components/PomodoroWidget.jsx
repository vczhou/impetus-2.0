import  React, { useState , useEffect } from 'react';
import Countdown from 'react-countdown';
import { Button, Typography } from 'antd';

const { Title } = Typography;

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
