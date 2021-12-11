import { useRouter } from 'next/router'
// import type { NextPage } from 'next'


// This function gets called at build time
export async function getStaticPaths() {
          // Call an external API endpoint to get posts
          const res = await fetch('https://pro-component-express1o1.herokuapp.com/register')
          const posts = await res.json()
          // Get the paths we want to pre-render based on posts
          console.log(posts);
          const paths = posts.map((post:any) => ({
            params: { id: posts._id + string },
          }))
          // We'll pre-render only these paths at build time.
          // { fallback: false } means other routes should 404.
        return { paths, fallback: false };
    }

// This also gets called at build time
export async function getStaticProps( params:any ) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
      const res = await fetch(`https://.../posts/${params.id}`)
      const post = await res.json()
    
      // Pass post data to the page via props
      return { props: { post } }
}



// const PageNo: NextPage = ({post}: {post:any}) => {
 function PageNo({post} : {post : any}) {

    // const router = useRouter();
    // const pageNumber = router.query.pageNo;
    return (
        <>
            {post.map( (curElem:any) => {
            return(
                <div className ="alert alert-primary" key={curElem.id}>
                    <h3>{curElem.name}</h3>
                    <h4>{curElem.email}</h4>
                    <h5>{curElem.work}</h5>
                    <h5>{curElem.phone}</h5>
                    <h5>{curElem.password}</h5>
                    <h5>{curElem.cpassword}</h5>
                    <h6>{curElem._id}</h6>                    
                </div>            
            );
        })}
        </>
    )
};


export default PageNo;                                                                                                                                                                  














            // <h1>Hello from { pageNumber } page</h1>











// export default Post



// export async function getStaticProps(context:any) {
        
//         const id = context.params.pageNo;
//         const res = await fetch(`https://pro-component-express1o1.herokuapp.com/register/${id}`)
//         const data = await res.json();
            
//         return {
//             props: {
//                 data,
//             },
//         }
//     }


// export const getStaticPaths = async () => {
//     const res = await fetch("https://pro-component-express1o1.herokuapp.com/register")
//     const data = await res.json();
    
//     const paths = data.map( (curElem:any) =>  {
//         return{
//             params: { 
//                 pageNo : curElem._id.toString(),
                
//             },
//         };
//     })
    
//     return {
//         props: {
//             paths,
//             fallback: false,
//         },
//   }    
// };
