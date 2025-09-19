const GameList = () => {
    const games = [
        {
            id: 60419,
            name: 'BlackJack',
            image: 'https://d1b82hscw3e9o2.cloudfront.net/media/images/slots/small/da/jpg/da-blackjack.jpg'
        },
        {
            id: 60423,
            name: 'Blackjack Deluxe',
            image: 'https://d1b82hscw3e9o2.cloudfront.net/media/images/slots/small/da/jpg/da-blackjack-deluxe.jpg'
        },
        {
            id: 60435,
            name: 'Three Card Poker',
            image: 'https://d1b82hscw3e9o2.cloudfront.net/media/images/slots/small/da/jpg/da-three-card-poker.jpg'
        },
        {
            id: 77909,
            name: 'Vulcano Roulette',
            image: 'https://d1b82hscw3e9o2.cloudfront.net/media/images/slots/small/gs/jpg/gs-vulcano-roulette.jpg'
        },
        {
            id: 60411,
            name: 'European Roulette',
            image: 'https://d1b82hscw3e9o2.cloudfront.net/media/images/slots/small/da/jpg/da-european-roulette.jpg'
        },
        {
            id: 60415,
            name: 'American Roulette',
            image: 'https://d1b82hscw3e9o2.cloudfront.net/media/images/slots/small/da/jpg/da-american-roulette.jpg'
        },
        {
            id: 60425,
            name: 'Three Card Poker',
            image: 'https://d1b82hscw3e9o2.cloudfront.net/media/images/slots/small/da/jpg/da-three-card-poker.jpg'
        },
        {
            id: 77919,
            name: 'Vulcano Roulette',
            image: 'https://d1b82hscw3e9o2.cloudfront.net/media/images/slots/small/gs/jpg/gs-vulcano-roulette.jpg'
        },
        {
            id: 60431,
            name: 'European Roulette',
            image: 'https://d1b82hscw3e9o2.cloudfront.net/media/images/slots/small/da/jpg/da-european-roulette.jpg'
        },
        {
            id: 60455,
            name: 'American Roulette',
            image: 'https://d1b82hscw3e9o2.cloudfront.net/media/images/slots/small/da/jpg/da-american-roulette.jpg'
        },
        {
            id: 160455,
            name: 'American Roulette',
            image: 'https://d1b82hscw3e9o2.cloudfront.net/media/images/slots/small/da/jpg/da-american-roulette.jpg'
        }
    ];
    return (
        <div className="p-[2px] grid grid-cols-2 gap-4 pl-[15px] pr-[15px] md:grid-cols-5 sm:grid-cols-3 xs:grid-cols-2">
            {games.map((game) => (
                <div className="game h-[286px] p-[10px] rounded-[10px] cursor-pointer flex flex-col transition-all duration-300 ease hover:shadow-[0_0_10px_#fff,_0_0_10px_#eaeaea,_0_0_10px_#fff] hover:p-0 group" key={game.id}>
                    <div className="order-2 border-[#1a7051] border-t-0 rounded-b-[10px] w-full relative flex-grow h-[calc(100%-30px)] border border-[rgba(254,186,0,0.3)]">
                        <div className="absolute w-full h-full bg-[rgba(0,0,0,0.7)] transition-all duration-150 ease-in-out opacity-0 flex items-center justify-center flex-col hover:opacity-100">
                            <div className="action rounded-[4px] font-normal border border-[#1a7051] text-[12px] leading-[24px] bg-[#e00015] text-white w-[100px] text-center h-[30px] m-[5px]">Play Fun</div>
                        </div>
                        <div className="text-[18px] absolute top-[8px] right-[8px] opacity-0">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        </div>
                        <img
                            src={game.image}
                            alt={game.name}
                            className="rounded-b-[10px] h-full w-full object-cover transition-transform duration-150"
                            loading="lazy"
                        />
                    </div>
                    <div className="game-title order-1 leading-[35px] text-center text-[14px] px-[10px] py-0 whitespace-nowrap text-ellipsis overflow-hidden bg-[#171c2c] rounded-t-[10px] border border-[#1a7051] border-b-0 text-[#bbb] min-h-[40px] h-[30px] group-hover:bg-[#1a7051] group-hover:text-white transition-colors duration-150">{game.name}</div>
                </div>
            ))}
        </div>
    )
}

export default GameList;