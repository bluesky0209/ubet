import { useState, useEffect } from 'react';

const Slides = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { src: "/killer88.png", style: { height: '230px', width: '100%' } },
        { src: "/bc1.gif", style: { height: '230px', width: '100%' } },
        { src: "/blc1.gif", style: { height: '230px', width: '100%' } },
        { src: "/slotcas.gif", style: { height: '230px', width: '100%' } }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleNext = (e) => {
        e.preventDefault();
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const handlePrev = (e) => {
        e.preventDefault();
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const handleDotClick = (e, index) => {
        e.preventDefault();
        setCurrentSlide(index);
    };

    return (
        <div className="relative w-full h-full overflow-hidden">
            <div className="relative h-full w-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={slide.src}
                            className="w-full h-full "
                            style={slide.style}
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </div>

            <nav className="absolute top-1/2 -translate-y-1/2 w-full px-4 flex justify-between z-10">
                <button
                    onClick={handlePrev}
                    className="bg-black/50 hover:bg-black/75 text-white p-2 rounded-full"
                >
                    ←
                </button>
                <button
                    onClick={handleNext}
                    className="bg-black/50 hover:bg-black/75 text-white p-2 rounded-full"
                >
                    →
                </button>
            </nav>
            <nav className="slides-pagination absolute top-[5px] left-0 bottom-auto flex gap-2 z-[3] text-left p-[10px_5px] w-full bg-[#00000000]">
                {slides.map((_, index) => (
                    <a
                        key={index}
                        href={`#${index + 1}`}
                        onClick={(e) => {
                            e.preventDefault();
                            handleDotClick(e, index);
                        }}
                        className={`transition-colors ${index === currentSlide ? 'current' : ''
                            }`}
                        style={{
                            border: '2px solid #1a7051',
                            borderColor: index === currentSlide ? '#1a7051' : '#171c2c',
                            background: index === currentSlide ? '#1a7051' : '#171c2c',
                            boxShadow: '0 0 6px #fff',
                            borderRadius: '5px',
                            display: 'inline-block',
                            verticalAlign: 'middle',
                            padding: '5px 10px',
                            overflow: 'hidden',
                            fontSize: '11px',
                            color: 'white'
                        }}
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        {index + 1}
                    </a>
                ))}
            </nav>
        </div>
    );
};

export default Slides;