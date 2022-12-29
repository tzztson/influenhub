const Influencers = ({ avatar, name, intro }) => {
    return (
        <div className="flex flex-[1_1_30%] justify-center items-center gap-8 my-8 rounded-full">
            <div className="bg-[#60c3a4] rounded-full">
                <img src={avatar} className='h-48 w-48' alt='' />
            </div>
            <div className="max-w-[200px]">
                <p className="font-bold text-2xl text-gray-600">{name}</p>
                <p className="font-normal text-lg text-gray-400">{intro}</p>
            </div>
        </div>
    )
}

export default Influencers