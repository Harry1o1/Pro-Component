import React, { useState } from 'react'
import axios from "axios"
// models.URLField(max_length = 200) 

function Addpost() {
    const [post, setPost] = useState('dfv')
    const [picture, setPicture] = useState(null);


    const handleVideo = (e) => {
        setPicture(e.target.files[0])
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
        
        return dara.url
        
    }


    const handlesubmit = async (e) => {
        e.preventDefault();
        // let form_data = new FormData();
        // form_data.append('file', picture);
        // form_data.append('upload_preset', 'emonstore');
        
        // const res = await fetch('https://api.cloudinary.com/v1_1/emon1o1/image/upload', {
        //         method: 'POST',
        //         body: form_data
        // })
        // const dara = await res.json()
        // const uriwep = await dara.url
        // console.log(dara)
        // console.log(uriwep)
        
        
        
        
        
        let form_data1 = new FormData();
        form_data1.append('post', post);
        form_data1.append('iurl', await handleVideo());
        
        
        const res = await fetch('https://pro-component-express1o1.herokuapp.com/image', {
            method: 'POST',
            body: form_data1
        })
        const dara = await res.json()        
        console.log(dara);
        
        
        
        
        
    };




    return (
       <>
          <div>
            <h1>Upload a video</h1>
            <form onSubmit={ handlesubmit } >
              <div >
                <input type='text' onChange={(e) => setPost(e.target.value)} label="Post" placeholder='Post'/>
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


