import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      caption: ''
    };
  }

  handleFileChange = (event) => {
    this.setState({
      file: event.target.files[0]
    });
  }

  handleCaptionChange = (event) => {
    this.setState({
      caption: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // will need to add uploading of the file and caption to server
  }

  render() {
    return (
      <main className='postform'>
      <Card className='form-card'>
      <Form.Group id='form-contain' onSubmit={this.handleSubmit}>
        <Form.Control type="file" id="file-upload" onChange={this.handleFileChange} />
        <Form.Text className="text-muted">Add a caption/description to your picture below</Form.Text>
        <Form.Control type="text" id="text-input" value={this.state.caption} onChange={this.handleCaptionChange} placeholder="Enter a caption" />
        <Button type="submit" id="post-button">Post</Button>
      </Form.Group>
      </Card>
      </main>
    );
  }
}

export default CreatePost