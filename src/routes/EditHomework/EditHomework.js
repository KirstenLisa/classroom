import React from 'react';
import { format } from 'date-fns'
import ClassesContext from '../../contexts/ClassesContext'
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


    updateHomework(homework) {
        this.setState({homework: homework})
    }


    updateDate(due_date) {
        this.setState({due_date: due_date})
    }


    updateTeacher(teacher_id) {
        this.setState({teacher_id: teacher_id})
    }

    componentDidMount() {
        console.log('component did mount')
        const id = this.props.match.params.id
        const currentHomework = this.context.homeworkList.filter(h =>
            h.id == id)
        console.log(currentHomework[0].id)

        this.setState({
            id: this.props.match.params.id,
            homework_id: this.props.match.params.homework,
            homework: currentHomework[0].homework,
            due_date: currentHomework[0].due_date,
            teacher_id: currentHomework[0].teacher_id,
            teacher_name: currentHomework[0].teacher_name,
            class_id: this.props.match.params.class   

        })
    }


    handleSubmit(e) {
        e.preventDefault();
        console.log('update homework')
        const homework_id=this.props.match.params.homework
        const class_id=this.props.match.params.class

        const {homework, due_date, teacher_id} = e.target
        

        const updatedHomework = {
            id: this.props.match.params.id,
            homework_id: this.props.match.params.homework,
            homework: homework.value,
            due_date: due_date.value,
            teacher_id: teacher_id.value,
            class_id: this.props.match.params.class   
        }

        console.log(updatedHomework)

        this.context.updateHomework(updatedHomework)
        this.props.history.push(`/homework/teacher/${class_id}/${homework_id}`)  
    }


    render() {

        console.log(this.props.match.params)

        const {error} = this.state;
        const teacherId = this.state.teacher_id
        const uniqueTeachersList = this.context.teachersList.filter(teacher => teacher.id !== teacherId)
        const teachersList = uniqueTeachersList
        .map(
            (teacher, i) => <option value={teacher.id} key={i} id={teacher.id}>{teacher.teacher_name}</option>
          );
        
        
        
        
        //const uniqueTeachersList = teachersList.filter(teacher =>
            
        console.log(uniqueTeachersList)
        

        
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
                            <option value={this.state.teacher_name}>{this.state.teacher_name}</option>
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
                            <option value={date}>{this.state.due_date}</option>
                            <option value={date}>{format(date, 'do MMM yyyy')}</option>
                            <option value={date}>{format(date.setDate(date.getDate() + 1), 'do MMM yyyy')}</option>
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

export default EditHomework;