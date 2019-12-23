import React from 'react';
import ClassesContext from '../../contexts/ClassesContext'
import './EditUpdate.css'

class EditUpdate extends React.Component {


    static contextType = ClassesContext;

    constructor(props) {
        super(props);
        this.state = {
          headline: '',
          content: '',
          class_id: '',
          author: '',
          date: new Date(),
          error: null
          }
        }

    componentDidMount() {
        console.log('component did mount')
        const update_id = this.props.match.params.updates
        const currentUpdate = this.context.updatesList.filter(
            u => u.update_id == update_id
        )
        console.log(currentUpdate[0].update_id)

        this.setState({
            update_id: this.props.match.params.updates,
            headline: currentUpdate[0].headline,
            content: currentUpdate[0].content,
            author: currentUpdate[0].author,
            date: new Date(),
            class_id: this.props.match.params.class    
    
            })
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
        

        const updatedUpdate = {
            update_id: this.props.match.params.updates,
            headline: headline.value,
            content: content.value,
            author: author.value,
            date: new Date(),
            class_id: this.props.match.params.class   
        }

        console.log(updatedUpdate)

        this.context.updateUpdate(updatedUpdate)
        this.props.history.goBack()  
    }


    render() {

        const {error} = this.state;

        //console.log(this.props.match.params)



        return(
            <form className="addUpdateForm" onSubmit={e => this.handleSubmit(e)}>
                <div className='addUpdate_error' role='alert'>
                {error && <p>{error.message}</p>}
                </div>
                <h2>Edit Update</h2>
                
                <div className="form-group">
                    <label htmlFor="headline">Headline</label>
                    <input
                        type="text"
                        className="registration_control"
                        name="headline"
                        id="headline"
                        value={this.state.headline}
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
                        value={this.state.content}
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
                        value={this.state.author}
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

export default EditUpdate;