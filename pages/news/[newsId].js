import { useRouter } from "next/router"

export default function () {
    const router = useRouter()

    const newsId = String(router.query.newsId).replace(/-/g, ' ')

    return <h1>The Details Page for {newsId}</h1>
};