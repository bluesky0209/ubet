import { useState } from "react";
import SearchIcon from "./icons/searchIcon";
import StarIcon from "./icons/starIcon";

const categories = [
    { id: 'favorites', icon: 'star', label: 'Favorites', width: '25%' },
    { id: 't_all_games', label: 'All-Games' },
    { id: 't_video-slots', label: 'Video-Slots' },
    { id: 't_video-poker', label: 'Video-Poker' },
    { id: 't_table-games', label: 'Table-Games' },
    { id: 't_virtual-sports', label: 'Virtual-Sports' },
    { id: 't_virtual-games', label: 'Virtual-Games' },
    { id: 't_scratch-cards', label: 'Scratch-Cards' },
    { id: 't_video-bingo', label: 'Video-Bingo' },
    { id: 't_crash-games', label: 'Crash-Games' },
    { id: 't_livegames', label: 'Live-Games' },
    { id: 't_fast-games', label: 'Fast-Games' },
    { id: 't_Live Casino', label: 'Live-Casino' }
];

const Category = () => {
    const [selectedCategory, setSelectedCategory] = useState('t_fast-games');

    const handleCategorySelect = (categoryId) => {
        setSelectedCategory(categoryId);
    };

    return (
        <div className="p-0 h-[50px] max-h-[50px] mt-[10px] min-h-[55px] w-full flex flex-row">
            <div className="relative text-[#dfdfdf] p-0 w-full flex flex-grow flex-row overflow-x-auto overflow-y-hidden">
                <div className="text-[#1a7051] px-[5px] mr-[15px] border-r-0 border-r-solid border-r-[#172b3e] w-[44px] h-[35px] leading-[33px] md:h-[45px] md:leading-[43px] text-center cursor-pointer">
                    <div>
                        <SearchIcon className="h-[33px] md:h-[43px] p-[8px] md:p-[10px] w-[40px] md:w-[44px]" />
                    </div>
                </div>

                {categories.map((category) => (
                    <div
                        key={category.id}
                        id={category.id !== 'favorites' ? category.id : undefined}
                        className={`type-item ${selectedCategory === category.id ? 'selected' : ''} flex relative z-0 no-underline items-center justify-center gap-[5px] bg-[#212531] text-[#bbb] md:ml-[17px] ml-[10px] border border-[#0e151b] text-center md:h-[45px] h-[35px] leading-[33px] md:leading-[43px] min-w-[100px] md:min-w-[11%] cursor-pointer rounded-[10px] p-0 text-decoration-none whitespace-nowrap
                            w-[${category.width || '25%'}]
                            ${selectedCategory === category.id ? 'uppercase text-[14px] font-[400]' : 'capitalize text-[13px] font-[500]'}`}
                        onClick={() => handleCategorySelect(category.id)}
                    >
                        {category.icon && (
                            <StarIcon />
                        )}
                        {category.label}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;