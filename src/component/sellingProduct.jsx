const SellingProduct = ({ img, intro, title, content }) => {
    return (
        <div className="flex justify-between items-center gap-4 border-b-[1px] border-gray-500 relative">
            <div className='flex items-center flex-[1_1_80%] gap-4 max-xl:flex-col py-6 max-xl:flex-[1_1_100%] '>
                <img src={img} className='w-64 h-64' alt="" />
                <div className='flex flex-col gap-2'>
                    <p className='font-medium text-lg text-gray-800'>{intro}</p>
                    <p className='font-bold text-2xl text-black'>{title}</p>
                    <p className='text-gray-400'>{content}</p>
                    <div className='flex gap-6'>
                        <div className='flex items-center gap-2'>
                            <img src={require('../assets/icos/ico-headphone.png')} className='h-6 w-6' alt="" /><p>10k</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={require('../assets/icos/ico-thumb.png')} className='h-6 w-6' alt="" /><p>9k</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={require('../assets/icos/ico-msg.webp')} className='h-6 w-6' alt="" /><p>8k</p>
                        </div>
                    </div>
                </div >
            </div >
            <div className='flex-[1_1_20%] flex justify-center max-xl:absolute max-xl:left-1/2 max-xl:-translate-x-1/2 max-xl:top-1/3 max-xl:-translate-y-1/3 max-sm:top-1/4 max-sm:-translate-y-1/4'>
                <img src={require('../assets/icos/play-button.webp')} className="h-24 w-24" alt="" />
            </div>
        </div >
    )
}

export default SellingProduct;  