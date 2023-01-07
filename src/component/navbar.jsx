import { useContext, useState } from "react"
import { ThemeContext } from "../context/theme"

const hamburgerValue = {
    first: 'translate-y-[11px] -rotate-45 ease-in',
    second: 'opacity-0 ease-in',
    third: '-translate-y-[11px] rotate-45 ease-in'
}

const Navbar = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const [hamCss, setHamCss] = useState({})
    const [isOpen, setIsOpen] = useState(false);
    const handleTheme = () => {
        setTheme((theme === 'dark') ? "light" : "dark");
    }

    const handleHamburger = () => {
        setHamCss(isOpen ? {} : hamburgerValue)
        setIsOpen(!isOpen)
    }

    return (
        <div className="relative">
            <div className={`${theme}Mode py-6 flex px-24 max-[1080px]:px-12 max-[680px]:px-6 max-[320px]:px-3 justify-between items-center`}>
                <p className="text-4xl"><span className="text-[#60c3a4] font-bold">Influen</span> Hub</p>
                <div className={`flex justify-center gap-12 font-medium ${theme}Mode max-[1080px]:hidden`}>
                    <p>Influencer</p>
                    <p>Products</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                </div>
                <div className="flex justify-center gap-6 items-center">
                    <button className="max-[680px]:hidden bg-[#5a4e97] text-white text-base font-bold rounded-2xl px-8 py-3" onClick={handleTheme}>Join Now</button>
                    <div className="hidden max-[1080px]:block max-[1080px]:transition max-[1080px]:duration-[5000ms]" onClick={handleHamburger}>
                        <div className={`${theme}Ham w-[35px] h-[5px] ease-in my-[6px] ${hamCss.first} `}></div>
                        <div className={`${theme}Ham w-[35px] h-[5px] ease-in my-[6px] ${hamCss.second}`}></div>
                        <div className={`${theme}Ham w-[35px] h-[5px] ease-in my-[6px] ${hamCss.third} `}></div>
                    </div>
                </div>
            </div>
            {isOpen ? <div className={`${theme}Mode h-[100vh] w-48 absolute right-0 flex flex-col items-center gap-4 py-6 z-50`}>
                <p className="border-b-2 border-gray-700">Influencer</p>
                <p className="border-b-2 border-gray-700">Products</p>
                <p className="border-b-2 border-gray-700">About Us</p>
                <p className="border-b-2 border-gray-700">Contact Us</p>
                <button className="hidden max-[680px]:block bg-[#5a4e97] text-white text-base font-bold rounded-2xl px-4 py-2">Join Now</button>
            </div> : ""}
        </div>
    )
}

export default Navbar