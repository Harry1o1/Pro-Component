import React, { useState } from 'react'
import axios from "axios"


function Addpost() {
  const [title, setTitle] = useState('dfv')
  const [picture, setPicture] = useState(null);




const handlevideo = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append('file', picture, picture.name);
    data.append('upload_prrset', 'mystore')
    data.append('cloud_name', 'SpaceX')
    let url = 'https://api.cloudinary.com/v1_1/SpaceX/video/upload';
    axios.post(url, data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }).then(res => {
      console.log(res.data);
    }).catch(err => console.log(err))
};
// const imageUpload = async ()=>{
//     e.preventDefault();
//          const data =  new FormData()
//          data.append('file',picture)
//          data.append('upload_preset',"mystore")
//          data.append('cloud_name',"cnq")
//          const res = await fetch("https://api.cloudinary.com/v1_1/cnq/image/upload",{
//           method:"POST",
//           body:data
//          })
//          const res2  = await res.json()
//          return res2.url
//     }
const oplog = async () => {
    console.log(picture,picture.name);
}


    



  return (
   <>
      <div>
        <h1>Add new posts </h1>
        <form
        onSubmit={ handlevideo }
        >
          <h2 onChange={(e) => setTitle(e.target.value)} label="Post Title" />
          <div >
            <h1 color="primary">Upload an Image </h1>
            <input type="file" accept="image/png, image/jpeg" onChange={(e) => { setPicture(e.target.files[0]) }} />
            <input type="submit"
            // onClick={ oplog }
            />
          </div>
        </form>
      </div>
   </>
  )
}

export default Addpost


// const imageUpload = async () => {
//     let data = new FormData();
//     data.append('file', picture, picture.name)
//     data.append('upload_prrset', 'ssubb0wc')
//     data.append('cloud_name', 'SpaceX')
//     const res = await fetch('https://api.cloudinary.com/v1_1/SpaceX/video/upload',{
//         method:'POST',
//         body:data
//     })
//     const res1 = res.json()
//     console.log(res1);
// }
// const handlesubmit = async (e) => {
//     e.preventDefault();
//     let form_data = new FormData();
//     form_data.append('video', picture, picture.name);
//     form_data.append('name', title);
    
//     let url = 'https://pro-component-django1o1.herokuapp.com/video/vc';
//     axios.post(url, form_data, {
//       headers: {
//         'content-type': 'multipart/form-data'
//       }
//     }).then(res => {
//       console.log(res.data);
//     }).catch(err => console.log(err))
// };
