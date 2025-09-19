import { useState } from "react";
import SearchIcon from "./icons/searchIcon";
import StarIcon from "./icons/starIcon";

const categories = [
    { id: 'favorites', icon: 'star', label: 'Favorites', width: '25%' },
    { id: 't_all_games', label: 'All Games' },
    { id: 't_video-slots', label: 'Video Slots' },
    { id: 't_video-poker', label: 'Video Poker' },
    { id: 't_table-games', label: 'Table Games' },
    { id: 't_virtual-sports', label: 'Virtual Sports' },
    { id: 't_virtual-games', label: 'Virtual Games' },
    { id: 't_scratch-cards', label: 'Scratch Cards' },
    { id: 't_video-bingo', label: 'Video Bingo' },
    { id: 't_crash-games', label: 'Crash Games' },
    { id: 't_livegames', label: 'Live Games' },
    { id: 't_fast-games', label: 'Fast Games' },
    { id: 't_Live Casino', label: 'Live Casino' }
];

const Category = () => {
    const [selectedCategory, setSelectedCategory] = useState('t_fast-games');

    const baseButtonStyle = {
        display: 'flex',
        position: 'relative',
        zIndex: 0,
        textDecoration: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5px',
        background: '#212531',
        color: '#bbb',
        padding: '0 15px',
        marginRight: '17px',
        border: '1px solid #0e151b',
        textTransform: 'capitalize',
        textAlign: 'center',
        fontSize: '13px',
        fontWeight: '500',
        height: '45px',
        lineHeight: '43px',
        minWidth: '152px',
        width: '25%',
        cursor: 'pointer',
        borderRadius: '10px'
    };

    const handleCategorySelect = (categoryId) => {
        setSelectedCategory(categoryId);
    };

    return (
        <div className="p-0 h-[50px] max-h-[50px] mt-[10px] min-h-[55px] w-full flex flex-row">
            <div className="relative text-[#dfdfdf] p-0 w-full flex flex-grow flex-row overflow-x-auto overflow-y-hidden">
                <div className="search" style={{ color: '#1a7051', padding: '0 5px', borderRight: '0 solid #172b3e', height: '45px', lineHeight: '43px', textAlign: 'center', cursor: 'pointer' }}>
                    <div>
                        <SearchIcon />
                    </div>
                </div>

                {categories.map((category) => (
                    <div
                        key={category.id}
                        id={category.id !== 'favorites' ? category.id : undefined}
                        data-selected={selectedCategory === category.id}
                        className={`type-item flex relative z-0 no-underline items-center justify-center gap-[5px] bg-[#212531] text-[#bbb] mr-[17px] border border-[#0e151b] text-center h-[45px] leading-[43px] min-w-[152px] cursor-pointer rounded-[10px] p-0 
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