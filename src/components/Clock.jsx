import  React, { useState , useEffect } from 'react';
import moment from 'moment';

function Clock() {

  const [date, setDate] = useState(new moment());

  useEffect(() => {
    var timer = setInterval(()=>setDate(new moment()), 1000 )
      return function cleanup() {
        clearInterval(timer);
      }
  });

  return (
    <div>
      <h2> {date.format("h:mm")} </h2>
    </div>
  );
}

export default Clock;