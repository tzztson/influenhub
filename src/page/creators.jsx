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
            <div className={`${theme}Mode px-12 max-sm:px-6`}>
                <div className={`${theme}Mode py-24 flex flex-col justify-center items-center gap-6`}>
                    <p className="text-[60px] font-bold text-center leading-[64px] max-sm:text-5xl max-sm:text-5xl">Let's chat with <br />famous creators</p>
                    <p className="py-2 font-medium text-center text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button className="text-white font-bold bg-[#60c3a4] w-60 max-sm:w-full text-2xl rounded-full py-6">Get Started</button>
                </div>
                <div className="grid grid-cols-4 gap-8 pb-8  max-xl:grid-cols-2 max-sm:grid-cols-1">
                    <div className="flex justify-center items-center"><img src={require('../assets/icos/pen-girl.webp')} className='w-64' alt="" /></div>
                    <div className="flex justify-center items-center"><img src={require('../assets/icos/stop-girl.png')} className='w-64' alt="" /></div>
                    <div className="flex justify-center items-center"><img src={require('../assets/icos/standing-girl.webp')} className='w-64' alt="" /></div>
                    <div className="flex justify-center items-center"><img src={require('../assets/icos/inform-girl.webp')} className='w-64' alt="" /></div>
                </div>
            </div>
            <div className="container mx-auto py-24 flex flex-col px-12 max-lg:px-6">
                <p className="text-[48px] max-sm:text-4xl  font-bold text-gray-700 py-2">Discover</p>
                <div className="relative flex bg-gradient-to-b from-[#f9be00] via-[#fdda56] to-[#f9be00] rounded-xl px-12 max-lg:px-6 py-12 ">
                    <div className="flex-[1_1_50%] flex flex-col gap-6">
                        <p className="font-light text-gray-700 text-2xl">New posts</p>
                        <div className="flex flex-col gap-2">
                            <p className="font-bold text-gray-700 text-4xl max-sm:text-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className="font-light text-gray-500 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <button className="bg-black text-white px-8 py-2 rounded-md text-lg w-40 font-semibold">Find more</button>
                    </div>
                    <div className="flex-[1_1_50%] max-xl:hidden"></div>
                    <img src={require('../assets/icos/headphone.png')} className="max-xl:hidden absolute bottom-12 right-12" alt='' />
                </div>
            </div>
            <div className="container mx-auto pb-24 px-12 max-sm:px-6">
                <p className="text-4xl font-semibold text-gray-700">Popular Reviews today</p>
                <div className="grid grid-cols-4 gap-4 py-6 max-xl:grid-cols-2 max-sm:grid-cols-1">
                    {ReviewData.map((ele, ind) => (
                        <PopularReview key={`review${ind}`} img={ele.img} content={ele.content} intro={ele.intro} />
                    ))}
                </div>
            </div>
            <div className={`${theme}Mode relative h-[1200px] max-xl:h-[1920px] px-12 max-sm:px-6`}>
                <div className="py-12 mx-auto container bg-white text-black absolute -top-28 left-1/2 -translate-x-1/2 z-10">
                    <div className="flex justify-between items-center px-6  max-xl:flex-col">
                        <p className="flex-[1_1_40%] font-bold text-4xl text-gray-700 w-full pb-8 max-sm:text-2xl">Top Selling Products</p>
                        <div className="flex-[1_1_60%] flex gap-8 items-center w-full">
                            <div className="h-[1px] w-full border-black border-b-[1px] max-sm:hidden"></div>
                            <button className="py-2 px-4 border-[1px] border-black w-32 max-sm:w-full">View All</button>
                        </div>
                    </div>
                    <div className="px-12 max-sm:px-6">
                        {TopProducts.map((ele, ind) => (
                            <SellingProduct key={`sellingProduct${ind}`} img={ele.img} intro={ele.intro} title={ele.title} content={ele.content} />
                        ))}
                    </div>
                    <div className="flex justify-center py-12">
                        <button className="bg-[#323548] text-white py-4 px-12 max-sm:px-6 font-semibold">Show More</button>
                    </div>
                </div>
            </div>
            <div className="pt-[320px] mx-auto container relative max-sm:px-6 px-12 py-12 z-30 max-lg:pt-[180px] max-md:pt-[320px] max-sm:pt-[400px] max-[399px]:pt-[480px] max-[365px]:pt-[600px] max-[312px]:pt-[700px] max-[300px]:pt-[760px] max-[284px]:pt-[820px]">
                <p className="text-[#323548] text-4xl font-bold max-xl:leading-[54px] text-center">Join us on your <br className="hidden max-xl:block max-lg:hidden" /> favorite platform</p>
                <div className="grid grid-cols-4 max-sm:grid-cols-3 gap-4 py-4 max-[300px]:grid-cols-2">
                    <div className="flex justify-center items-center"><img src={require('../assets/icos/blue-facebook.png')} className="h-16 w-16" alt='' /></div>
                    <div className="flex justify-center items-center"><img src={require('../assets/icos/black-tiktok.png')} className="h-16 w-16" alt='' /></div>
                    <div className="flex justify-center items-center"><img src={require('../assets/icos/pink-instagram.png')} className="h-16 w-16" alt='' /></div>
                    <div className="flex justify-center items-center"><img src={require('../assets/icos/red-youtube.png')} className="h-16 w-16" alt='' /></div>
                </div>
                <img src={require('../assets/icos/boy-winning.png')} className="max-lg:hidden absolute z-20 top-0 right-0" alt='' />
            </div>
            <div className={`${theme}Mode py-24 px-12 max-sm:px-6`}>
                <div className="mx-auto container flex flex-col items-center gap-2 w-full">
                    <p className="text-3xl">Subscribe to get notified about update</p>
                    <p>By Subscribing with your mail, you will accept our privacy policy</p>
                    <div className="flex justify-center gap-4 py-6 w-full max-sm:flex-col">
                        <input type='email' className="w-72 opacity-80 bg-transparent pl-4 rounded-md outline-none text-xl " placeholder="Enter your email" />
                        <button className="bg-[#60c3a4] rounded-md py-3 px-6 text-white text-xl">Subscribe us</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Creators;