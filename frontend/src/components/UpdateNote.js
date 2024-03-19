import React,{useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios';


function UpdateNote() {
  const {id} = useParams()
  const [note, setNote] = useState('');
  const navigate = useNavigate();
  const[notes,setNotes] = useState([])

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put("http://localhost:3001/updateNote/"+id, { note});
      // console.log(response.data); // Log response data if needed
      console.log('Before Navigate Update')
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
      axios.get('http://localhost:3001/getNote/'+id)
      .then(result=>{
        console.log(result)
        setNote(result.data.note)
      })
      .catch(err=>console.log(err))
  },[])

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleUpdate}>
          <h2>Update Note</h2>
          <div className='mb-2'> 
             <label htmlFor=''>Note</label>
             <input type='text' placeholder='Enter Note'value={note} className='form-control'
             onChange={(e) => setNote(e.target.value)}
             />
          </div>
          <button className='btn btn-success'>Update</button>
        </form>
    </div>
</div>
  )
}

export default UpdateNote