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

        <div className="px-[10px] md:h-[230px] h-[120px] mb-[5px] mt-[10px]">
            <div className="h-full w-full border border-solid border-[#212531] md:border-0 rounded-[15px] md:rounded-0 shadow-none md:shadow-[0_0_15px_#fff]">
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
                                    className={`w-full h-full h-[120px] md:h-[230px] w-full rounded-[5px] md:rounded-[0px]`}
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
                                className={`w-[31px] h-[27px] border-2 border-solid ${index === currentSlide ? 'border-[#1a7051] bg-[#1a7051]' : 'border-[#171c2c] bg-[#171c2c]'
                                    } shadow-[0_0_6px_#fff] rounded-[5px] inline-block align-middle p-[5px_10px] overflow-hidden text-[11px] text-white`}
                                aria-label={`Go to slide ${index + 1}`}
                            >
                                {index + 1}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Slides;