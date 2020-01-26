import React from 'react';
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
        width: 0,
        minWidth: window.innerHeight > 630,
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

    const minWidth = this.state.minWidth
    console.log(minWidth)
    console.log(this.state.width)

    return (
        <div className="start-page">
          <div className="schedule-section">
            <h2 className="startpage-headline-blue">SCHEDULE</h2>
            {minWidth ? (
                  <div><Schedule /></div>
              ) : (
                  <div>No schedule</div>
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