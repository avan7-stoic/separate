import React, { useState, useEffect } from "react";

const UniqueSlideshow = () => {
    const slides = [
        {
            image: "src/assets/school.jpg",
            title: "Empower Girls Through Education",
            description:
                "Join our mission to provide education and menstrual hygiene support to young girls in need.",
        },
        {
            image: "src/assets/keeping-girls-in-school.jpg",
            title: "Ending Period Poverty",
            description:
                "Together, we can ensure every girl has access to essential hygiene products.",
        },
        {
            image: "src/assets/group-of-happy-african-children-orphanage-in-nairobi-kenya-east-africa.jpg",
            title: "Building a Brighter Future",
            description:
                "Support programs that empower girls to reach their full potential.",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    // Automatically change slides after a 5 second delay:

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="unique-slideshow-wrapper relative w-full h-[500px] overflow-hidden rounded-lg shadow-lg">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={`slide-${index}`}
                    className={`unique-slide absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    <img
                        src={slide.image}
                        alt={`image slide-${index}`}
                        className="unique-slide-image w-full h-full object-cover"
                    />
                    <div className="unique-slide-overlay absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
                        <h2 className="unique-slide-title text-3xl md:text-5xl font-bold">
                            {slide.title}
                        </h2>
                        <p className="unique-slide-description mt-4 max-w-xl">
                            {slide.description}
                        </p>
                    </div>
                </div>
            ))}

            {/* Controls */}
            <div className="unique-controls absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={`control-${index}`}
                        className={`unique-control-dot w-3 h-3 rounded-full transition ${index === currentSlide ? "bg-pink-500" : "bg-gray-300"
                            }`}
                        onClick={() => setCurrentSlide(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default UniqueSlideshow;
