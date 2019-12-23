import React from 'react'
import './Homework.css'

function Homework(props) {

        return(
            
                <div className="homework">
                    <p><b>To Do: </b>{props.homework}</p>
                    <p><b>Until: </b>{props.due_date}</p>
                    <p><b>Teacher: </b>{props.teacher_name}</p>
                </div>
           
        )
    }

export default Homework;