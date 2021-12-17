import React,{useState} from 'react'
import { Grid,Typography,TextField } from '@mui/material';

function Addpost() {
    const [title,setTitle] = useState('dfv')
    const [body,setBody] = useState('vdfvdfd')
    const [picture, setPicture] = useState(null);


    const handlesubmit = (e)=>{
      e.preventDefault();
      let form_data = new FormData();
      form_data.append('pic', picture, picture.name);
      form_data.append('title', title);
      form_data.append('body', body);
      let url = '/api/post/';
      axios.post(url, form_data, {
        headers: {
          'content-type': 'multipart/form-data',
          'X-CSRFTOKEN': CSRF_TOKEN
        }
      }).then(res => {
        console.log(res.data);
      }).catch(err => console.log(err))
  };




    return (
        <Grid container spacing={6} justify="center" alignItems="center" direction="row" style={{marginTop:'3'}}>
            <Grid item lg={8} xs={11}>
            <Typography>Add new posts </Typography>
            <form  onSubmit={handlesubmit} >
            <TextField style={{margin:'5px'}} value={title} onChange={(e)=>setTitle(e.target.value)} multiline  fullWidth id="outlined-basic" label="Post Title" variant="outlined" />
            <TextField style={{margin:'5px'}} value={body} onChange={(e)=>setBody(e.target.value)} multiline fullWidth id="outlined-basic" label="Post Body" variant="outlined" />
            <Grid item xs={11} lg={8} style={{margin:'5px'}} >
                <Typography color="primary">Upload an Image </Typography>
                <input type="file" accept="image/png, image/jpeg"  onChange={(e)=>{setPicture(e.target.files[0])}}  />
                <input type="submit"/>

            </Grid>

         </form>

            </Grid>



      </Grid>
    )
}

export default Addpost