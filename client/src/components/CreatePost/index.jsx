import React, { useState } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import { useMutation } from '@apollo/client';

import { ADD_POST } from '../../utils/mutations';

const CreatePost = () => {
  const [formState, setFormState] = useState({
    title: '',
    content: '',
  });

  const [addPost, { error }] = useMutation(ADD_POST);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // On form submit, perform mutation and pass in form data object as arguments
    // It is important that the object fields are match the defined parameters in `ADD_THOUGHT` mutation
    try {
      const { data } = addPost({
        variables: { ...formState },
      });

      //window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'title') {
      setFormState({ ...formState, [name]: value });
    } else if (name === 'content') {
      setFormState({ ...formState, [name]: value });
    }
  };



  return (
    <Container id='createPostContainer' className='createPostForm'>
      <Row id='createPostRow' className='container-fluid'>
        <Col id='createPostCol'>
            <Card id='createPostCard'>
            <form className='formCard' onSubmit={handleFormSubmit}>
            <h2 className='formHeader' id='createPostHeader'>Create A Post</h2>
              <div className="form-group" id='titleForm'>
                <h3 name="nameInput" id='createPostTitle'>Title</h3>
                <input type="text" className="form-control" id="titleInput" name='title' placeholder="Title" onChange={handleChange} />
              </div>
              <div className="form-group" id='descriptionForm'>
                <h3 name='messageInput' id='createPostDescription'>Description</h3>
                <textarea className="form-control" id="messageInput" rows="6" name='content' onChange={handleChange} placeholder='Description' resize='none'></textarea>
              </div>
          <button type='submit' className='postBtn'>Submit</button>
          
        </form>
            </Card>
        </Col>
      </Row>
    </Container>
   
  );
}

export default CreatePost