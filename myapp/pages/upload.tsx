import axios from 'axios'
import useSWR from 'swr'
import React, {useState} from 'react'; 
import Head from 'next/head'



    
    
function getUserAccount() {
  return axios.get('https://pro-component-django1o1.herokuapp.com/api');
}

function getUserPermissions() {
  return axios.get('https://pro-component-express1o1.herokuapp.com/register');
}

Promise.all([getUserAccount(), getUserPermissions()])
  .then(function (results) {
    const acct = results[0];
    const perm = results[1];
    console.log(acct);
    console.log(perm);
  });    





export default function Upload({data} : {data : any},{error}:{error : any}) {
    const [user,setUser] = useState({
        name:'',email:'', Comment:'',bff:'',stars:'',age:'',video:''
    });
    
    // handleInputs
    let name, value;
    const handleInputs = (e: any) => {
        name = e.target.name;
        value = e.target.value;
        // Setuser
        setUser({...user, [name]:value});
        console.log('Input changed!');
    };
    // Hi    
    const handleFilesChosen = (e:any) => {
            this.setState({
                files: e.target.files
            });
    }
    // Postdata
    const handlePost = async () => {
        
        let data = [];
        let error = "";
        let this:any;
        let formData = new FormData();
        for (let file of this.state.files) {
            formData.append('files', file);
        }    
        try {
            const res = await fetch(
                    "https://pro-component-django1o1.herokuapp.com/video/c", {
                    method: "POST",
                    headers: {
                        // update with your user-agent
                        // "Access-Control-Allow-Headers",
                        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
                        Accept: "application/json; charset=UTF-8",
                        'Content-Type': 'multipart/form-data'
                    },
                    body: JSON.stringify({
                        "name": `${user.name}`,
                        "email": `${user.email}`,
                        "Comment": `${user.Comment}`,
                        "bff": `${user.bff}`,
                        "stars": `${user.stars}`,
                        "age": `${user.age}`,
                        "video":formData
                    })
                }
            );
            console.log(user.video);
            data = await res.json();
            if (res.status === 404) {
                console.log('noooooo');
            }            
            if (res.status === 500 || !data || res.status === 400) {
                console.log('noooooo');
            }
            else {
                console.log('oppp');
            }
            if (typeof window !== "undefined") {
                window.alert('Registration successful');
            }
        } catch (error: any) {
            error = error.toString();
        }
        return {
            props: {
                data,
                error,
            },
        }
    }
        
                                                                                                                                                                                                                                                                   
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Harry1o1/pro-components/frontend/styles/Sass/Css/register4.css" type="text/css" media="all" />
            </Head>
            <h1>Signup</h1>
            <input type="text" name="name" id="name"  placeholder="Name" className="form-control1" autoComplete="off"  value={user.name} onChange={handleInputs}/>
            <input type="email" name="email" id="email"  placeholder="Email" className="form-control2" autoComplete="off"  value={user.email} onChange={handleInputs}/>
            <input type="text" name="Comment" id="Comment"  placeholder="Comment" className="form-control3" autoComplete="off"  value={user.Comment} onChange={handleInputs}/>
            <input type="text" name="bff" id="bff"  placeholder="Bff" className="form-control3" autoComplete="off"  value={user.bff} onChange={handleInputs}/>
            <input type="number" name="stars" id="stars"  placeholder="Stars" className="form-control4" autoComplete="off"  value={user.stars} onChange={handleInputs}/>
            <input type="number" name="age" id="age"  placeholder="Age" className="form-control4" autoComplete="off"  value={user.age} onChange={handleInputs}/>
            <input type="file" name="video" id="video"  placeholder="Video" className="form-control4" autoComplete="off"  value={user.video} multiple = { true } accept = ".xls,.xlsx,.csv,.txt" onChange = { this.handleFilesChosen }/>
            
            <div className="btn" onClick={handlePost}>
                Confrom
            </div>
            <pre>
                <code>{JSON.stringify(data, null, 4)}</code>
            </pre>
        </>
    )
}; 



// export default Upload;




// Are you commiding me
// function Upload() {
//     const fetcher = (url:any) => axios.post(url, {
//             "name": "Soap",
//             "email": "robinjusticeleague19@gmail.com",
//             "Comment": "Ye6oe5ie86ei",
//             "bff": "70dyoryoeo6",
//             "stars": -5555,
//             "age": 5765465465,
//             "video": "https://pro-component-django1o1.herokuapp.com/media/video/21/16393541636966445341992126787194.jpg"
//         })
//         .then(function(response) {
//             console.log(response);
//         })
//         .catch(function(error) {
//             console.log(error);
//     });
    
//   const { data, error } = useSWR('https://pro-component-django1o1.herokuapp.com/video/c', fetcher)
//   return (
//     <>
//         {console.log(data)}
//         <h1 className="">Hello from Login</h1>
//     </>
//   );
// }
