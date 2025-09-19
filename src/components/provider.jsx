import { useState } from "react";

const Provider = () => {
    const [isOpen, setIsOpen] = useState(false);
    const providers = [
        'betconstruct slots', 'betsoft', 'bgaming', 'caleta', 'dragon gaming',
        'evolution', 'evoplay', 'expanse', 'gameart', 'habanero',
        'isoftbet', 'kiron', 'mascot', 'pg soft', 'pragmatic play',
        'qora', 'reevo', 'smartsoft', 'spinomenal', 'swintt',
        'tomhorn', 'triple pg', 'upgaming'
    ];

    return (
        <div className="p-[20px] px-[10px] pb-[5px]">
            <div className="flex justify-center relative bg-[#e9ab04] h-[3px]" onClick={() => setIsOpen(!isOpen)}>
                <span className="absolute bg-[#e9ab04] cursor-pointer -top-[10px] ml-auto left-[calc(50%-85px)] text-[13px] font-semibold text-black px-[12px] py-[1px] rounded-[17px] h-[22px] flex items-center">
                    Game Provider
                    <svg
                        className={`transform ${isOpen ? 'rotate-180' : ''} ml-1 text-[20px] transition-none w-[20px] h-[20px]`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </span>
                <span
                    className="absolute bg-red-500 text-white rounded-l-[10px] top-[-9px] px-[18px] text-[13px] leading-[18px] h-[20px] right-0 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                >
                    Clear
                </span>
            </div>
            <div className={`categories-list flex flex-nowrap overflow-x-scroll overflow-y-hidden max-h-[100px] bg-[#00000080] pt-[20px] pb-[10px] ${isOpen ? 'block' : 'hidden'} gap-[5px] flex flex-row transition-all duration-300 ease-in-out`}>
                {providers.map((provider) => (
                    <div
                        key={provider}
                        className="text-[14px] font-medium capitalize rounded-[20px] w-[10%] min-w-[150px] text-center m-[7px] h-[40px] leading-[36px] bg-[#0e151b] text-white border-2 border-[#1a7051] shadow-[0_0_7px_#31dea0] px-[7px] cursor-pointer"
                    >
                        <span>{provider}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Provider;