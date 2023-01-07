const ProductCard = ({ img, title, content }) => {
    return (
        <div className="flex flex-col rounded-2xl bg-gray-100 gap-2">
            <div className=" bg-green-300 rounded-2xl flex justify-center">
                <img src={img} className='w-96 h-64' alt="" />
            </div>
            <div className="px-4 flex flex-col gap-2">
                <p className="font-bold text-2xl">{title}</p>
                <p className="font-light text-gray-500">{content}</p>
            </div>
            <div className="px-4 flex justify-between pb-4 items-center">
                <button className="text-white font-bold bg-[#60c3a4] text-lg rounded-xl py-2 px-8">Join Now</button>
                <p className="font-bold text-xl">$35</p>
            </div>
        </div>
    )
}

export default ProductCard;