import React, { Component } from 'react'
import updatesList from '../dummystore'


const UpdatesContext = React.createContext({
    updatesList: '',
    error: null
  })
  
export default UpdatesContext

export class UpdatesProvider extends Component {

state = {
  updatesList: updatesList,
  error: null
};

render() {

  console.log(this.state.updatesList[0])

    const contextValue = {
      updatesList: this.state.updatesList,
      error: this.state.error,
    }
    return (
      <UpdatesContext.Provider value={contextValue}>
        {this.props.children}
      </UpdatesContext.Provider>
    )
  }
}