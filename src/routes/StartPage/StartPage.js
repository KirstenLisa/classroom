import React from 'react';
import ClassesContext from '../../contexts/ClassesContext'
import Schedule from '../Schedule/Schedule'
import HomeworkList from '../HomeworkList/HomeworkList'
import UpdatesList from '../UpdatesList/UpdatesList'
import './StartPage.css'
import { thisExpression } from '@babel/types';

class StartPage extends React.Component {

  static contextType = ClassesContext

  constructor(props) {
    super(props);
    this.state = {
        width: 0,
        minWidth: window.innerHeight > 720,
    };
}

updateDimensions = () => {
  console.log('update dimension')
  this.setState({ width: window.innerWidth });
  this.updateMinWidth()
}

updateMinWidth() {
  console.log('update min width')
  this.setState({ minWidth: window.innerheight > 720})
}

componentDidMount() {
  window.addEventListener('resize', this.updateDimensions);
}
componentWillUnmount() {
  window.removeEventListener('resize', this.updateDimensions);
}



  render() {

    const minWidth = this.state.minWidth
    const width = this.state.width
    console.log(minWidth)
    console.log(this.state.width)
    console.log(this.state.minWidth)

    return (
        <div className="start-page">
          <div className="schedule-section">
            <h2 className="startpage-headline-blue">SCHEDULE</h2>
            { width > 630 ? (
                  <div><Schedule /></div>
              ) : (
                  <div>If you cannot see the schedule rotate your device</div>
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