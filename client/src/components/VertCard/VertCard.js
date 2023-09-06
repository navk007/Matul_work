import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function VertCard(props) {
  const imageSrc = 'https://plus.unsplash.com/premium_photo-1691854353115-d4b09974a6e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80';
  const navigate = useNavigate();
  const handleReadClick = (blogId) => {
    navigate(`/readBlog/${blogId}`);
  };

  const truncatedDescription = props.post.description
    .split(' ')
    .slice(0, 50)
    .join(' ');

  
  return (
  

    <Card sx={{ display: 'flex', width: '90%', maxWidth: '1500px',height: '40%', margin:'15px',maxHeight: '400px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'  }}>
      <CardActionArea sx={{ display: 'flex' }}>
        <CardMedia
          component="img"
          style={{ width: '30%', height: '100%', objectFit: 'cover' }}
          image={props.post.imageUrl || imageSrc}
          alt={imageSrc}
        />
        <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div>
            <Typography gutterBottom variant="h5" >
              {props.post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ my: 4 }}>
            {/* {props.post.description} */}
            {truncatedDescription}
              {props.post.description.split(' ').length > 50 && '...'}
            </Typography>   
          </div>
          <CardActions>
            <Button size="small" color="primary" onClick={()=>{
              handleReadClick(props.post._id)
            }
              } >
              Read
            </Button>
          </CardActions>
          <Typography
            gutterBottom
            variant="subtitle1" // Change variant to "subtitle1" for smaller font size
            sx={{
              color: 'grey', // Use the appropriate color value
              textAlign: 'right', // Align text to the right
              marginTop: 'auto', // Push text to the bottom of the container
            }}
          >
            {"- " +props.post.userId.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default VertCard