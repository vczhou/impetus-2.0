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
      <Title> {date.format("h:mm")} </Title>
    </div>
  );
}

export default Clock;