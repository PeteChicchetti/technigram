import React, { useState } from 'react';
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
    <main className='d-flex mainPage align-items-center justify-content-center'>
      <div className='content'>
        <h2 className='formHeader'>Create A Post</h2>
        <form className='formCard' onSubmit={handleFormSubmit}>
          <div className="form-group" id='title'>
            <label name="nameInput" >Title: </label>
            <input type="text" className="form-control" id="titleInput" name='title' placeholder="Title" onChange={handleChange} />
          </div>
          <div className="form-group" id= 'description'>
            <label name='messageInput' >Description:</label>
            <textarea className="form-control" id="messageInput" rows="6" name='content' onChange={handleChange}></textarea>
          </div>
          <button type='submit' className='postBtn'>Submit</button>
        </form>
      </div>
    </main>
  );
}

export default CreatePost