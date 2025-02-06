export const revalidate = 60
export const dynamicParams = true
import { NewsItem } from "@/types/news";
import Image from "next/image"


export async function generateStaticParams() {
    const data: NewsItem[] = await fetch('https://news-api-next-js-one.vercel.app/api/news').then((res) =>
      res.json()
    )
    return data?.slice(0,5)?.map((item) => ({
      id: String(item._id),
    }))
  }


// interface NewsDetailsPageProps {
//     params: { id: string };
// }

interface News {
    _id: string;
    title: string;
    imageUrl: string;
    published_at: string;
    source: string;
    categories: string[];
    snippet: string;
    description: string;
}

const NewsDetailsPage = async ({ params }: { params: { id: string } }): Promise<any> => {
    const news: News = await fetch(`https://news-api-next-js-one.vercel.app/api/news/${params.id}`).then((res) => res.json());
    // if (!news) {
    //     return <p>News In Not Found</p>;
    // }

    return (
        <section className="py-12">
            <article className="max-w-4xl mx-auto p-6 shadow-md border rounded-lg">
                {news?.imageUrl && (
                    <div>
                        <Image
                            src={news?.imageUrl}
                            alt={news?.title}
                            width={800}
                            height={450}
                            className="rounded-md object-cover"
                        />
                    </div>
                )}

                <div className="my-5">
                    <h2 className="text-3xl font-bold mb-4">{news?.title}</h2>

                    <div className="flex justify-between items-center text-sm mb-4">
                        <p>{new Date(news?.published_at).toLocaleDateString()}</p>
                        <p>
                            Source: <span>{news?.source}</span>
                        </p>
                    </div>
                </div>

                <div className="mb-4">
                    {news?.categories?.map((category: string) => (
                        <span
                            key={category}
                            className="bg-blue-100 text-blue-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                        >
                            {category}
                        </span>
                    ))}
                </div>

                {/* Snippet */}
                <p className=" mb-2">{news?.snippet}</p>

                {/* Full Description */}
                <p className=" mb-4">{news?.description}</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, fugit, adipisci commodi ea alias voluptatibus consequuntur neque nulla ex dicta reiciendis cupiditate quisquam quae. Vitae provident fugit officia fuga ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam laboriosam perspiciatis ad labore repudiandae quis, accusamus inventore. Eius aperiam obcaecati molestias possimus nulla saepe reprehenderit rerum voluptas veritatis? Expedita, sed?</p>
            </article>
        </section>
    );
};

export default NewsDetailsPage
