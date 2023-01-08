const PopularReview = ({ img, content, intro }) => {
    return (
        <div className="flex flex-col gap-2">
            <img src={img} className="" alt="" />
            <p className="font-semibold text-xl text-gray-600">{content}</p>
            <p className="font-medium text-lg text-gray-500">{intro}</p>
            <button className="bg-[#5a4e97] text-white px-6 py-2">Watch Now</button>
        </div>
    )
}

export default PopularReview;