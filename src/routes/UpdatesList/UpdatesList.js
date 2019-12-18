import React from 'react'
import { Link } from 'react-router-dom'
import ClassesContext from '../../contexts/ClassesContexts'
import './UpdatesList.css'

class UpdatesList extends React.Component {
    static contextType = ClassesContext

  
    render() {

    const userType = "parent"
    const classId = 2
    const classUpdates = this.context.updatesList.filter(
                        update => update.class_id === classId)
    const updatesList = classUpdates.map(
              (update, i) => 
              <li id={i} key={i}>
                <Link to={`/latest/${userType}/${classId}/${update.update_id}`}>
                  {update.headline}
                </Link>
                
              </li>

    )
  
      return (
          <div className="updates-page">
            <ul className="updates-list">
              {updatesList}
            </ul>
              
          </div>
        
      )
    }
  }

export default UpdatesList;