import Image from "next/image"
import { Button } from "../ui/button";
import Link from 'next/link'
import { NewsItem } from "@/types/news";


const LatestNews = async ()=> {
    const data = await fetch('https://news-api-next-js-one.vercel.app/api/news')
    const news = await data.json();
    console.log("news", news)


    return (
        <div>
            <h2 className="text-xl md:text-2xl  font-bold mb-3">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
            {
                news?.slice(0, 6)?.map((item: NewsItem)=> (
                    <div key={item?._id} className="bg-white dark:bg-gray-900 dark:text-white  h-[500px] rounded-md shadow-md px-4 py-3">
                    <Link href={`/news/${item._id}`}><Image
                    className="rounded-md hover:scale-105 cursor-pointer transition-all duration-200 w-full h-[250px] object-cover"
                    src={item?.imageUrl} alt="Bangladesh Cricket Team" width={500} height={450} /></Link>
                    <div className="flex flex-col  mt-3">
                        <h2 className="text-xl font-bold mb-2">{item?.title.substring(0, 60)}....</h2>
                        <p className="text-sm text-gray-600 mb-4"> {item?.description.substring(0.100)}....</p>
                        <Link href={`/news/${item._id}`}><Button className="dark:bg-gray-800 dark:text-white" variant="default">Read More....</Button></Link>
                    </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default LatestNews;
