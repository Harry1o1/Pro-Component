import { useRouter } from 'next/router'
import type { NextPage } from 'next'


export const getStaticPaths = async () => {
    const res = await fetch("https://pro-component-express1o1.herokuapp.com/register")
    const data = await res.json();
    
    const paths = data.map( (curElem:any) =>  {
        return{
            params: { 
                pageNo : curElem._id.toString(),
                
            },
        };
    })
    
    return {
        props: {
            paths: paths,
            fallback: false,
        },
   }    
};


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




const PageNo: NextPage = () => {
    const router = useRouter();
    const pageNumber = router.query.pageNo;
    return (
        <>
            <h1>Hello from { pageNumber } page</h1>
        </>
    )
};


export default PageNo;                                                                                                                                                                  