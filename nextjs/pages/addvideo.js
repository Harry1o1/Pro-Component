import React, { useState } from 'react'
import axios from "axios"
// models.URLField(max_length = 200) 

function Addpost() {
    const [title, setTitle] = useState('dfv')
    const [picture, setPicture] = useState(null);





    const handleVideo = (e) => {
        setPicture(e.target.files[0])

    }
    const video = picture


    const handlesubmit = async (e) => {
        e.preventDefault();
        let form_data = new FormData();
        form_data.append('file', picture);
        form_data.append('upload_preset', 'emonstore');
        

        const res = await fetch('https://api.cloudinary.com/v1_1/emon1o1/image/upload', {
                method: 'POST',
                body: form_data
        })
        const dara = await res.json()
        const uriwep = await dara.url
        console.log(dara)
        console.log(uriwep)
        
            // .then(res => {
            //     console.log(res.json());
            //     console.log(res.url);
            //     if (res.data) {
            //         console.log('op');
            //     }
            //     if (typeof window !== "undefined") {
            //         window.alert('Registration successful');
            //     }
            // }).catch(err => console.log(err))
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