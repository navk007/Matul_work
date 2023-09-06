import React,{useEffect,useState} from 'react'
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import EditModal from '../EditModal/EditModal'
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmModal from '../ConfirmModal/ConfirmModal'
const outerBox ={
    width:'70%',
    minHeight: '100vh',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    marginLeft : 'auto',
    marginRight : 'auto',
    marginTop : '40px',
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center'
}

const innerBox={
    width:'100%',
    height: 'auto',
    
    display: 'flex',
    alignItems : 'center',
    paddingLeft : '50px',
    paddingRight : '50px',
    justifyContent : "space-between"
}

const bodyDiv={
    width: '73%',
    minHeight: '70vh',
    overflowY: 'auto',
    marginTop : '20px'
}
const titleDiv = {
    width: '70%', // Adjust the width as needed
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    
  };
  
  const buttonDiv = {
    width: '30%', // Adjust the width as needed
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  };



function ReadBlog() {
  const [ post,setPost]= useState({});
  const { blogId } = useParams();
  const navigate = useNavigate();
  const curUser = localStorage.getItem('userId');

const [opendel, setOpendel] = React.useState(false);
  const handleClickOpendel = () => {
    
    if(curUser === post.userId){
        
        setOpendel(true);
    }else{
        alert('u are not authorized to delete this blog');
    }
    
  };
  const handleClosedel = () => {
    setOpendel(false);
  };



const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    if(curUser !==post.userId){
      alert('only the creator of this post can use this functionality');
      
    }else{
      setOpen(true);
    }
    
  };
  const handleClose = () => {
    setOpen(false);
  };


  useEffect(()=>{
    async function getPost(){
        try{

            const url = 'http://localhost:3001/api/v1/getById';
            const res = await axios.get(url,{
                params:{
                    blogId:blogId
                }
            });
            if (res.data.success) {
                setPost(res.data.blog);
              }
        }catch(e){

        }
    }

    getPost();
  },[post])

 
  return (
    
        
    <div style={outerBox}>
        <div  style={innerBox} >

        <div style={titleDiv}>
          <Typography variant="h2" gutterBottom>
            {post.title}
          </Typography>
        </div>


        <div style={buttonDiv}>
      <IconButton aria-label="edit" size="large" style={{ marginRight: '10px' , marginLeft:'10px'}} onClick={handleClickOpen} >
        <EditIcon fontSize="inherit" handleClickOpen={handleClickOpen} handleClose={handleClose} setOpen={setOpen} open={open} />
      </IconButton>

      <IconButton aria-label="back" size="large"  style={{ marginRight: '10px' , marginLeft:'10px'}} onClick={() => navigate(-1)}>
        <ArrowBackSharpIcon fontSize="inherit" />
      </IconButton>
      <IconButton aria-label="delete" size="large"  style={{ marginRight: '10px' , marginLeft:'10px'}} onClick={handleClickOpendel}>
        <DeleteIcon fontSize="inherit"handleClickOpendel={handleClickOpendel} handleClosedel={handleClosedel} setOpendel={setOpendel} opendel={opendel}  />
      </IconButton>
      </div>

        </div>

       
      <div style={bodyDiv} >
      <Typography variant="body1" gutterBottom style={{ fontSize: '25px', wordSpacing: '4px' ,color: 'black',}} >
       {post.description}
      </Typography>
      </div>

      <EditModal open={open} handleClose={handleClose} imageUrl={post.imageUrl}/>
      <ConfirmModal opendel={opendel} handleClosedel={handleClosedel} /> 
    </div>

    
  )
}

export default ReadBlog