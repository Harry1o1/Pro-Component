import { useRouter } from 'next/router'



 function PageNo2({data} : {data : any}) {

    const router = useRouter();
    const pageNumber = router.query.pageNo;
    return (
        <>
            <h1>Hello from { pageNumber } page</h1>
        </>
    )
};


export default PageNo2;                                                                                                                                                                  
