import React from 'react';

class PhotoUpload extends React.Component {
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
      <form onSubmit={this.handleSubmit}>
        <input type="file" onChange={this.handleFileChange} />
        <input type="text" value={this.state.caption} onChange={this.handleCaptionChange} placeholder="Enter a caption" />
        <button type="submit">Upload Photo</button>
      </form>
    );
  }
}

export default PhotoUpload