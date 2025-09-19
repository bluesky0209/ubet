import Image from 'next/image'
import { useState } from 'react'

const Header = () => {
    const [selectedMenu, setSelectedMenu] = useState('casino')
    const [isOpen, setIsOpen] = useState(false)
    const [selectedLanguage, setSelectedLanguage] = useState('English')

    const menuItems = [
        { id: 'sport', label: 'Sport' },
        { id: 'live', label: 'Live' },
        { id: 'casino', label: 'Casino' },
        { id: 'live-casino', label: 'Live Casino' },
        { id: 'amatic', label: 'Amatic' }
    ]

    const languages = [
        { code: 'en', name: 'English' },
        { code: 'fr', name: 'Francais' },
        { code: 'ar', name: 'العربية' }
    ]

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language)
        setIsOpen(false)
    }

    return (
        <header className="bg-[#171c2c] border-b border-black w-full">
            <div className="flex justify-between items-center h-16">
                {/* Logo */}
                <div className="flex h-[60px] p-[5px] w-[18%]">
                    <div className="w-full h-[50px] ml-0 bg-[url('/logo.png')] bg-[0px_center] bg-[length:auto_35px] bg-no-repeat" />
                </div>

                {/* Navigation Menu */}
                <div className="overflow-y-hidden p-0 h-[60px] w-[calc(83%-350px)] z-2 flex flex-row flex-grow-1">
                    {menuItems.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => setSelectedMenu(item.id)}
                            className={`${selectedMenu === item.id
                                ? "bg-[0_0] rounded-none border-b-2 border-[#e9ab04] text-white"
                                : "bg-[#16161600] text-[#bbb] hover:text-white"
                                } font-normal tracking-[0.05em] p-[7px] pb-0 leading-[29px] h-[45px] max-h-[60px] capitalize text-[14px] relative overflow-hidden z-[200] inline-block flex-col self-start top-[10px] cursor-pointer`}
                        >
                            <span>{item.label}</span>
                        </div>
                    ))}
                </div>

                {/* Right side actions */}
                <div className="flex flex-row justify-end items-center w-[300px] h-full ml-auto">
                    <div className="flex items-center mr-[5px] text-[14px]">
                        <span className="text-[12px] !leading-[1.8] h-[30px] whitespace-nowrap rounded-[5px_0_0_5px] bg-[#ffffff00] text-[#bbb] border border-solid border-[#52668c] font-medium p-1 cursor-pointer">Sign In</span>
                        <span className="text-[12px] !leading-[1.8] h-[30px] whitespace-nowrap rounded-[0_5px_5px_0] bg-[#1a7051] text-[#bbb] border border-[#52668c] font-medium p-1 cursor-pointer">Register</span>
                    </div>

                    {/* Language dropdown */}
                    <div className="relative flex justify-end">
                        <div
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center cursor-pointer h-[30px] text-[#f0f0f0] hover:text-white p-[0_5px] text-sm font-medium border-l border-[#293043]"
                        >
                            {selectedLanguage}
                            <svg className={`ml-1 h-4 w-4 transform ${isOpen ? 'rotate-180' : ''} transition-transform duration-200`} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>

                        {isOpen && (
                            <div className="absolute z-[2] bg-[#3b414a] text-white top-[30px] text-[14px] right-0 min-w-[130px]">
                                {languages.map((language) => (
                                    <div
                                        key={language.code}
                                        onClick={() => handleLanguageChange(language.name)}
                                        className="hover:bg-[#293043] w-[180px] text-white text-left border-b border-[#171c2c] p-[5px_10px] whitespace-nowrap cursor-pointer"
                                    >
                                        {language.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Chat icon */}
                    <div className="flex items-center text-[#bbb] hover:text-white h-[30px] p-[0px_10px] border-l border-[#293043] cursor-pointer">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                        </svg>
                    </div>

                    {/* Settings icon */}
                    <div className="flex items-center text-[#bbb] hover:text-white h-[30px] p-[0px_10px] border-l border-[#293043] cursor-pointer">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;