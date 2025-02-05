import Image from "next/image"
import { Button } from "../ui/button";
import team from '@/public/assets/BDTeam.jpeg'
import Link from 'next/link'
import { NewsItem } from "@/types/news";


const LatestNews = async ()=> {
    const data = await fetch('https://news-api-next-js-one.vercel.app/api/news')
    const news = await data.json();
    console.log("news", news)


    return (
        <div>
            <h2 className="text-xl md:text-2xl text-black font-bold mb-3">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
            {
                news?.map((item: NewsItem)=> (
                    <div key={item?._id} className="bg-white rounded-md shadow-md px-4 py-3">
                    <Link href=""><Image
                    className="rounded-md hover:scale-105 cursor-pointer transition-all duration-200"
                    src={item?.imageUrl} alt="Bangladesh Cricket Team" width={500} height={450} /></Link>
                    <div className="flex flex-col  mt-3">
                        <h2 className="text-xl font-bold mb-2">{item?.title}</h2>
                        <p className="text-sm text-gray-600 mb-4"> {item?.description}</p>
                        <Link href=""><Button variant="default">Read More....</Button></Link>
                    </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default LatestNews;
