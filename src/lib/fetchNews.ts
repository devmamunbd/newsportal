
export const fetchNews = async(category: string='', search: string='')=> {
     try {
       const response = await fetch(`https://news-api-next-js-one.vercel.app/api/news?category=${category}&search=${search}`);
       const data = await response.json();
       return data
     } catch (error) {
       console.log(error)
       return []
     }
}
