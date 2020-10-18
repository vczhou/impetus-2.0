import  React, { useState , useEffect } from 'react';
import moment from 'moment';
import { Typography } from 'antd';

const { Title } = Typography;

function Clock() {

  const [date, setDate] = useState(new moment());

  useEffect(() => {
    var timer = setInterval(()=>setDate(new moment()), 1000 )
      return function cleanup() {
        clearInterval(timer);
      }
  }); 

  return (
    <div className="clock">
      <h1 id="time"> {date.format("h:mm")} </h1>
    </div>
  );
}

export default Clock;