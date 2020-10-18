
import React from 'react'
import { Calendar } from 'antd';

import 'antd/dist/antd.css';

function CalendarWidget(props) {

  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  return (
    <div className="calendar">
       <Calendar 
       	  fullscreen={false}
       	  onPanelChange={onPanelChange} 
       />
    </div>
  );
}

export default CalendarWidget;