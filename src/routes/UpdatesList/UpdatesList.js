import React from 'react'
import ClassesContext from '../../contexts/ClassesContexts'
import UpdatesItem from '../../components/UpdatesItem/UpdatesItem'
import './UpdatesList.css'

class UpdatesList extends React.Component {
    static contextType = ClassesContext
  
  
  
    render() {
  
      return (
          <div className="updates-page">
              <UpdatesItem />
          </div>
        
      )
    }
  }

export default UpdatesList;