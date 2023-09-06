import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate ,useParams} from 'react-router-dom';
import axios from 'axios';

function ConfirmModal(props) {
  const navigate = useNavigate();
  const {blogId}=useParams();
  const handleAgree = async() => {

    try {
      const url = 'http://localhost:3001/api/v1/deleteBlog';
      const res = await axios.delete(url, {
        params:{
          blogId:blogId
        }
      });
      
      if (res.data.success) {
        // Close the modal after successful submission
        props.handleClosedel();
        navigate(-1);
      } else {
        console.error('Blog deletion failed.');
      }
    } catch (error) {
      console.error(error);
    }

  
  };

  return (
    <div>
      
      <Dialog
        open={props.opendel}
        onClose={props.handleClosedel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"DELETE THE SELECTED BLOG ? "}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please select your choice
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClosedel}>Disagree</Button>
          <Button onClick={handleAgree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ConfirmModal;
