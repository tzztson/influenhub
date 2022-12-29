const AudienceStep = ({ color, icon, title, subtitle, content }) => {
    return (
        <div className="flex-[1_1_25%] flex flex-col justify-center items-center gap-4">
            <div className={`bg-[${color}] w-32 h-32 flex justify-center items-center rounded-xl`}>
                <img src={icon} className="h-16 w-16" alt="" />
            </div>
            <div>
                <p className="text-center font-medium text-gray-600 text-2xl">{title}</p>
                <p className="text-center font-medium text-gray-600 text-2xl">{subtitle}</p>
            </div>
            <p className="text-center font-light text-gray-500">{content}</p>
            <div className="hidden bg-[#73e6e6] bg-[#ff81ae] bg-[#ffa886] bg-[#78cdb2] "></div>
        </div >
    )
}

export default AudienceStep