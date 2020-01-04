import React from 'react';
import { format } from 'date-fns'
import ClassesContext from '../../contexts/ClassesContext'
import UpdateApiService from '../../services/update-api-services'
import './AddUpdate.css'

class AddUpdate extends React.Component {


    static contextType = ClassesContext;

    constructor(props) {
        super(props);
        this.state = {
          headline: '',
          content: '',
          class_id: '',
          author: '',
          date: '',
          error: null
          }
        }


    updateHeadline(headline) {
        this.setState({headline: headline})
    }


    updateContent(content) {
        this.setState({content: content})
    }


    updateAuthor(author) {
        this.setState({author: author})
    }


    handleSubmit(e) {
        e.preventDefault();
    
        console.log('submit update')
      

        const {headline, content, author} = e.target
        

        const newUpdate = {
           
            headline: headline.value,
            content: content.value,
            author: author.value,
            date: new Date(),
            class_id: this.props.match.params.class   
        }

        console.log(newUpdate)

    
        UpdateApiService.postUpdate(newUpdate)
              .then(this.context.addUpdate)
              //need new update_id
              .then(this.props.history.push(`/welcome/teacher/${this.props.match.params.class}`))
              .catch(this.context.setError)
            
         
    }


    render() {

        const {error} = this.state;

        //console.log(this.props.match.params)



        return(
            <form className="addUpdateForm" onSubmit={e => this.handleSubmit(e)}>
                <div className='addUpdate_error' role='alert'>
                {error && <p>{error.message}</p>}
                </div>
                <h2>Add Update</h2>
                
                <div className="form-group">
                    <label htmlFor="headline">Headline</label>
                    <input
                        type="text"
                        className="registration_control"
                        name="headline"
                        id="headline"
                        onChange={e => this.updateHeadline(e.target.value)}
                        aria-required="true" 
                        />
                </div>
               
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <input
                        type="text"
                        className="registration_control"
                        name="content"
                        id="content"
                        onChange={e => this.updateContent(e.target.value)}
                        aria-required="true" 
                        />   
                </div>

                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        className="registration_control"
                        name="author"
                        id="author"
                        onChange={e => this.updateAuthor(e.target.value)}
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

export default AddUpdate;