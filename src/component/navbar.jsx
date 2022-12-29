const Navbar = () => {
    return (
        <div>
            <div className="py-12 flex px-24 justify-between items-center">
                <p className="text-4xl"><span className="text-[#60c3a4] font-bold">Influen</span> Hub</p>
                <div className="flex justify-center gap-12 font-medium text-gray-600">
                    <p>Influencer</p>
                    <p>Products</p>
                    <p>About Us</p>
                    <p>Contact Us</p>

                </div>
                <button className="bg-[#5a4e97] text-white text-base font-bold rounded-2xl px-8 py-3">Join Now</button>
            </div>
        </div>
    )
}

export default Navbar