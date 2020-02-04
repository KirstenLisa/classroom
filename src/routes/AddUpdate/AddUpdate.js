import React from 'react';
import ClassesContext from '../../contexts/ClassesContext';
import UpdateApiService from '../../services/update-api-services';
import ValidationError from '../../components/ValidationError';
import './AddUpdate.css';

class AddUpdate extends React.Component {
  static contextType = ClassesContext;

  constructor(props) {
    super(props);
    this.state = {
      headline: { value: '', touched: false },
      content: { value: '', touched: false },
      class_id: '',
      author: { value: '', touched: false },
      date: '',
      error: null
    };
  }

  updateHeadline(headline) {
    this.setState({ headline: { value: headline, touched: true } });
  }

  updateContent(content) {
    this.setState({ content: { value: content, touched: true } });
  }

  updateAuthor(author) {
    this.setState({ author: { value: author, touched: true } });
  }

  validateHeadline() {
    const headline = this.state.headline.value;
    if (headline === undefined) {
      return 'Headline is required';
    }
    if (headline.length < 4) {
      return 'Headline must be at least 4 characters long';
    }
  }

  validateContent() {
    const content = this.state.content.value;
    if (content === undefined) {
      return 'Content is required';
    }
    if (content.length < 4) {
      return 'Content must be at least 4 characters long';
    }
  }

  validateAuthor() {
    const author = this.state.author.value;
    if (author === undefined) {
      return 'Author is required';
    }
    if (author.length < 3) {
      return 'author must be at least 3 characters long';
    }
  }

  validateForm() {
    if (this.validateHeadline()) {
      this.setState({ headline: { touched: true } });
    } else if (this.validateContent()) {
      this.setState({ content: { touched: true } });
    } else if (this.validateAuthor()) {
      this.setState({ author: { touched: true } });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.validateForm()) {
      return null;
    }
    if (
      this.validateHeadline() ||
      this.validateContent() ||
      this.validateAuthor()
    ) {
      return null;
    }

    const { headline, content, author } = e.target;

    const newUpdate = {
      headline: headline.value,
      content: content.value,
      author: author.value,
      date: new Date(),
      class_id: this.props.match.params.class
    };

    UpdateApiService.postUpdate(newUpdate)
      .then(this.context.addUpdate)
      .then(
        this.props.history.push(`/welcome/${this.props.match.params.class}`)
      )
      .catch(this.context.setError);
  }

  render() {
    const { error } = this.state;

    return (
      <form className='addUpdateForm' onSubmit={e => this.handleSubmit(e)}>
        <div className='addUpdate_error' role='alert'>
          {error && <p>{error.message}</p>}
        </div>
        <h2>Add Update</h2>

        <div className='add-update'>
          <label htmlFor='headline'>Headline</label>
          <input
            type='text'
            className='update_input'
            name='headline'
            id='headline'
            onChange={e => this.updateHeadline(e.target.value)}
            aria-required='true'
          />
        </div>
        <div className='update_error'>
          {this.state.headline.touched && (
            <ValidationError
              message={this.validateHeadline()}
              id='headlineError'
            />
          )}
        </div>

        <div className='add-update'>
          <label htmlFor='content'>Content</label>
          <textarea
            type='text'
            className='update_textarea'
            name='content'
            id='content'
            onChange={e => this.updateContent(e.target.value)}
            aria-required='true'
          />
        </div>
        <div className='update_error'>
          {this.state.content.touched && (
            <ValidationError
              message={this.validateContent()}
              id='contentError'
            />
          )}
        </div>

        <div className='add-update'>
          <label htmlFor='author'>Author</label>
          <input
            type='text'
            className='update_input'
            name='author'
            id='author'
            onChange={e => this.updateAuthor(e.target.value)}
            aria-required='true'
          />
        </div>
        <div className='update_error'>
          {this.state.author.touched && (
            <ValidationError message={this.validateAuthor()} id='authorError' />
          )}
        </div>
        <div className='update_button_group'>
          <button
            type='button'
            className='cancelUpdateButton'
            onClick={() => this.props.history.goBack()}
          >
            Cancel
          </button>

          <button type='submit' className='submitUpdateButton'>
            Save
          </button>
        </div>
      </form>
    );
  }
}

export default AddUpdate;
