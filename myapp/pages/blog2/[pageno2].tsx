import { useRouter } from 'next/router'



 function PageNo2({data} : {data : any}) {

    const router = useRouter();
    const pageNumber = router.query.pageno2;
    return (
        <>
            <h1>Hello from { pageNumber } page</h1>
        </>
    )
};


export default PageNo2;                                                                                                                                                                  





// getStaticPatchs
export const getStaticPaths = async () => {
    const res = await fetch("https://pro-component-express1o1.herokuapp.com/register")
    const data = await res.json();
    
    const paths = data.map( (curElem:any) =>  {
        // console.log(data);
        return {
            params: {
                pageno: curElem.id,
            },
        };        
    })
    
    return {
        props: {
            paths,
            fallback: false,
        },
  }    
};




// getStaticProps
export async function getStaticProps(context:any) {
        
        const id = context.params.pageNo;
        const res = await fetch(`https://pro-component-express1o1.herokuapp.com/register/${id}`)
        const data = await res.json();
            
        return {
            props: {
                data,
            },
        }
    }







