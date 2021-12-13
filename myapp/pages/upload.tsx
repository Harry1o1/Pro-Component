import axios from 'axios'
import useSWR from 'swr'


const fetcher = (url:any) => axios.post(url, {
        "name": "Soap",
        "email": "robinjusticeleague19@gmail.com",
        "Comment": "Ye6oe5ie86ei",
        "bff": "70dyoryoeo6",
        "stars": -5555,
        "age": 5765465465,
        "video": "https://pro-component-django1o1.herokuapp.com/media/video/21/16393541636966445341992126787194.jpg"
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });
    
    
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




function Upload() {
  const { data, error } = useSWR('https://pro-component-django1o1.herokuapp.com/video/c', fetcher)
  return (
    <>
        {console.log(data)}
        <h1 className="">Hello from Login</h1>
    </>
  );
}




export default Upload;




// Are you commiding me