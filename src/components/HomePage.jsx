import React, { useState } from 'react';
import Clock from './Clock';
import Setup from './Setup';
import WelcomeMessage from './WelcomeMessage';
import Mantra from './Mantra';
import { Popover, Button } from 'antd';
import TodoWidget from './TodoWidget';
import CalendarWidget from './CalendarWidget';
import PomodoroWidget from './PomodoroWidget';
import SpiritWidget from './SpiritWidget';
import SettingsWidget from './SettingsWidget';
import { HeartOutlined, BarsOutlined, CalendarOutlined, CloudOutlined, HourglassOutlined, SettingOutlined} from '@ant-design/icons';

function HomePage() {
  const [hasCompletedSetup, setHasCompletedSetup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const todoWidget = <TodoWidget />;
  const calendarWidget = <CalendarWidget />;
  const pomodoroWidget = <PomodoroWidget />;
  const fillerContent = <img src="../assets/weather_forecast.png" width="400px"/>;
  const spiritWidget = <SpiritWidget />

  function completeSetup(name, email) {
    setHasCompletedSetup(true);
    setName(name);
    setEmail(email);
    return hasCompletedSetup;
  }

  if (!hasCompletedSetup) {
    return (
      <Setup completeSetup={(name, email) => completeSetup(name, email)} />
    );
  }

  function updateSetup(name, email) {
    if (name != null && name.length !== 0) {
      setName(name);
    }
    if (email != null && email.length !== 0) {
      setEmail(email);
    }
  }

  const settingsWidget = (
    <SettingsWidget 
      updateSetup={updateSetup} 
      name={name} 
      email={email}
    />
  );

  return (
    <div className="home-page">
      <Clock />
      <WelcomeMessage name={name} />
      <Popover content={spiritWidget} title="Spirit" trigger="click">
        <Button shape="round" size="large" icon={<HeartOutlined />}>Spend some time with Jesus today</Button>
      </Popover>
      <Mantra />
      <div>
        <Popover content={todoWidget} title="To Do" trigger="click">
          <Button shape="circle" size="large" icon={<BarsOutlined />} />
        </Popover>
        <Popover content={pomodoroWidget} title="Pomodoro Timer" trigger="click">
          <Button shape="circle" size="large" icon={<HourglassOutlined />} />
        </Popover>
        <Popover content={calendarWidget} title="Calendar" trigger="click">
          <Button shape="circle" size="large" icon={<CalendarOutlined />} />
        </Popover>
        <Popover content={fillerContent} title="Weather" trigger="click">
          <Button shape="circle" size="large" icon={<CloudOutlined />} />
        </Popover>
        <Popover content={settingsWidget} title="Settings" trigger="click">
          <Button shape="circle" size="large" icon={<SettingOutlined />} />
        </Popover>
      </div>
    </div>
  );
}

export default HomePage;