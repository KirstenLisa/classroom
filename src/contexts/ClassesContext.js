import React, { Component } from 'react'
import STORE from '../dummystore'


const ClassesContext = React.createContext({
    teachersList: '',
    classList: '',
    homeworkList: '',
    updatesList:'',
    commentsList: '',
    addHomework: () => {},
    addUpdate: () => {},
    addComment: () => {},
    deleteHomework: () => {},
    deleteUpdate: () => {},
    updateHomework: () => {},
    updateUpdate: () => {},
    error: null
  })
  
export default ClassesContext

export class ClassesProvider extends Component {

state = {
  teachersList: STORE.teachersList,
  classList: STORE.classList,
  homeworkList: STORE.homeworkList,
  updatesList: STORE.updatesList,
  commentsList: STORE.commentsList,
  error: null
};

addHomework = homework => {
  console.log('add homework')
  this.setState({
    homeworkList: [ ...this.state.homeworkList, homework]
  })
}

deleteHomework = homeworkId => {
  console.log('delete homework')
  let newHomeworkList = this.state.homeworkList.filter(homework => 
    homework.homework_id != homeworkId)
    
    this.setState({
      homeworkList: newHomeworkList
    })
}

addUpdate = update => {
  console.log('add update')
  this.setState({
    updatesList: [ ...this.state.updatesList, update]
  })
}

deleteUpdate = updateId => {
  console.log('delete update')
  let newUpdatesList = this.state.updatesList.filter(update => 
    update.update_id != updateId)
    
    this.setState({
      updatesList: newUpdatesList
    })
}

addComment = comment => {
  console.log('add comment')
  this.setState({
    commentsList: [ ...this.state.commentsList, comment]
  })
}

updateHomework = updatedHomework => {
  console.log('update homework')
  const newHomeworkList = this.state.homeworkList.map(homework => 
    (homework.homework_id == updatedHomework.homework_id)
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

updateComment = updatedComment => {
  const newCommentsList = this.state.commentsList.map(comment => 
    (comment.comment_id == updatedComment.comment_id)
    ? updatedComment
    : comment)
    this.setState({
      commentsList: newCommentsList
    })
}


render() {
  //console.log(this.state.teachersList[0])
  //console.log(this.state.classList[0])
  //console.log(this.state.homeworkList[0])
  //console.log(this.state.commentsList[0])

    const contextValue = {
      teachersList: this.state.teachersList,
      classList: this.state.classList,
      homeworkList: this.state.homeworkList,
      updatesList: this.state.updatesList,
      commentsList: this.state.commentsList,
      addHomework: this.addHomework,
      addUpdate: this.addUpdate,
      addComment: this.addComment,
      deleteHomework: this.deleteHomework,
      deleteUpdate: this.deleteUpdate,
      updateHomework: this.updateHomework,
      updateUpdate: this.updateUpdate,
      error: this.state.error,
    }
    return (
      <ClassesContext.Provider value={contextValue}>
        {this.props.children}
      </ClassesContext.Provider>
    )
  }
}
