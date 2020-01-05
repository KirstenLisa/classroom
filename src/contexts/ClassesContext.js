import React, { Component } from 'react'
import STORE from '../dummystore'
import { set } from 'date-fns/esm';


const ClassesContext = React.createContext({
    teachersList: [],
    classList: [],
    homeworkList: [],
    updatesList:[],
    usersList: [],
    updatesCommentsList: [],
    homeworkCommentsList: [],
    setTeachersList: () => {},
    setClassList: () => {},
    setUsersList: () => {},
    setHomeworkList: () => {},
    setUpdatesList: () => {},
    setHomeworkCommentsList: () => {},
    setUpdatesCommentsList: () => {},
    addUser: () => {},
    addHomework: () => {},
    addUpdate: () => {},
    addUpdateComment: () => {},
    addHomeworkComment: () => {},
    deleteHomework: () => {},
    deleteUpdate: () => {},
    updateHomework: () => {},
    updateUpdate: () => {},
    error: null
  })
  
export default ClassesContext

export class ClassesProvider extends Component {

state = {
  teachersList: [],
  classList: [],
  usersList: [],
  homeworkList: [],
  updatesList: [],
  updatesCommentsList: [],
  homeworkCommentsList: [],
  error: null
};

setTeachersList = teachersList => {
  this.setState({ teachersList })
}

setClassList = classList => {
  this.setState({ classList })
}

setUsersList = usersList => {
  this.setState({ usersList })
}

setHomeworkList = homeworkList => {
  this.setState({ homeworkList })
}

setUpdatesList = (updatesList) => {
  this.setState({ updatesList })
}

setHomeworkCommentsList = homeworkCommentsList => {
  console.log('set HOMEWORK COMMENTS list')
  this.setState({ homeworkCommentsList })
}

setUpdatesCommentsList = updatesCommentsList => {
  //console.log('set update COMMENTS list')
  this.setState({ updatesCommentsList })
}

setError = error => {
  //console.error(error)
  this.setState({ error })
}

clearError = () => {
  this.setState({ error: null })
}

addUser = newUser => {
  console.log('add user')
  this.setUsersList([
    ...this.state.usersList,
    newUser
  ])
}

addHomework = newHomework => {
  console.log('add homework')
  this.setHomeworkList([
    ...this.state.homeworkList,
    newHomework
  ])
}

deleteHomework = homeworkId => {
  //console.log('delete homework')
  let newHomeworkList = this.state.homeworkList.filter(homework => 
    homework.homework_id != homeworkId)
    
    this.setHomeworkList(newHomeworkList)
}

addUpdate = newUpdate => {
  console.log('add update')
  this.setUpdatesList([
    ...this.state.updatesList,
    newUpdate
  ])
}

deleteUpdate = updateId => {
  //console.log('delete update')
  let newUpdatesList = this.state.updatesList.filter(update => 
    update.update_id != updateId)
    
  this.setUpdatesList(newUpdatesList)
      
}

addUpdateComment = newComment => {
  console.log('add comment')
  this.setUpdatesCommentsList([
    ...this.state.updatesCommentsList,
    newComment
  ])
}


addHomeworkComment = newComment => {
  console.log('add comment')
  this.setHomeworkCommentsList([
    ...this.state.homeworkCommentsList,
    newComment
  ])
}

updateHomework = updatedHomework => {
  console.log('update homework')
  const newHomeworkList = this.state.homeworkList.map(homework => 
    (homework.id == updatedHomework.id)
    ? updatedHomework
    : homework)
    this.setState({
      homeworkList: newHomeworkList
    })
}

updateUpdate = updatedUpdate => {
  const newUpdatesList = this.state.updatesList.map(update => 
    (update.update_id == updatedUpdate.update_id)
    ? updatedUpdate
    : update)
    this.setState({
      updatesList: newUpdatesList
    })
}



render() {
  //console.log(this.state.teachersList[0])
  //console.log(this.state.classList[0])
  //console.log(this.state.homeworkList[0])
  //console.log(this.state.updatesCommentsList)

    const contextValue = {
      teachersList: this.state.teachersList,
      classList: this.state.classList,
      usersList: this.state.usersList,
      homeworkList: this.state.homeworkList,
      updatesList: this.state.updatesList,
      commentsList: this.state.commentsList,
      updatesCommentsList: this.state.updatesCommentsList,
      homeworkCommentsList: this.state.homeworkCommentsList,
      setTeachersList: this.setTeachersList,
      setClassList: this.setClassList,
      setUsersList: this.setUsersList,
      setHomeworkList: this.setHomeworkList,
      setUpdatesList: this.setUpdatesList,
      setHomeworkCommentsList: this.setHomeworkCommentsList,
      setUpdatesCommentsList: this.setUpdatesCommentsList,
      addUser: this.addUser,
      addHomework: this.addHomework,
      addUpdate: this.addUpdate,
      addComment: this.addComment,
      deleteHomework: this.deleteHomework,
      deleteUpdate: this.deleteUpdate,
      updateHomework: this.updateHomework,
      updateUpdate: this.updateUpdate,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError
    }
    return (
      <ClassesContext.Provider value={contextValue}>
        {this.props.children}
      </ClassesContext.Provider>
    )
  }
}
