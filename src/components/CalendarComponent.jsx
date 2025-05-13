import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const onChange= date =>{
    setDate(date);
  };
  return (
    <div>
      <Calendar onChange={onChange} value={date} className="rounded-2"/>
    </div>
  );
};

export default CalendarComponent;
