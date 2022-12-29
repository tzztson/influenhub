const RotateRectangle = ({ angle }) => {
    return (
        <div className={`absolute w-64 h-64 bg-[#5a4e97] rotate-[${angle}deg] rounded-2xl`}>
            <div className="hidden rotate-[15deg] rotate-[30deg] rotate-[45deg] rotate-[60deg] rotate-[75deg] rotate-[90deg] rotate-[105deg]
            rotate-[120deg] rotate-[135deg] rotate-[150deg] rotate-[165deg] rotate-[180deg] rotate-[195deg] rotate-[210deg] rotate-[225deg] rotate-[240deg] rotate-[255deg] rotate-[270deg] rotate-[285deg] rotate-[300deg] rotate-[315deg] rotate-[330deg] rotate-[345deg]"></div>
        </div>
    )
}

export default RotateRectangle