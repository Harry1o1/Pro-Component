import { useRouter } from 'next/router'







export default function pageNo() {
    const router = useRouter();
    pageNumber:any = router.query.pageNo;
    return (
        <>
            <h1>Hello from { pageNumber } page</h1>
        </>
    )
};


