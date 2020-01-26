import React from 'react';
import ClassesContext from '../../contexts/ClassesContext'
import UpdateApiService from '../../services/update-api-services'
import ValidationError from '../../components/ValidationError'
import './EditUpdate.css'

class EditUpdate extends React.Component {


    static contextType = ClassesContext;

    constructor(props) {
        super(props);
        this.state = {
          headline: {value: '', touched: false},
          content: {value: '', touched: false},
          class_id: '',
          author: {value: '', touched: false},
          date: new Date(),
          error: null
          }
        }

   
    

    componentDidMount() {
        console.log('component did mount')
        const updateId = this.props.match.params.updates
        console.log(updateId)
        console.log(this.props.match.path)
        this.context.clearError()
        UpdateApiService.getUpdate(updateId)
            .catch(this.context.error)
            .then(responseData => {
                this.setState({
                    update_id: responseData.update_id,
                    headline: {value: responseData.headline, touched: false},
                    content: {value: responseData.content, touched: false},
                    class_id: responseData.class_id,
                    author: {value: responseData.author, touched: false},
                    date: responseData.date
                })
            })
    }


 validateHeadline() {
    const headline = this.state.headline;
      if (headline === undefined) {
        return 'Headline is required';
      } else if (headline.value.length < 3) {
        return 'Headline must be at least 3 characters long';
      }
  }

  validateContent() {
    const content = this.state.content;
      if (content === undefined) {
        return 'Content is required';
      } else if (content.value.length < 3) {
        return 'Content must be at least 3 characters long';
      }
  }

  validateAuthor() {
    const author = this.state.author;
      if (author === undefined) {
        return 'Author is required';
      } else if (author.value.length < 3) {
        return 'Author must be at least 3 characters long';
      }
  }

    updateHeadline(headline) {
        this.setState({headline: {value: headline, touched: true}})
    }


    updateContent(content) {
        this.setState({content: {value: content, touched: true}})
    }


    updateAuthor(author) {
        this.setState({author: {value: author, touched: true}})
    }




    handleSubmit(e) {
        e.preventDefault();
        const updateId = this.props.match.params.updates
        console.log('submit update')
      

        const {headline, content, author} = e.target
        

        const updatedUpdate = {
            update_id: this.props.match.params.updates,
            headline: headline.value,
            content: content.value,
            author: author.value,
            date: new Date(),
            class_id: this.props.match.params.class   
        }

        console.log(updatedUpdate)

        UpdateApiService.updateUpdate(updateId, updatedUpdate)
            .then(this.context.updateUpdate(updatedUpdate))
            .then(this.props.history.goBack())
            .catch(this.context.setError)
    }


    render() {

        const {error} = this.state;


        return(
            <form className="editUpdateForm" onSubmit={e => this.handleSubmit(e)}>
                <div className='editUpdate_error' role='alert'>
                {error && <p>{error.message}</p>}
                </div>
                <h2>Edit Update</h2>
                
                <div className="edit-update">
                    <label htmlFor="headline">Headline</label>
                    <input
                        type="text"
                        className="edit_update_input"
                        name="headline"
                        id="headline"
                        value={this.state.headline.value}
                        onChange={e => this.updateHeadline(e.target.value)}
                        aria-required="true" 
                        />
                </div>
                <div className="headline-error">
                {this.state.headline.touched && 
                (<ValidationError message={this.validateHeadline()} id="headlineError" />)}
                </div>
               
                <div className="edit-update">
                    <label htmlFor="content">Content</label>
                    <textarea
                        type="text"
                        className="edit_update_textarea"
                        name="content"
                        id="content"
                        value={this.state.content.value}
                        onChange={e => this.updateContent(e.target.value)}
                        aria-required="true" 
                        />   
                </div>
                <div className="content-error">
                {this.state.content.touched && 
                (<ValidationError message={this.validateContent()} id="contentError" />)}
                </div>

                <div className="edit-update">
                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        className="edit_update_input"
                        name="author"
                        id="author"
                        value={this.state.author.value}
                        onChange={e => this.updateAuthor(e.target.value)}
                        aria-required="true" 
                        />   
                </div>
                <div className="author-error">
                {this.state.author.touched && 
                (<ValidationError message={this.validateAuthor()} id="authorHomework" />)}
                </div>

                <div className="update_button_group">
                    <button className="cancelEditUpdate" type='button' onClick={() => this.props.history.goBack()}>
                        Cancel
                    </button>
           
                    <button
                        type="submit"
                        className="submitEditUpdate">
                            Save
                    </button>
                </div>

            </form>
        )
    }
}

export default EditUpdate;