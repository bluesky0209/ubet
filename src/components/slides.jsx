import { useState, useEffect } from 'react';

const slides = [
    { src: "/killer88.png" },
    { src: "/bc1.gif" },
    { src: "/blc1.gif" },
    { src: "/slotcas.gif" }
];

const Slides = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleDotClick = (e, index) => {
        e.preventDefault();
        setCurrentSlide(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

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
                            className={`w-full h-full max-[699px]:min-[280px]:h-[120px] h-[230px] w-full`}
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </div>

            <nav className="absolute top-[5px] left-0 bottom-auto flex gap-2 z-[3] text-left p-[10px_5px] w-full bg-[#00000000]">
                {slides.map((_, index) => (
                    <a
                        key={index}
                        href={`#${index + 1}`}
                        onClick={(e) => {
                            e.preventDefault();
                            handleDotClick(e, index);
                        }}
                        className={`border-2 border-solid ${index === currentSlide ? 'border-[#1a7051] bg-[#1a7051]' : 'border-[#171c2c] bg-[#171c2c]'
                            } shadow-[0_0_6px_#fff] rounded-[5px] inline-block align-middle p-[5px_10px] overflow-hidden text-[11px] text-white`}
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