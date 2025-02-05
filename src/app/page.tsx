import Banner from "@/components/shared/Banner";
import LatestNews from "@/components/shared/LatestNews";

export default function Home() {


  return (
   <>
   <div className="py-12">
    <Banner></Banner>

    <div className="py-12">
    <LatestNews></LatestNews>
    </div>

   </div>

   </>
  );
}
