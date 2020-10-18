import React, { useState } from 'react';
import Clock from './Clock';
import Setup from './Setup';
import WelcomeMessage from './WelcomeMessage';
import Mantra from './Mantra';
import { Popover, Button } from 'antd';
import TodoWidget from './TodoWidget';
import CalendarWidget from './CalendarWidget';

function HomePage() {
  const [hasCompletedSetup, setHasCompletedSetup] = useState(false);
  const [name, setName] = useState('');

  const todoWidget = <TodoWidget />;
  const calendarWidget = <CalendarWidget />;
  const fillerContent = <div>Some filler content!</div>;

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
      <Popover content={todoWidget} title="To Do" trigger="click">
        <Button>To Do</Button>
      </Popover>
      <Popover content={fillerContent} title="Pomodoro Timer" trigger="click">
        <Button>Pomodoro</Button>
      </Popover>
      <Popover content={calendarWidget} title="Calendar" trigger="click">
        <Button>Calendar</Button>
      </Popover>
      <Popover content={fillerContent} title="Weather" trigger="click">
        <Button>Weather</Button>
      </Popover>

      <Popover content={fillerContent} title="Devotional" trigger="click">
        <Button>Devotional</Button>
      </Popover>
      <Popover content={fillerContent} title="Praise Journal" trigger="click">
        <Button>Praise Journal</Button>
      </Popover>
      <Popover content={fillerContent} title="Prayer" trigger="click">
        <Button>Prayer</Button>
      </Popover>
      <Popover content={fillerContent} title="Missions & Giving" trigger="click">
        <Button>Missions/Give</Button>
      </Popover>
      
      <Popover content={fillerContent} title="Settings" trigger="click">
        <Button>Settings</Button>
      </Popover>
    </div>
  );
}

export default HomePage;