import { useContext } from "react";
import { ThemeContext } from "../context/theme";
import { ReviewData } from "../consts/reviewdata";
import PopularReview from "../component/popularReview";
import { TopProducts } from "../consts/topproductdata";
import SellingProduct from "../component/sellingProduct";

const Creators = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div>
            <div className={`${theme}Mode`}>
                <div className={`${theme}Mode py-24 flex flex-col justify-center items-center gap-6`}>
                    <p className="text-[60px] font-bold text-center leading-[64px]">Let's chat with <br />famous creators</p>
                    <p className="py-2 font-medium text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button className="text-white font-bold bg-[#60c3a4] w-60 text-2xl rounded-full py-6">Get Started</button>
                </div>
                <div className="flex justify-between px-12 gap-8">
                    <img src={require('../assets/icos/pen-girl.webp')} className='w-64' alt="" />
                    <img src={require('../assets/icos/stop-girl.png')} className='w-64' alt="" />
                    <img src={require('../assets/icos/standing-girl.webp')} className='w-64' alt="" />
                    <img src={require('../assets/icos/inform-girl.webp')} className='w-64' alt="" />
                </div>
            </div>
            {/* <div className="container mx-auto py-24 flex flex-col">
                <p className="text-[48px] font-bold text-gray-700 py-2">Discover</p>
                <div className="relative flex bg-gradient-to-b from-[#f9be00] via-[#fdda56] to-[#f9be00] rounded-xl px-16 py-12 ">
                    <div className="flex-[1_1_50%] flex flex-col gap-6">
                        <p className="font-light text-gray-700 text-2xl">New posts</p>
                        <div className="flex flex-col gap-2">
                            <p className="font-bold text-gray-700 text-4xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className="font-light text-gray-500 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <button className="bg-black text-white px-8 py-2 rounded-md text-lg w-40 font-semibold">Find more</button>
                    </div>
                    <div className="flex-[1_1_50%]"></div>
                    <img src={require('../assets/icos/headphone.png')} className="absolute bottom-12 right-12" alt='' />
                </div>
            </div>
            <div className="container mx-auto pb-24">
                <p className="text-4xl font-semibold text-gray-700">Popular Reviews today</p>
                <div className="flex justify-between items-start gap-4 py-8">
                    {ReviewData.map((ele, ind) => (
                        <PopularReview key={`review${ind}`} img={ele.img} content={ele.content} intro={ele.intro} />
                    ))}
                </div>
            </div>
            <div className={`${theme}Mode relative h-[960px]`}>
                <div className="py-12 mx-auto container bg-white text-black absolute -top-28 left-1/2 -translate-x-1/2 z-10">
                    <div className="flex justify-between items-center px-8">
                        <p className="flex-[1_1_40%] font-bold text-4xl text-gray-700 w-full pb-8">Top Selling Products</p>
                        <div className="flex-[1_1_60%] flex gap-8 items-center w-full">
                            <div className="h-[1px] w-full border-black border-b-[1px]"></div>
                            <button className="py-2 px-4 border-[1px] border-black w-32">View All</button>
                        </div>
                    </div>
                    <div className="px-12">
                        {TopProducts.map((ele, ind) => (
                            <SellingProduct key={`sellingProduct${ind}`} img={ele.img} intro={ele.intro} title={ele.title} content={ele.content} />
                        ))}
                    </div>
                    <div className="flex justify-center py-12">
                        <button className="bg-[#323548] text-white py-4 px-12 font-semibold">Show More</button>
                    </div>
                </div>
            </div>
            <div className="pt-72 mx-auto container relative">
                <p className="text-[#323548] text-4xl font-bold">Join us on your <br /> favorite platform</p>
                <div className="flex gap-8 py-4">
                    <img src={require('../assets/icos/blue-facebook.png')} className="h-16 w-16" alt='' />
                    <img src={require('../assets/icos/black-tiktok.png')} className="h-16 w-16" alt='' />
                    <img src={require('../assets/icos/pink-instagram.png')} className="h-16 w-16" alt='' />
                    <img src={require('../assets/icos/red-youtube.png')} className="h-16 w-16" alt='' />
                </div>
                <img src={require('../assets/icos/boy-winning.png')} className="absolute z-20 top-0 right-0" alt='' />
            </div>
            <div className={`${theme}Mode py-24`}>
                <div className="mx-auto container flex flex-col items-center gap-2 w-full">
                    <p className="text-3xl">Subscribe to get notified about update</p>
                    <p>By Subscribing with your mail, you will accept our privacy policy</p>
                    <div className="flex justify-center gap-4 py-6 w-full">
                        <input type='email' className="w-72 opacity-80 bg-transparent pl-4 rounded-md outline-none text-xl " placeholder="Enter your email" />
                        <button className="bg-[#60c3a4] rounded-md py-3 px-6 text-white text-xl">Subscribe us</button>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Creators;