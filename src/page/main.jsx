
import AudienceStep from '../component/audienceStep'
import Influencers from '../component/influencers'
import ProductCard from '../component/productCard'
import RotateRectangle from '../component/rotaterectangle'
import { AudienceStatic } from '../consts/audiencestatic'
import { InfluencersData } from '../consts/influencersdata'
import { ProductData } from '../consts/productdata'

const Main = () => {
    return (
        <div className='pt-12'>
            <div className={`container mx-auto flex max-xl:flex-col justify-between items-center gap-12 px-12 max-sm:px-6 pb-12`} >
                <div className='flex-[1_1_50%] max-xl:w-full flex flex-col gap-8'>
                    <p className='text-[#323548] text-6xl max-sm:text-5xl font-bold max-sm:leading-[60px] leading-[72px]'>The Only  <br className='max-xl:hidden' />Influencer  <br className='max-xl:hidden' />Marketing Agency <br className='max-xl:hidden' /> You will Ever Need</p>
                    <button className="text-white font-bold bg-[#60c3a4] w-60 text-2xl rounded-full py-6">Get Started</button>
                </div>
                <div className='flex-[1_1_50%] max-sm:hidden '>
                    <img src={require('../assets/imgs/earphone1.png')} alt="" />
                </div>
            </div>
            <div className='container mx-auto flex  flex-col gap-16 py-20 px-12 max-sm:px-6'>
                <p className='text-center font-bold text-2xl text-[#303238]'>Company Partner</p>
                <div className='flex justify-center items-center gap-16 max-xl:gap-12 max-xl:grid max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1'>
                    <div className='flex justify-center items-center w-full'><img src={require('../assets/icos/uber.png')} className='h-8 w-42' alt="" /></div>
                    <div className='flex justify-center items-center w-full'><img src={require('../assets/icos/google.png')} className='h-12 w-42' alt="" /></div>
                    <div className='flex justify-center items-center w-full'><img src={require('../assets/icos/paypal.png')} className='h-12 w-42' alt="" /></div>
                    <div className='flex justify-center items-center w-full'><img src={require('../assets/icos/microsoft.png')} className='h-12 w-42' alt="" /></div>
                    <div className='hidden max-xl:block max-lg:hidden'></div>
                    <div className='flex justify-center items-center w-full'><img src={require('../assets/icos/dribbble.png')} className='h-12 w-42' alt="" /></div>
                </div>
            </div>
            <div className='flex flex-col gap-6 container mx-auto px-12  max-sm:px-6'>
                <p className='max-sm:text-left text-center font-bold text-5xl max-sm:text-4xl text-[#303238] '>Steps to build your own audience</p>
                <p className='max-sm:text-left text-center font-medium text-gray-600 py-2'>actually building an audience is not difficult, as long as you know <br /> how, and this is an easy step to make it happen</p>
                <div className='flex-wrap gap-12 py-8 flex justify-center items-start '>
                    {AudienceStatic.map((ele, ind) =>
                        <AudienceStep key={`audience${ind}`} color={ele.color} icon={ele.icon} title={ele.title} subtitle={ele.subtitle} content={ele.content} />
                    )}
                </div>
            </div>
            <div className='container mx-auto flex justify-center items-center gap-8 py-24 px-12 max-sm:px-6 '>
                <div className='flex-[1_1_50%] max-lg:hidden '>
                    <img src={require('../assets/imgs/earphone2.png')} className="max-lg:hidden" alt="" />
                </div>
                <div className='flex-[1_1_50%] flex flex-col gap-8 px-4' >
                    <p className="text-4xl leading-tight font-bold">Hello creators, Greetings <br /> from <span className="text-[#60c3a4] font-bold">Influen</span> Hub</p>
                    <div className='flex flex-col gap-4'>
                        <p className='font-light text-gray-500 text-2xl'>Lorem Ipsum is simply text of the printing and typesetting industry Lorem Ipsum is simply text of the printing and typesetting industry Lorem Ipsum is simply text of the printing and typesetting industry</p>
                        <p className='font-light text-gray-500 text-2xl'>Lorem Ipsum is simply text of the printing and typesetting industry</p>
                    </div>
                    <button className="text-white font-bold bg-[#60c3a4] w-60 text-2xl rounded-full py-6">Get Started</button>
                </div>
            </div>
            <div className='container mx-auto px-12 max-sm:px-6'>
                <p className='text-center font-bold text-5xl text-[#303238] '>Products</p>
                <p className='text-center py-6 text-xl font-light text-gray-500 '>the latest products</p>
                <div className='grid grid-cols-4 gap-4 py-8 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center'>
                    {ProductData.map((ele, ind) =>
                        <ProductCard key={`product${ind}`} img={ele.img} title={ele.title} content={ele.content} />
                    )}
                </div>
            </div>
            <div className='container mx-auto flex flex-col py-24 max-md:px-6'>
                <p className='text-center font-bold text-5xl text-[#303238] max-sm:text-4xl'>Top Influencers</p>
                <p className='text-center py-6 text-xl font-light text-gray-500 '>Lorem Ipsum is simply text of the printing and typesetting industry Lorem Ipsum <br /> is simply text of the printing and typesetting industry</p>
                <div className='flex justify-center flex-wrap gap-4'>
                    {InfluencersData.map((ele, ind) =>
                        <Influencers key={`influencer${ind}`} avatar={ele.avatar} name={ele.name} intro={ele.intro} />
                    )}
                </div>
            </div>
            <div className='container mx-auto flex flex-col py-12 relative bg-white px-12 max-sm:px-6'>
                <p className='max-sm:text-left text-center font-bold text-5xl max-sm:text-4xl text-[#303238] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className='max-sm:text-left text-center py-6 text-xl font-light text-gray-500 '>Lorem Ipsum is simply text of the printing and typesetting industry Lorem Ipsum <br /> is simply text of the printing and typesetting industry</p>

            </div>
            <div className='px-6 container mx-auto flex flex-col items-center gap-8 py-24 bg-[#60c3a4] relative  rounded-xl -z-20'>
                <p className='text-white font-bold text-4xl text-center max-sm:text-left'>Subscribe us to get the latest info about the latest products.</p>
                <div className='flex max-sm:flex-col max-sm:w-full'>
                    <input type='text' className='max-sm:rounded-none py-6 px-4 rounded-l-lg text-red-400 font-bold text-xl' placeholder='Enter your email' />
                    <button className='max-sm:rounded-none bg-[#5a4e97] text-white font-bold text-xl py-6 px-4 rounded-r-lg'>Subscribe Us</button>
                </div>
                <div className='absolute -top-20 left-8 -z-10 max-xl:hidden'>
                    <RotateRectangle angle={15} />
                </div>
                <div className='absolute bottom-24 right-80 -z-10 max-xl:hidden'>
                    <RotateRectangle angle={15} />
                </div>
            </div>
        </div>
    )
}

export default Main