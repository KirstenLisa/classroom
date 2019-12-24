import React from 'react'
import {withRouter} from 'react-router'
import { Link } from 'react-router-dom'
import ClassesContext from '../../contexts/ClassesContext'
import './UpdatesList.css'

class UpdatesList extends React.Component {
    static contextType = ClassesContext

  
    render() {

    const userType = this.props.match.params.userType
    const classId = this.props.match.params.class
    console.log(this.props.match)
    const classUpdates = this.context.updatesList.filter(
                        update => update.class_id == classId)
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

            {userType === "teacher" && (
              <button
                type="button"
                className="add-update-button">
                  <Link to={`/latest/add-update/${classId}`}>
                    Add Update
                  </Link>
                </button>
            )}
              
          </div>
        
      )
    }
  }

export default withRouter(UpdatesList);
