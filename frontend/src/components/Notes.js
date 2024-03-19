import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Notes() {

    const handleDelete = (id)=>{
        axios.delete('http://localhost:3001/deleteNote/'+id)
        .then(res=>{
            console.log(res)
            window.location.reload()
        })
        .catch(err=>console.log(err))
    }   

    const[notes,setNotes] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/')
        .then(result=>setNotes(result.data))
        .catch(err=>console.log(err))
    },[])

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <Link to="/createNote" className='btn btn-success'>Add Note</Link>
            <table className='table justify-content: space-evenly;'>
                <thead>
                    <tr>
                        <th>Note</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        notes.map((note)=>{
                            return <tr>
                                <td>{note.note}</td>
                                <td>
                                <Link to={`/updateNote/${note._id}`} className='btn btn-success'>Update</Link>
                                    <button onClick={(e)=>handleDelete(note._id)} className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Notes