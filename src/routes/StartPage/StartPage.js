import React from 'react';
import ClassesContext from '../../contexts/ClassesContext'
import Schedule from '../Schedule/Schedule'
import HomeworkList from '../HomeworkList/HomeworkList'
import UpdatesList from '../UpdatesList/UpdatesList'
import './StartPage.css'

class StartPage extends React.Component {

  static contextType = ClassesContext



  render() {

    return (
        <div className="start-page">
          <div className="schedule-section">
            <h2>SCHEDULE</h2>
            <Schedule />
          </div>
          <div className="homework-section">
            <h2>HOMEWORK</h2>
            <HomeworkList />
          </div>
          <div className="updates-section">
            <h2>LATEST</h2>
            <UpdatesList />
          </div>
            
        </div>
      
    )
  }
}

export default StartPage;