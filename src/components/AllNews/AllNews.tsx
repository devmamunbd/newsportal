'use client'
import Image from "next/image"
import { Button } from "../ui/button";
import Link from 'next/link'
import {useState, useEffect} from 'react'
import { NewsItem } from "@/types/news";
import { fetchNews } from '@/lib/fetchNews';
import SearchBar from './SearchBar';
import CategoryFilter from "./CategoryFilter";

const AllNews = () => {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [search, setSearch] = useState<string>('');
    const [category, setCategory] = useState<string>('')
    useEffect(()=> {
         const getNews = async ()=> {
            const data = await fetchNews(category, search);
            setNews(data)
         }
         getNews()
    }, [search, category])
   console.log(news)

  return (
    <div className="py-8">
  <div className='flex flex-col md:flex-row gap-5 md:gap-10 mb-5'>
  <SearchBar onSearch={setSearch}/>

 <CategoryFilter onCategory={setCategory}/>
  </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
            {
                news?.map((item: NewsItem)=> (
                    <div key={item?._id} className="bg-white  h-[500px] rounded-md shadow-md px-4 py-3">
                    <Link href={`/news/item/${item._id}`}><Image
                    className="rounded-md hover:scale-105 cursor-pointer transition-all duration-200 w-full h-[250px] object-cover"
                    src={item?.imageUrl} priority alt="Bangladesh Cricket Team" width={400} height={400} /></Link>
                    <div className="flex flex-col  mt-3">
                        <h2 className="text-xl font-bold mb-2">{item?.title.substring(0, 60)}....</h2>
                        <p className="text-sm text-gray-600 mb-4"> {item?.description.substring(0.100)}....</p>
                        <Link href={`/news/item/${item._id}`}><Button variant="default">Read More....</Button></Link>
                    </div>
                    </div>
                ))
            }
            </div>
    </div>
  )
}

export default AllNews
