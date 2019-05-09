import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {Button, CircularProgress,} from '@material-ui/core';
import TextField from '@material-ui/core/es/TextField/TextField';
import './css/Upload.css';



class Upload extends Component {
  mediaUrl = 'http://media.mw.metropolia.fi/wbma/';

  fr = new FileReader();

  componentDidMount() {
    this.fr.addEventListener('load', () => {
      this.setState((prevState) => ({
        ...prevState,
        imageData: this.fr.result,
      }));
    });
  }

  state = {
    file: {
      title: '',
      description: '',
      filedata: null,
      filename: undefined,
    },
    loading: false,
    imageData: null,

    type: '',
  };

  handleFileChange = (evt) => {
    evt.persist();
    console.log(evt.target.files[0]);
    this.fr.readAsDataURL(evt.target.files[0]);
    this.setState((prevState) => ({
      ...prevState,
      type: evt.target.files[0].type,
      file: {
        ...prevState.file,
        filedata: evt.target.files[0],
      },
    }));
  };

  handleInputChange = (evt) => {
    const target = evt.target;
    const value = target.value;
    const name = target.name;

    console.log(value, name);

    this.setState((prevState) => ({
      file: {
        ...prevState.file,
        [name]: value,
      },
    }));
  };

  handleFileSubmit = (evt) => {
    console.log(evt);
    this.setState({loading: true});
    const fd = new FormData();
    fd.append('title', this.state.file.title);
    const description  = `${this.state.file.description}`;
    fd.append('description', description);
    fd.append('file', this.state.file.filedata);

    const options = {
      method: 'POST',
      body: fd,
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    };



    fetch(this.mediaUrl + 'media', options).then(response => {
      return response.json();
    }).then(json => {
      console.log(json);
      const id = json.file_id;
      const tagoptions = {
        method: 'POST',
        body: JSON.stringify({
          'file_id': id,
          'tag': "ECHO",
        }),
        headers: {
          'x-access-token': localStorage.getItem('token'),
          'Content-Type': 'application/json'
        },
      };
      fetch(this.mediaUrl + 'tags', tagoptions).then( response => {
        return response.json();
      }).then(json => {
        console.log(json);
        setTimeout(() => {
          this.props.history.push('/');
          this.props.updateImages();
          this.setState({loading: false});
        }, 2000);
      });



    });
  };








  render() {
    return (
        <React.Fragment>
          <h1>Upload</h1>
          <ValidatorForm instantValidate={false}
                         onSubmit={this.handleFileSubmit}
                         onError={errors => console.log(errors)}>
            <TextValidator id="title" name="title" label="Title"
                           value={this.state.file.title}
                           onChange={this.handleInputChange}
                           validators={['required', 'minStringLength:3']}
                           errorMessages={[
                             'this field is mandatory',
                             'minimum 3 charaters']}
                           fullWidth/>
            <TextValidator id="desc" name="description" label="Description"
                           value={this.state.file.description}
                           onChange={this.handleInputChange}
                           validators={['required', 'minStringLength:3']}
                           errorMessages={[
                             'this field is mandatory',
                             'minimum 3 charaters']}
                           fullWidth
                           multiline
                           rows={3}/>
            <TextField id="file" name="filedata" label="File"
                       value={this.state.file.filename}
                       type="file"
                       onChange={this.handleFileChange}
                       fullWidth/>

            <Button id="nappi" type="submit" variant="contained"
                    color="primary">Upload&nbsp;{this.state.loading &&
            <CircularProgress size={20}/>}</Button>
          </ValidatorForm>


        </React.Fragment>
    )
        ;
  }
}

Upload.propTypes = {
  history: PropTypes.object,
  updateImages: PropTypes.func,
};

export default Upload;
