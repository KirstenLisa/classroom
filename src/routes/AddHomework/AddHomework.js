import React from 'react';
import ClassesContext from '../../contexts/ClassesContext'
import HomeworkApiService from '../../services/homework-api-service'
import TeacherApiServices from '../../services/teachers-api-services'
import ValidationError from '../../components/ValidationError'
import './AddHomework.css'

class AddHomework extends React.Component {


    static contextType = ClassesContext;

    constructor(props) {
        super(props);
        this.state = {
            homework: {value: '', touched: false},
            subject: '',
            due_date: {value: '', touched: false},
            teacher_id: '',
            teacher_name: {value: 'None', touched: false},
            error: null
        }}

    componentDidMount() {
        this.context.clearError()
        TeacherApiServices.getTeachers()
            .then(this.context.setTeachersList)
            .catch(this.context.setError)
          }


    updateHomework(homework) {
        this.setState({homework: {value: homework, touched: true}})
    }


    updateDate(due_date) {
        this.setState({due_date: {value: due_date, touched: true}})
    }


    updateTeacherId(teacher_name) {
        const teacher = this.context.teachersList.filter(teacher => teacher.teacher_name == teacher_name)
        const teacher_id = teacher[0].id
        this.setState({teacher_id})
    }

    updateTeacherName(teacher_name) {
        this.setState({teacher_name: {value: teacher_name, touched: true}})
        this.updateTeacherId(teacher_name)
    }

    validateHomework() {
        const homework = this.state.homework.value;
        if (homework === undefined) {
            return 'Homework is required';
          } else if (homework.length < 4) {
                return 'Homework must be at least 4 characters long';
          }
    }

    validateTeacher() {
        const selectedTeacher = this.state.teacher_name.value;
        if(selectedTeacher === "None" || selectedTeacher === '' || selectedTeacher === undefined) {
            return 'Teacher is required';
      } 
    }

    validateDate() {
        const due_date = this.state.due_date.value;
        if (due_date === undefined) {
            return 'Due date is required';
        }
    }

    validateForm() {
        if (this.validateHomework()) {
          this.setState({homework: {touched:true}})
        } else if (this.validateTeacher()) {
          this.setState({teacher_name: {touched: true}})
        } else if (this.validateDate()) {
          this.setState({due_date: {touched: true}})
        }
      }

    handleSubmit(e) {
        e.preventDefault();
        this.validateForm()
        const class_id = this.props.match.params.class 
        const homework_id = this.props.match.params.homework
        const subject = this.props.match.params.subject
        
        
        console.log('submit homework')
      

        const {homework, due_date, teacher_name} = e.target
        

        const newHomework = {
            homework_id: homework_id,
            subject: subject,
            homework: homework.value,
            due_date: due_date.value,
            teacher_id: this.state.teacher_id,
            teacher_name: teacher_name.value,
            class_id: class_id 
        }

        console.log(newHomework)

        HomeworkApiService.postHomework(newHomework)
            .then(this.context.addHomework)
            .then(this.props.history.push(`/homework/teacher/${class_id}/${homework_id}/${subject}`))
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
        
        const homeworkError = this.validateHomework()
        const teacherError = this.validateTeacher()
        const dateError = this.validateDate()

         


        return(
            <form className="addHomeworkForm" onSubmit={e => this.handleSubmit(e)}>
                <div className='addHomework_error' role='alert'>
                {error && <p>{error.message}</p>}
                </div>
                <h2>Add more homework</h2>

                  
                <h3 className="subject">
                    Subject: <span>{subject}</span> 
                </h3>
                
                <div className="homework">
                    <label htmlFor="homework">Homework</label>
                    <input
                        type="text"
                        className="input-homework"
                        name="homework"
                        id="homework"
                        onChange={e => this.updateHomework(e.target.value)}
                        aria-required="true" 
                        />
                        {this.state.homework.touched && 
                        (<ValidationError message={homeworkError} id="homeworkError" />)}
                </div>
               
                <div className="teacher-select">
                    <label htmlFor="teacher_name">Select: </label>
                    <select
                        name="teacher_name"
                        className='teacher-input'
                        onChange={e => this.updateTeacherName(e.target.value)}
                        aria-required="true">
                            <option value={"None"}>Teacher...</option>
                            {teachersList}
                    </select>
                    {this.state.teacher_name.touched && 
                    (<ValidationError message={teacherError} id="teacherError" />)}
                </div>

                <div className="date-select">
                    <label htmlFor="due_date">Due Date </label>
                    <input
                        type="date"
                        className="date-input"
                        name="due_date"
                        id="due_date"
                        onChange={e => this.updateDate(e.target.value)}
                        aria-required="true" 
                        />
                        {this.state.due_date.touched && 
                        (<ValidationError message={dateError} id="dateError" />)}
                </div>

       

                <div className="homework_button_group">
                    <button type='button' className='cancelButton' onClick={() => this.props.history.goBack()}>
                        Cancel
                    </button>
           
                    <button
                        type="submit"
                        className='submitButton'
                        >
                            Save
                    </button>
                </div>

            </form>
        )
    }
}

export default AddHomework;

