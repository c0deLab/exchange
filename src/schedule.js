import React, { Component } from 'react';

import Data from './data/scheduledata.js';

const day1 = Data.filter(item => item.day === 1);
const day2 = Data.filter(item => item.day === 2);
const day3 = Data.filter(item => item.day === 3);
const day4 = Data.filter(item => item.day === 4);

function createSchedule(items) {
    const sched = []
    items.forEach(item => {
        sched.push(
            <div className="schedule-item">
                <strong>{item.title}</strong>
                <p className="time">{item.time}</p>
                <p className="panel">{item.panel}</p>
            </div>
        );
    });
    return sched;
}

class Schedule extends Component {
  render() {
    return (
      <div>
      <h1>Schedule</h1>
      <h2>Wednesday May 1, 2019</h2>
      {createSchedule(day1)}
      <h2>Friday May 3, 2019</h2>
      {createSchedule(day2)}
      <h2>Monday May 6, 2019</h2>
      {createSchedule(day3)}
      <h2>Tuesday May 7, 2019</h2>
      {createSchedule(day4)}
      </div>
    );
  }
}

export default Schedule;
