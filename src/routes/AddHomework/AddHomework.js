import React from 'react';
import { format } from 'date-fns'
import ClassesContext from '../../contexts/ClassesContext'
import './AddHomework.css'

class AddHomework extends React.Component {


    static contextType = ClassesContext;

    constructor(props) {
        super(props);
        this.state = {
          homework: '',
          due_date: '',
          teacher_id: '',
          teacher_name: '',
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


    handleSubmit(e) {
        e.preventDefault();
        console.log('submit homework')
      

        const {homework, due_date, teacher_id} = e.target
        

        const newHomework = {
            homework_id: this.props.match.params.homework,
            homework: homework.value,
            due_date: due_date.value,
            teacher_id: teacher_id.value,
            class_id: this.props.match.params.class   
        }

        console.log(newHomework)

        this.context.addHomework(newHomework)
        this.props.history.goBack()  
    }


    render() {

        const {error} = this.state;
        const teachersList = this
        .context
        .teachersList
        .map(
            (teacher, i) => <option value={teacher.id} key={i} id={teacher.id}>{teacher.teacher_name}</option>
          );
        
        const date = new Date(); // Now
         


        return(
            <form className="addHomeworkForm" onSubmit={e => this.handleSubmit(e)}>
                <div className='addHomework_error' role='alert'>
                {error && <p>{error.message}</p>}
                </div>
                <h2>Add more homework</h2>
                
                <div className="form-group">
                    <label htmlFor="">Homework</label>
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
                        name="teacher_id"
                        onChange={e => this.updateTeacher(e.target.value)}
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

export default AddHomework;