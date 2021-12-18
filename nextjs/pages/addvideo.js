import React, { useState } from 'react'
import axios from "axios"


function Addpost() {
  const [title, setTitle] = useState('dfv')
  const [picture, setPicture] = useState(null);





const handleVideo = (e) => {
    setPicture(e.target.files[0]) 
    
}
const video = picture 
console.log(video)


  const handlesubmit = (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append('video', picture, picture.name);
    form_data.append('name', title);
    
    let url = 'https://pro-component-django1o1.herokuapp.com/video/vc';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }).then(res => {
      console.log(res.data);
    }).catch(err => console.log(err))
  };




  return (
   <>
      <div>
        <h1>Add new posts </h1>
        <form onSubmit={handlesubmit} >
          <h2 onChange={(e) => setTitle(e.target.value)} label="Post Title" />
          <div >
            <h1 color="primary">Upload an Image </h1>
            <input type="file" accept="video/mp4,video/x-m4v,video/*" onChange={ handleVideo } />
            <input type="submit" />
          </div>
        </form>
      </div>
        <img src={video?URL.createObjectURL(video):""} />
      
      
    </>
  )
}

export default Addpost

