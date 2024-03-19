import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"

function CreateNote() {
  const [note, setNote] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/createNote/", { note });
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
          <h2>Add Note</h2>
          <div className='mb-2'>
            <label htmlFor='note'>Note</label>
            <input
              type='text'
              id='note'
              placeholder='Enter Note'
              className='form-control'
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
          <button type='submit' className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateNote;
