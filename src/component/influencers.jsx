const Influencers = ({ avatar, name, intro }) => {
    return (
        <div className="flex flex-[1_1_30%] max-[1360px]:flex-[1_1_45%] max-lg:flex-[1_1_80%] justify-center items-center gap-8 my-8 rounded-full max-sm:flex-col">
            <div className="bg-red-300 rounded-full">
                <img src={avatar} className='h-48 w-48' alt='' />
            </div>
            <div className="max-w-[200px] max-lg:max-w-[360px]">
                <p className="max-sm:text-center font-bold text-2xl text-gray-600">{name}</p>
                <p className="max-sm:text-center font-normal text-lg text-gray-400">{intro}</p>
            </div>
        </div>
    )
}

export default Influencers