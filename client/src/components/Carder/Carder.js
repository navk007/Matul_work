import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

function Carder(props) {
  const navigate = useNavigate();
  const truncatedTitle = props.post.title
    .split(' ')
    .slice(0, 3)
    .join(' ');

  const truncatedDescription = props.post.description
    .split(' ')
    .slice(0, 16)
    .join(' ');

  const handleReadClick = () => {
    navigate(`/readBlog/${props.post._id}`);
  };

const imgu= "https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <Card sx={{ maxWidth: 345, margin: 2, boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
      <CardMedia sx={{ height: 300 }} image={ props.post.imageUrl} title="green iguana" />
      {/* <CardMedia sx={{ height: 300 }} image={imgu} title="green iguana" /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {truncatedTitle}
          {props.post.title.split(' ').length > 3 && '...'}
          
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {truncatedDescription}
          {props.post.description.split(' ').length > 16 && '...'}
         
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="medium" > */}
        <Button size="medium" onClick={handleReadClick}>
          Read
        </Button>
      </CardActions>
    </Card>
   
  );
}

export default Carder;
