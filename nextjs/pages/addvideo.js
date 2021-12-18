import React, { useState } from 'react'
import axios from "axios"


function Addpost() {
    const [title, setTitle] = useState('dfv')
    const [picture, setPicture] = useState(null);





    const handleVideo = (e) => {
        setPicture(e.target.files[0])

    }
    const video = picture


    const handlesubmit = (e) => {
        e.preventDefault();
        let form_data = new FormData();
        form_data.append('file', picture);

        const res = fetch('https://api.cloudinary.com/v1_1/demo/image/upload', {
                method: 'POST',
                body: form_data
            })
            .then(res => {
                if (res.data) {
                    console.log('op');
                }
                if (typeof window !== "undefined") {
                    window.alert('Registration successful');
                }
                console.log(res.data);
            }).catch(err => console.log(err))
    };




    return (
       <>
          <div>
            <h1>Upload a video</h1>
            <form onSubmit={handlesubmit} >
              <h2 onChange={(e) => setTitle(e.target.value)} label="Post Title" />
              <div >
                <input type="file" accept="image/png, image/jpeg" onChange={ handleVideo } />
                <input type="submit" />
              </div>
            </form>
          </div>
          <img src = { video ? URL.createObjectURL(video) : "" }/>
       </>
    )
}

export default Addpost




//   <video width="400" controls>
//       <source src={video?URL.createObjectURL(video):""}/>
//   </video>
//   {console.log(setPicture)}

// <video src={video?URL.createObjectURL(video):""} />
// axios.post(url, form_data, {
//   headers: {
//     'content-type': 'multipart/form-data'
// }})