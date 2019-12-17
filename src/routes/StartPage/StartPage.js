import React from 'react';
import ClassesContext from '../../contexts/ClassesContexts'
import Schedule from '../Schedule/Schedule'
import HomeworkList from '../HomeworkList/HomeworkList'
import UpdatesList from '../UpdatesList/UpdatesList'
import './StartPage.css'

class StartPage extends React.Component {

  static contextType = ClassesContext



  render() {

    return (
        <div className="start-page">
            <Schedule />
            <HomeworkList />
            <UpdatesList />
        </div>
      
    )
  }
}

export default StartPage;