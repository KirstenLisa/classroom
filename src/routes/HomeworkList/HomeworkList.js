import React, { Component } from 'react'
import HomeworkContext from '../../contexts/HomeworkContexts'
import HomeworkItem from '../../components/HomeworkItem/HomeworkItem'
import './HomeworkList.css'

export default class HomeworkList extends Component {
    static contextType = HomeworkContext
  
    render() {

      const class_id = this.props
      console.log(class_id)
  
      return (
          <div className="start-page">
              <HomeworkItem />
          </div>
        
      )
    }
  }