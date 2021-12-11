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
