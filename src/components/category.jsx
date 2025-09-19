import { useState } from "react";

const Category = () => {
    const [selectedCategory, setSelectedCategory] = useState('t_fast-games');

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

    const baseButtonStyle = {
        display: 'flex',
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
        minWidth: '100px',
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
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="search"
                            className="svg-inline--fa fa-search fa-w-16 search-icon"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            style={{
                                color: '#1a7051',
                                marginLeft: '10px',
                                height: '45px',
                                lineHeight: '43px',
                                textAlign: 'center',
                                fontSize: '20px',
                                padding: '10px',
                                width: '44px',
                                background: '#171c2c',
                                border: '1px solid',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                boxShadow: 'inset 0 0 3px #1a7051',
                                borderColor: '#000'
                            }}>
                            <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                        </svg>
                    </div>
                </div>

                {categories.map((category) => (
                    <div
                        key={category.id}
                        id={category.id !== 'favorites' ? category.id : undefined}
                        className={`type-item${selectedCategory === category.id ? ' selected' : ''}`}
                        style={{
                            ...baseButtonStyle,
                            padding: 0,
                            width: (category.width || '25%'),
                            position: 'relative',
                            zIndex: 0,
                            textDecoration: 'none',
                            textTransform: selectedCategory === category.id ? 'uppercase' : 'capitalize',
                            fontSize: selectedCategory === category.id ? '14px' : '13px',
                            fontWeight: selectedCategory === category.id ? '400' : '500'
                        }}
                        onClick={() => handleCategorySelect(category.id)}
                    >
                        {category.icon && (
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon={category.icon} className={`svg-inline--fa fa-${category.icon} fa-w-18 type-icon`} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ width: '1.125em' }}>
                                <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                        )}
                        {category.label}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;