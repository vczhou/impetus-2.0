import  React from 'react';
import { Popover, Button } from 'antd';
import TodoWidget from './TodoWidget';
import CalendarWidget from './CalendarWidget';
import PomodoroWidget from './PomodoroWidget';
import {BarsOutlined, CalendarOutlined, HourglassOutlined} from '@ant-design/icons';

import '../App.css';

function ProductivityWidgets() {
  const todoWidget = <TodoWidget />;
  const calendarWidget = <CalendarWidget />;
  const pomodoroWidget = <PomodoroWidget />;

  return (
    <div className="productivity">
      <Popover content={todoWidget} title="To Do" trigger="click">
        <Button shape="circle" size="large" icon={<BarsOutlined />} />
      </Popover>
      <Popover content={pomodoroWidget} title="Pomodoro Timer" trigger="click">
        <Button shape="circle" size="large" icon={<HourglassOutlined />} />
      </Popover>
      <Popover content={calendarWidget} title="Calendar" trigger="click">
        <Button shape="circle" size="large" icon={<CalendarOutlined />} />
      </Popover>
    </div>
  );
}

export default ProductivityWidgets;