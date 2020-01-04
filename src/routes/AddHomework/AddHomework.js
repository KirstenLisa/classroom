import React from 'react';
import { format } from 'date-fns'
import ClassesContext from '../../contexts/ClassesContext'
import HomeworkApiService from '../../services/homework-api-service'
import TeacherApiServices from '../../services/teachers-api-services'
import './AddHomework.css'

class AddHomework extends React.Component {


    static contextType = ClassesContext;

    constructor(props) {
        super(props);
        this.state = {
          homework: '',
          subject: '',
          due_date: '',
          teacher_id: '',
          teacher_name: '',
          error: null
          }
        }

    componentDidMount() {
        this.context.clearError()
        TeacherApiServices.getTeachers()
            .then(this.context.setTeachersList)
            .catch(this.context.setError)
          }


    updateHomework(homework) {
        this.setState({homework: homework})
    }


    updateDate(due_date) {
        this.setState({due_date: due_date})
    }


    updateTeacherId(teacher_name) {
        const teacher = this.context.teachersList.filter(teacher => teacher.teacher_name == teacher_name)
        const teacher_id = teacher[0].id
        this.setState({teacher_id: teacher_id})
    }

    updateTeacherName(teacher_name) {
        this.setState({teacher_name: teacher_name})
        this.updateTeacherId(teacher_name)
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('submit homework')
      

        const {homework, due_date, teacher_name} = e.target
        

        const newHomework = {
            homework_id: this.props.match.params.homework,
            subject: this.props.match.params.subject,
            homework: homework.value,
            due_date: new Date(),
            teacher_id: this.state.teacher_id,
            teacher_name: teacher_name.value,
            class_id: this.props.match.params.class   
        }

        console.log(newHomework)

        HomeworkApiService.postHomework(newHomework)
            .then(this.context.addHomework)
            .then(this.props.history.push(`/welcome/teacher/${this.props.match.params.class}/${this.props.match.params.homework}`))
            .catch(this.context.setError)

        
    }


    render() {

        const {error} = this.state;
        const subject = this.props.match.params.subject
        const teachersList = this
        .context
        .teachersList
        .map(
            (teacher, i) => <option value={teacher.teacher_name} key={i} id={teacher.teacher_id}>{teacher.teacher_name}</option>
          );
        
        const date = new Date(); // Now
         


        return(
            <form className="addHomeworkForm" onSubmit={e => this.handleSubmit(e)}>
                <div className='addHomework_error' role='alert'>
                {error && <p>{error.message}</p>}
                </div>
                <h2>Add more homework</h2>

                  
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                        type="text"
                        className="registration_control"
                        name="subject"
                        id="subject"
                        value={subject}
                        aria-required="true" 
                        />
                </div>
                
                <div className="form-group">
                    <label htmlFor="homework">Homework</label>
                    <input
                        type="text"
                        className="registration_control"
                        name="homework"
                        id="homework"
                        onChange={e => this.updateHomework(e.target.value)}
                        aria-required="true" 
                        />
                </div>
               
                <div className="teacher-select">
                    <label htmlFor="teacher_name">Select: </label>
                    <select
                        name="teacher_name"
                        onChange={e => this.updateTeacherName(e.target.value)}
                        aria-required="true">
                            <option value={"None"}>Teacher...</option>
                            {teachersList}
                    </select>
                </div>

                <div className="date-select">
                    <label htmlFor="due_date">Select: </label>
                    <select
                        name="due_date"
                        id="due_date"
                        onChange={e => this.updateDate(e.target.value)}
                        aria-required="true">
                            <option value={"None"}>Due Date...</option>
                            <option value={new Date(date.setDate(date.getDate() + 1))}>{format(new Date(), 'do MMM yyyy')}</option>
                            <option value={date.setDate(date.getDate() + 1)}>{format(date.setDate(date.getDate() + 1), 'do MMM yyyy')}</option>
                            <option value={date}>{format(date.setDate(date.getDate() + 2), 'do MMM yyyy')}</option>
                            <option value={date}>{format(date.setDate(date.getDate() + 3), 'do MMM yyyy')}</option>
                            <option value={date}>{format(date.setDate(date.getDate() + 4), 'do MMM yyyy')}</option>
                    </select>
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

export default AddHomework;