import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';

import Data from './data/classdata.js';


const classData = Data.map(item => {
    const program = item.program ? <div><p className="label">PROGRAM: </p> <p>{item.program}</p></div> : '';
    const students = item.students ? <div><p className="label">STUDENTS: </p> <p><Markdown>{item.students}</Markdown></p></div>: '';
    return(
        <div className="class-information">
            <strong>{item.title}</strong>
            {program}
            <p className="label">INSTRUCTORS:</p>
            <p><Markdown>{item.instructors}</Markdown></p>
            {students}
            <p><Markdown>{item.description}</Markdown></p>
        </div>
    );
  }
);


class Classes extends Component {
  render() {
    return (
      <div>
        <h1>Classes</h1>
        {classData}
      </div>
    );
  }
}

export default Classes;
