import React from 'react';
import ClassesContext from '../../contexts/ClassesContext';
import './Schedule.css';

class Schedule extends React.Component {
  static contextType = ClassesContext;

  constructor(props) {
    super(props);
    this.state = {
      schedule: [
        {
          time: '8:00',
          monday: 'Art',
          tuesday: 'Math',
          wednesday: 'Social Studies',
          thursday: 'Music',
          friday: 'Literature'
        },
        {
          time: '10:00',
          monday: 'Math',
          tuesday: 'Biology',
          wednesday: 'Literature',
          thursday: 'Languages',
          friday: 'History'
        },
        {
          time: '12:00',
          monday: 'Lunch',
          tuesday: 'Lunch',
          wednesday: 'Lunch',
          thursday: 'Lunch',
          friday: 'Lunch'
        },
        {
          time: '13:00',
          monday: 'Literature',
          tuesday: 'Art',
          wednesday: 'Music',
          thursday: 'History',
          friday: 'Languages'
        },
        {
          time: '14:00',
          monday: 'Biology',
          tuesday: 'Social Studies',
          wednesday: 'History',
          thursday: 'Music',
          friday: 'Music'
        }
      ]
    };
  }

  renderScheduleTable() {
    return this.state.schedule.map((schedule, index) => {
      const { time, monday, tuesday, wednesday, thursday, friday } = schedule;
      return (
        <tr key={index}>
          <td>{time}</td>
          <td>{monday}</td>
          <td>{tuesday}</td>
          <td>{wednesday}</td>
          <td>{thursday}</td>
          <td>{friday}</td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    const header = Object.keys(this.state.schedule[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  render() {
    return (
      <div className='schedule-container'>
        <table id='schedule'>
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderScheduleTable()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Schedule;
