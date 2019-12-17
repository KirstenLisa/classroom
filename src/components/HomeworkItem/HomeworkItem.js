import React from 'react'
import ClassesContext from '../../contexts/ClassesContexts'
import './HomeworkItem.css'

class HomeworkItem extends React.Component {

    static contextType = ClassesContext

    render() {

        return (
            <div>
                <h2>Homework</h2>
                <div className="homework-item">
                Homework item
            </div>

            </div>
            
        )
    }
}

export default HomeworkItem;
