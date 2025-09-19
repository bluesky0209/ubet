
import { useState, useEffect } from 'react'
import ChatIcon from './icons/chatIcon';
import SettingIcon from './icons/settingIcon';
import ArrowIcon from './icons/arrowIcon';

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

const Header = () => {
    const [selectedMenu, setSelectedMenu] = useState('casino')
    const [isOpen, setIsOpen] = useState(false)
    const [selectedLanguage, setSelectedLanguage] = useState('English')

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language)
        setIsOpen(false)
    }

    return (
        <header className="bg-[#171c2c] border-b border-black w-full">
            <div className="flex justify-between items-center h-16 max-w-[1720px] mx-auto">
                <div className="flex h-[60px] p-[5px] w-[18%]">
                    <div className="w-full h-[50px] ml-0 bg-[url('/logo.png')] bg-[0px_center] bg-[length:auto_35px] bg-no-repeat" />
                </div>

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

                <div className="flex flex-row justify-end items-center w-[300px] h-full ml-auto">
                    <div className="flex items-center mr-[5px] text-[14px]">
                        <span className="text-[12px] !leading-[1.8] h-[30px] whitespace-nowrap rounded-[5px_0_0_5px] bg-[#ffffff00] text-[#bbb] border border-solid border-[#52668c] font-medium p-1 cursor-pointer">Sign In</span>
                        <span className="text-[12px] !leading-[1.8] h-[30px] whitespace-nowrap rounded-[0_5px_5px_0] bg-[#1a7051] text-[#bbb] border border-[#52668c] font-medium p-1 cursor-pointer">Register</span>
                    </div>

                    <div className="relative flex justify-end">
                        <div
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center cursor-pointer h-[30px] text-[#f0f0f0] hover:text-white p-[0_5px] text-sm font-medium border-l border-[#293043]"
                        >
                            {selectedLanguage}
                            <ArrowIcon isOpen={isOpen} />
                        </div>

                        {isOpen && (
                            <div className="absolute z-[99] bg-[#3b414a] text-white top-[30px] text-[14px] right-0 min-w-[130px]">
                                {languages.map((language) => (
                                    <div
                                        key={language.code}
                                        onClick={() => handleLanguageChange(language.name)}
                                        className="w-[180px] text-white text-left border-b border-[#171c2c] p-[5px_10px] whitespace-nowrap cursor-pointer hover:bg-[#293043]"
                                    >
                                        {language.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="flex items-center text-[#bbb] hover:text-white h-[30px] p-[0px_10px] border-l border-[#293043] cursor-pointer">
                        <ChatIcon />
                    </div>

                    <div className="flex items-center text-[#bbb] hover:text-white h-[30px] p-[0px_10px] border-l border-[#293043] cursor-pointer">
                        <SettingIcon />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;