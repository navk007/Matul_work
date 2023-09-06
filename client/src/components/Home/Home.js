import React,{useState} from 'react'
import CustomNavbar from '../CustomNavbar/CustomNavbar';
import ReadBlog from '../ReadBlog/ReadBlog'
import Carder from '../Carder/Carder'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Front from '../Front/Front';
import { BrowserRouter,Route,Routes,NavLink ,Navigate} from 'react-router-dom';
import Myblogs from '../Myblogs/Myblogs';
import Allblogs from '../Allblogs/Allblogs';
function Home() {
  const [activeKey, setActiveKey] = useState(null);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',  // To arrange items horizontally
    alignItems: 'center', // To center items vertically
    gap: '2rem', // Adds spacing between the Card components
    // border: '1px red solid',
    width: '90%',
    marginLeft: '80px',
    marginRight: 'auto',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  };

  console.log('home page')
  return (
    <>
   
    {/* <Banner />
    <div style={containerStyle} >
    <Fab color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
    <Carder/>
    <Carder/>
    <Carder/>
    <Carder/>
    </div> */}
    <CustomNavbar/>
    <Routes>
    <Route path="/" exact element={<Front/>} />
    <Route path="/myblogs" exact element={<Myblogs/>} />
    <Route path="/allblogs" exact element={<Allblogs/>} />
    <Route path="/readBlog/:blogId" exact element={<ReadBlog/>} />
    </Routes>
    
    </>
  )
}

export default Home