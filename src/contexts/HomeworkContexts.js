import React, { Component } from 'react'
import STORE from '../dummystore'


const HomeworkContext = React.createContext({
    homeworkList: '',
    error: null
  })
  
export default HomeworkContext

export class HomeworkProvider extends Component {

state = {
  homeworkList: STORE.homeworkList,
  error: null
};

render() {

  console.log(this.state.homeworkList[0])

    const contextValue = {
      homeworkList: this.state.homeworkList,
      error: this.state.error,
    }
    return (
      <HomeworkContext.Provider value={contextValue}>
        {this.props.children}
      </HomeworkContext.Provider>
    )
  }
}
