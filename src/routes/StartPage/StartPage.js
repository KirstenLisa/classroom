import React from 'react';
import { Link } from 'react-router-dom'
import ClassesContext from '../../contexts/ClassesContext'
import Schedule from '../Schedule/Schedule'
import HomeworkList from '../HomeworkList/HomeworkList'
import UpdatesList from '../UpdatesList/UpdatesList'
import './StartPage.css'

class StartPage extends React.Component {

  static contextType = ClassesContext

  constructor(props) {
    super(props);
    this.state = {
        width: window.innerWidth
    };
}

updateDimensions = () => {
  this.setState({ width: window.innerWidth });
}

componentDidMount() {
  window.addEventListener('resize', this.updateDimensions);
}
componentWillUnmount() {
  window.removeEventListener('resize', this.updateDimensions);
}



  render() {

    const width = this.state.width
    console.log(width)
    const classId = window.sessionStorage.getItem('classId')
    const classInfo = this.context.classList.filter(c => c.class_id == classId)
    const classTeacher = classInfo.map(c =>  c.class_teacher)
    const userType = window.sessionStorage.getItem('userType')

    return (
        <div className="start-page">
          { userType === 'parent' && (
            <div className='email-link'>
              <Link to='/email'>Write {classTeacher}</Link>
            </div>
          )}
          
          <div className="schedule-section">
            <h2 className="startpage-headline-blue">SCHEDULE</h2>
            { width > 630 ? (
                  <div><Schedule /></div>
              ) : (
                  <div className="alt-schedule">If you cannot see the schedule rotate your device</div>
              )}
          </div>
          <div className="homework-section">
            <h2 className="startpage-headline-green">HOMEWORK</h2>
            <HomeworkList />
          </div>
          <div className="updates-section">
            <h2 className="startpage-headline-red">LATEST</h2>
            <UpdatesList />
          </div>
            
        </div>
      
    )
  }
}

export default StartPage;