import React,{useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import axios from 'axios';
import {useParams} from 'react-router-dom'

function EditModal(props) {
    const {blogId} = useParams();
  const [data,setData]=useState({
    title:"",
    description:"",
    imageUrl:props.imageUrl,
    blogId:blogId,
  })

  function handleChange(e){
    
    setData(prv=>(
      {
        ...prv,
        [e.target.name]: e.target.value,
      }
    ))

    
  }

  async function handleSubmit() {
    try {
      const url = 'http://localhost:3001/api/v1/updateBlog';
      const res = await axios.put(url, data);
      

      // Close the modal after successful submission
      props.handleClose();
    } catch (error) {
      console.error(error);
    }
  }
  return (



    <Dialog open={props.open} onClose={props.handleClose} maxWidth="md" fullWidth >
        <DialogTitle>Edit Blog</DialogTitle>
        <DialogContent style={{ minHeight: '500px', maxHeight: '80vh' }}>
          <DialogContentText>
           Update your blog
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            style={{  marginTop: '25px' }}
            name="title"
            value={data.title}
            onChange={handleChange}
          />
         <TextareaAutosize
          autoFocus
          minRows={10}
          margin="dense"
          id="description"
          placeholder="Description"
          fullWidth
          variant="standard"
          style={{ width: '100%', marginTop: '25px' }} 
          name="description"
          value={data.description}
          onChange={handleChange}
        />

         <TextField
            autoFocus
            margin="dense"
            id="imageUrl"
            label="IMAGE URL"
            type="text"
            fullWidth
            variant="standard"
            style={{  marginTop: '25px' }} 
            name="imageUrl"
            value={data.imageUrl}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Post</Button>
        </DialogActions>
      </Dialog>
    
  )
}

export default EditModal