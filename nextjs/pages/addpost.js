import React, { useState } from 'react'

function Addpost() {
  const [title, setTitle] = useState('dfv')
  const [picture, setPicture] = useState(null);


  const handlesubmit = (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append('video', picture, picture.name);
    form_data.append('name', title);
    form_data.append('body', body);
    let url = 'https://pro-component-django1o1.herokuapp.com/video/vc';
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
    <div>
      <div>
        <h1>Add new posts </h1>
        <form onSubmit={handlesubmit} >
          <h2 onChange={(e) => setTitle(e.target.value)} label="Post Title" variant="outlined" />
          <div >
            <h1 color="primary">Upload an Image </h1>
            <input type="file" accept="image/png, image/jpeg" onChange={(e) => { setPicture(e.target.files[0]) }} />
            <input type="submit" />

          </div>

        </form>

      </div>



    </div>
  )
}

export default Addpost

