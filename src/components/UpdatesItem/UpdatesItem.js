import React from 'react'
import ClassesContext from '../../contexts/ClassesContexts'
import './UpdatesItem.css'

class UpdatesItem extends React.Component {

    static contextType = ClassesContext

    render() {

        return (
            <div>
                <h2>Latest</h2>
                <div className="updates-item">
                Updates item
            </div>

            </div>
            
        )
    }
}

export default UpdatesItem;