import React, { Component } from 'react'
import STORE from '../dummystore'


const ClassesContext = React.createContext({
    teachersList: '',
    classList: '',
    homeworkList: '',
    updatesList:'',
    error: null
  })
  
export default ClassesContext

export class ClassesProvider extends Component {

state = {
  teachersList: STORE.teachersList,
  classList: STORE.classList,
  homeworkList: STORE.homeworkList,
  updatesList: STORE.updatesList,
  error: null
};

render() {
  //console.log(this.state.teachersList[0])
  //console.log(this.state.classList[0])
  //console.log(this.state.homeworkList[0])
  //console.log(this.state.updatesList[0])

    const contextValue = {
      teachersList: this.state.teachersList,
      classList: this.state.classList,
      homeworkList: this.state.homeworkList,
      updatesList: this.state.updatesList,
      error: this.state.error,
    }
    return (
      <ClassesContext.Provider value={contextValue}>
        {this.props.children}
      </ClassesContext.Provider>
    )
  }
}
