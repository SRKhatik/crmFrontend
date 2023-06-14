import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

function MyCalendar() {
  const localizer = momentLocalizer(moment);

  const events = [
    {
      start: new Date(2023, 5, 15, 10, 0),
      end: new Date(2023, 5, 15, 12, 0),
      title: 'Meeting',
    },
    // Add more events as needed
  ];

  return (
    <div>
      <Calendar 
      views={["day", "agenda", "work_week", "month"]}
      selectable
      localizer={localizer}
      defaultDate={new Date()}
      defaultView="month"
      events={events}
      style={{ height: "80vh" }}
     
    />
    </div>
  );
}

export default MyCalendar;
