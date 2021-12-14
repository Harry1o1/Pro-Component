import axios from 'axios'
import useSWR from 'swr'
import React, {useState} from 'react'; 
import Head from 'next/head'



    


export default function Upload({data} : {data : any},{error}:{error : any}) {
    const [user,setUser] = useState({
        name:'',email:'', Comment:'',bff:'',stars:'',age:''
    });
    const [djgpa,setDjgpa] = useState({
        video:''
    });
    
    
    // handleVideo
    let name1, value2;
    
    const handleVideo = (e:any) => {
        name1 = e.target.name;
        value2 = e.target.value;
        setDjgpa({...djgpa, 
            [name1]: value2,
         
        })                
    }
    // handleInputs
    let name, value;
    const handleInputs = (e: any) => {
        name = e.target.name;
        value = e.target.value;
        
        
        // Setuser
        setUser({...user, [name]:value});
        
        
        console.log('Input changed!');
    };
    
    // Postdata
    const handlePost = async (e:any) => {
        e.preventDefault();
        // let data = [];
        let error = "";
        let formData = new FormData();
        try {
            const url = 'https://pro-component-django1o1.herokuapp.com/video/c';
            const config = { headers: {'Content-Type': 'multipart/form-data'}};
            formData.append('name', user.name)
            formData.append('email', user.email)
            formData.append('Comment', user.Comment)
            formData.append('bff', user.bff)
            formData.append('age', user.age)
            formData.append('stars', user.stars)
            formData.append('video', djgpa.video[0])
            
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
                    body: formData
                }
            );
            data = await res.json();
            if (res.status === 404) {
                console.log('noooooo');
            }            
            if (res.status === 500 || !data) {
                console.log('noooooo');
            }
            else {
                console.log('oppp');
            }
            if (typeof window !== "undefined") {
                window.alert('Registration successful');
                window.location.reload();
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
            <input type="file" name="video" id="video"  placeholder="Video" className="form-control4" autoComplete="off"  value={djgpa.video} multiple = { true } accept = ".xls,.xlsx,.csv,.txt" onChange = { handleVideo }/>
            
            <div className="btn" onClick={handlePost}>
                Confrom
            </div>
            <pre>
                <code>{JSON.stringify(data, null, 4)}</code>
            </pre>
        </>
    )
}; 







    
    //         axios
    //             .post(url,formData,config)
    //             .then((res) => {
    //                 console.log(res.data);
    //                 console.log(res);
    //                 const data:any = res.data;
    //                 if (res.status === 404) {
    //                     console.log('noooooo');
    //                 }
    //                 if (res.status === 500 || !data || res.status === 400) {
    //                     console.log('noooooo');
    //                 }
    //                 else {
    //                     console.log('oppp');
    //                 }
    //                 if (typeof window !== "undefined") {
    //                     window.alert('Registration successful');
    //                 }            
    //             })
    //             .catch((err:any) => {
    //                 console.log(err);
    //             })
            
    //     } catch (error: any) {
    //         error = error.toString();
    //     }
    //     return {
    //         props: {
    //             data,
    //             error,
    //         },
    //     }
    // }