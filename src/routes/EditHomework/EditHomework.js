import React from 'react';
import { format } from 'date-fns'
import ClassesContext from '../../contexts/ClassesContext'
import TeacherApiServices from '../../services/teachers-api-services'
import HomeworkApiService from '../../services/homework-api-service'
import './EditHomework.css'

class EditHomework extends React.Component {


    static contextType = ClassesContext;

    constructor(props) {
        super(props);
        this.state = {
          homework: '',
          due_date: '',
          teacher_id: '',
          error: null
          }
        }
    
    componentDidMount() {
        console.log('component did mount')
        const id = this.props.match.params.id
        //console.log(id)
        this.context.clearError()

        TeacherApiServices.getTeachers()
            .then(this.context.setTeachersList)
            .catch(this.context.setError)

        HomeworkApiService.getHomeworkItem(id)
            .catch(this.context.error)
            .then(responseData => {
                this.setState({
                    id: responseData.id,
                    homework_id: responseData.homework_id,
                    subject: responseData.subject,
                    homework: responseData.homework,
                    due_date: responseData.due_date,
                    teacher_id: responseData.teacher_id,
                    teacher_name: responseData.teacher_name
                    })
                })
        }


    updateHomework(homework) {
        this.setState({homework: homework})
    }


    updateDate(due_date) {
        this.setState({due_date: due_date})
    }


    updateTeacher(teacher_id) {
        this.setState({teacher_id: teacher_id})
    }



    handleSubmit(e) {
        e.preventDefault();
        console.log('update homework')
        const id = this.props.match.params.id
        const homework_id=this.props.match.params.homework
        const class_id=this.props.match.params.class

        const {homework, due_date, teacher_id} = e.target
        const teachersList = this.context.teachersList
        const teacherId = teacher_id.value
        const teacher = teachersList.filter(teacher => teacher.id == teacher_id.value)
        const teacherName= teacher[0].teacher_name
        

        const updatedHomework = {
            id: id,
            homework_id: homework_id,
            subject: this.state.subject,
            homework: homework.value,
            due_date: due_date.value,
            teacher_id: teacher_id.value,
            teacher_name: teacherName,
            class_id: class_id   
        }

        console.log(updatedHomework)


        HomeworkApiService.updateHomework(id, updatedHomework)
            .then(this.context.updateHomework(updatedHomework))
            .then(this.props.history.push(`/homework/${class_id}/${homework_id}/${this.state.subject}`))
            .catch(this.context.setError)
    }


    render() {

        const {error} = this.state;
        const teacherId = this.state.teacher_id
        const uniqueTeachersList = this.context.teachersList.filter(teacher => teacher.id !== teacherId)
        const teachersList = uniqueTeachersList
        .map(
            (teacher, i) => <option value={teacher.id} key={i} id={teacher.id}>{teacher.teacher_name}</option>
          );
        

        
        const date = new Date(); // Now
         


        return(
            <form className="addHomeworkForm" onSubmit={e => this.handleSubmit(e)}>
                <div className='addHomework_error' role='alert'>
                {error && <p>{error.message}</p>}
                </div>
                <h2>Edit homework</h2>
                
                <div className="form-group">
                    <label htmlFor="">Homework</label>
                    <input
                        type="text"
                        className="registration_control"
                        name="homework"
                        id="homework"
                        value={this.state.homework}
                        onChange={e => this.updateHomework(e.target.value)}
                        aria-required="true" 
                        />
                </div>
               
                <div className="teacher-select">
                    <label htmlFor="teacher_name">Select: </label>
                    <select
                        name="teacher_id"
                        onChange={e => this.updateTeacher(e.target.value)}
                        aria-required="true">
                            <option value={this.state.teacher_id}>{this.state.teacher_name}</option>
                            {teachersList}
                    </select>
                </div>

                <div className="date-select">
                    <label htmlFor="due_date">Select: </label>
                    <label htmlFor="due_date">Due Date </label>
                    <input
                        type="date"
                        className="registration_control"
                        name="due_date"
                        id="due_date"
                        onChange={e => this.updateDate(e.target.value)}
                        aria-required="true" 
                        />
                </div>

       

                <div className="update_button_group">
                    <button type='button' onClick={() => this.props.history.goBack()}>
                        Cancel
                    </button>
           
                    <button
                        type="submit"
                        className="save_button">
                            Save
                    </button>
                </div>

            </form>
        )
    }
}

export default EditHomework;