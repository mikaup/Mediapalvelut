import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Upload extends Component {
  state = {
    file: {
      title: '',
      description: '',
      file: null,
    },
  };
}

render();
{
  return (
      <React.Fragment>
        <h1>Upload file</h1>
        <form>
          <input type='text' name='Title' placeholder='Title'
                 value={this.state.file.title}
                 onChange={this.handleInputChange}/>
          <br/>
          <textarea type="text" name="description" placeholder="description"
                    value={this.state.file.description}
                    onChange={this.handleInputChange}/>
                    <br/>
           <input type="file" name="file" placeholder="Title"
                  value={this.state.file.title}
                  onChange={this.handleFileChange}/>


        </form>
        <React.Fragment>
  )
};