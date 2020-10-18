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
import { HeartOutlined } from '@ant-design/icons';

function HomePage() {
  const [hasCompletedSetup, setHasCompletedSetup] = useState(false);
  const [name, setName] = useState('');

  const todoWidget = <TodoWidget />;
  const calendarWidget = <CalendarWidget />;
  const pomodoroWidget = <PomodoroWidget />;
  const fillerContent = <img src="../assets/weather_forecast.png" width="400px"/>;
  const spiritWidget = <SpiritWidget />

  function completeSetup(name) {
    setHasCompletedSetup(true);
    setName(name);
    return hasCompletedSetup;
  }

  // if (!hasCompletedSetup) {
  //   return (
  //     <Setup completeSetup={(name) => completeSetup(name)} />
  //   );
  // }

  return (
    <div className="home-page">
      <Clock />
      <WelcomeMessage name={name} />
      <Mantra />
      <Popover content={spiritWidget} title="Spirit" trigger="click">
        <Button shape="circle" size="large" icon={<HeartOutlined />}>Spend some time with Jesus today</Button>
      </Popover>
      <Popover content={todoWidget} title="To Do" trigger="click">
        <Button>To Do</Button>
      </Popover>
      <Popover content={pomodoroWidget} title="Pomodoro Timer" trigger="click">
        <Button>Pomodoro</Button>
      </Popover>
      <Popover content={calendarWidget} title="Calendar" trigger="click">
        <Button>Calendar</Button>
      </Popover>
      <Popover content={fillerContent} title="Weather" trigger="click">
        <Button>Weather</Button>
      </Popover>
      <Popover content={devotionalContent} title="Devotional" trigger="click">
        <Button>Devotional</Button>
      </Popover>
      <Popover content={praiseJournalWidget} title="Praise Journal" trigger="click">
        <Button>Praise Journal</Button>
      </Popover>
      <Popover content={prayerWidget} title="Prayer" trigger="click">
        <Button>Prayer</Button>
      </Popover>
      <Popover content={missionsContent} title="Missions & Giving" trigger="click">
        <Button>Missions & Giving</Button>
      </Popover>
      <Popover content={fillerContent} title="Settings" trigger="click">
        <Button>Settings</Button>
      </Popover>
    </div>
  );
}

export default HomePage;