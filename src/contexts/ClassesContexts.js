import React, { Component } from 'react'
import classList from '../dummystore'


const ClassesContext = React.createContext({
    classList: '',
    error: null
  })
  
export default ClassesContext

export class ClassesProvider extends Component {

state = {
  classList: classList,
  error: null
};

render() {

  console.log(this.state.classList[0])

    const contextValue = {
      classList: this.state.classList,
      error: this.state.error,
    }
    return (
      <ClassesContext.Provider value={contextValue}>
        {this.props.children}
      </ClassesContext.Provider>
    )
  }
}
