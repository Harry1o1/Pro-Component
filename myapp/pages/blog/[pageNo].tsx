import { useRouter } from 'next/router'







export default function pageNo() {
    const router = useRouter();
    const pageNumber = router.query.pageNo;
    return (
        <>
            <h1>Hello from { pageNumber } page</h1>
        </>
    )
};


