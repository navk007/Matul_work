import React,{useEffect, useState} from 'react'
import Banner from '../Banner/Banner'
import Carder from '../Carder/Carder'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Modalpopup from '../Modalpopup/Modalpopup';
import axios from 'axios';

function Front() {
  const [open, setOpen] = React.useState(false);
  const[blogs, setBlogs] = useState([]);
  const handleClickOpen = () => {
    
    console.log(localStorage.getItem("userId"));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
    const containerStyle = {
        display: 'flex',
        flexDirection: 'row',  // To arrange items horizontally
        alignItems: 'center', // To center items vertically
        gap: '2rem', // Adds spacing between the Card components
        
        width: '90%',
        height:"50vh",
        marginLeft: '80px',
        marginRight: 'auto',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop :"20px",
      };

      useEffect(() => {
        const fetchData = async () => {
            try {
                const url = 'http://localhost:3001/api/v1/myBlogs';
                
                const response = await axios.get(url, {
                    params: {
                        userId: "64df44c3fadab6cf9a14ee19"
                    }
                });
                setBlogs(response.data.blogs);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchData();
    }, []);
  return (
    <div>
     
     <Banner />
    <div style={containerStyle} >
    <Fab color="secondary" aria-label="add" onClick={handleClickOpen} >
        <AddIcon handleClickOpen={handleClickOpen} handleClose={handleClose} setOpen={setOpen} open={open}/>
      </Fab>

    {blogs.map(post=>(
      <Carder post={post}/>
    ))}
    {/* <Carder post={post}/>
    <Carder/>
    <Carder/>
    <Carder/> */}
    </div>
    <Modalpopup open={open} handleClose={handleClose} />
    </div>
  )
}

export default Front