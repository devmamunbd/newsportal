import Image from "next/image"
import { Button } from "../ui/button";
import team from '@/public/assets/BDTeam.jpeg'
import Link from 'next/link'


const LatestNews = async ()=> {
    const data = await fetch('https://news-api-next-js-one.vercel.app/api/news')
    const news = await data.json();
    console.log("news", news)


    return (
        <div>
            <h2 className="text-xl md:text-2xl text-black font-bold mb-3">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
            <div className="bg-white rounded-md shadow-md px-4 py-3">
            <Link href=""><Image
            className="rounded-md hover:scale-105 cursor-pointer transition-all duration-200"
            src={team} alt="Bangladesh Cricket Team" /></Link>
            <div className="flex flex-col  mt-3">
                <h2 className="text-xl font-bold mb-2">Bangladesh T20 National Cricket Team</h2>
                <p className="text-sm text-gray-600 mb-4"> The Bangladesh National Cricket Team, known as the Tigers, represents Bangladesh in international cricket. </p>
                <Link href=""><Button variant="default">Read More....</Button></Link>
            </div>
            </div>
            </div>
        </div>
    )
}

export default LatestNews;
