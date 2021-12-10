import { useRouter } from 'next/router'
import type { NextPage } from 'next'







const PageNo: NextPage = () => {
    const router = useRouter();
    const pageNumber = router.query.pageNo;
    return (
        <>
            <h1>Hello from { pageNumber } page</h1>
        </>
    )
};


