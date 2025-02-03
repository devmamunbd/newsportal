import Image from "next/image"
import { Button } from "../ui/button";
import team from '@/public/assets/BDTeam.jpeg'

const Banner = () => {
  return (
    <>
      <div className="bg-slate-100  grid grid-cols-1 lg:grid-cols-2 items-center gap-5 rounded-md">
        {/* image */}
        <div className="px-8 py-6 ">
        <Image className="rounded-md" src={team} alt="Bangladesh Cricket Team" />
        </div>

        {/* content */}
        <div className="space-y-2 flex flex-col px-8 py-6 ">
        <h4 className="text-xm text-gray-500  ">Cricket</h4>
        <h2 className="text-xl md:text-2xl text-black font-bold">Bangladesh Cricket Team Is One Of The Best In The World.</h2>
        <p className="text-xm text-gray-600">
        The Bangladesh National Cricket Team, known as the Tigers, represents Bangladesh in international cricket. The team is governed by the Bangladesh Cricket Board (BCB) and became a Full Member of the ICC in 2000, gaining Test status.
        <br></br>
        Some of Bangladesh's legendary cricketers include Shakib Al Hasan, Mashrafe Mortaza, Tamim Iqbal, Mushfiqur Rahim, and Mahmudullah Riyad. The team plays its home matches at the Sher-e-Bangla National Stadium in Dhaka. Known for passionate cricket fans, Bangladesh continues to grow as a formidable force in world cricket.

        </p>
             <Button variant="default">More....</Button>
        </div>
      </div>
    </>
  );
};

export default Banner;
