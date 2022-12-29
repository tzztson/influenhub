const Footer = () => {
    return (
        <div className="relative bg-white">
            <div className="flex justify-between gap-12 py-12">
                <div className="flex gap-4  flex-[1_1_30%] justify-center">
                    <div className='flex flex-col gap-4'>
                        <p className="text-4xl"><span className="text-[#60c3a4] font-bold">Influen</span> Hub</p>
                        <p className="justify-center leading-8 font-medium text-gray-600">We have second over 100+ influencers <br /> with tens of millions of followers</p>
                    </div>
                </div>
                <div className="flex gap-24 flex-[1_1_70%] justify-center">
                    <div className="flex flex-col justify-start">
                        <p className="font-semibold pt-2 pb-6 text-lg">Company</p>
                        <div className='flex flex-col gap-4 font-light text-gray-500'>
                            <p>About Us</p>
                            <p>Contact</p>
                            <p>Career</p>
                            <p>Blog</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start">
                        <p className="font-semibold pt-2 pb-6 text-lg">Contact Us</p>
                        <div className='flex flex-col gap-4 font-light text-gray-500'>
                            <p>Website</p>
                            <p>Email</p>
                            <p>Whatsapp</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start">
                        <p className="font-semibold pt-2 pb-6 text-lg">Support</p>
                        <div className='flex flex-col gap-4 font-light text-gray-500'>
                            <p>FAQ</p>
                            <p>Booking</p>
                            <p>Store</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start">
                        <p className="font-semibold pt-2 pb-6 text-lg">Office</p>
                        <div className='flex flex-col gap-4 font-light text-gray-500'>
                            <p>Domino Street, District 456, <br />Los angeles USA</p>
                            <p>+44 652 762 887</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#5a4e97] py-6 text-white px-12 text-xl flex justify-between'>
                <p>2020 Influen Hub inc. All Rights Reserved</p>
                <div className="flex gap-4">
                    <img src={require('../assets/icos/facebook.png')} className="w-8 h-8" alt='' />
                    <img src={require('../assets/icos/github.png')} className="w-8 h-8" alt='' />
                    <img src={require('../assets/icos/instagram.png')} className="w-8 h-8" alt='' />
                </div>
            </div>
        </div>
    )
}

export default Footer