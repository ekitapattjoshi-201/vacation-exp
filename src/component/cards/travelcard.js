import { useState } from "react";
import "./travelcard.css";
import { HugeiconsIcon } from "@hugeicons/react";

import {
    ArrowLeft01Icon,
    ArrowRight01Icon,
} from "@hugeicons/core-free-icons";


const TravelCard = () => {
    const packages = [
        {
            id: 1,
            image:
                "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86",
            title: "Goa Beach",
            description: "Enjoy beaches and nightlife in Goa.",
            price: "₹15,999",
        },
        {
            id: 2,
            image:
                "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
            title: "Kashmir Trip",
            description: "Explore snowy mountains and valleys.",
            price: "₹22,999",
        },
        {
            id: 3,
            image:
                "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
            title: "Manali Adventure",
            description: "Adventure trip with trekking and camping.",
            price: "₹18,999",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? packages.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev === packages.length - 1 ? 0 : prev + 1
        );
    };

    const currentPackage = packages[currentIndex];

    return (
        <div className="travel-card">
            <h2 className="travel-card__heading">
                Popular Travel Packages
            </h2>

            <div className="travel-card__item">
                <img
                    src={currentPackage.image}
                    alt={currentPackage.title}
                    className="travel-card__image"
                />

                <div className="travel-card__content">
                    <h3>{currentPackage.title}</h3>
                    <p>{currentPackage.description}</p>

                    <div className="travel-card__bottom">
                        <span>{currentPackage.price}</span>
                        <button>Book Now</button>
                    </div>
                </div>

                <div className="travel-card__controls">
                    <button
                        className="travel-card__arrow"
                        onClick={handlePrevious}
                    >
                        <HugeiconsIcon
                            icon={ArrowLeft01Icon}
                            size={20}
                        />
                    </button>

                    <button
                        className="travel-card__arrow"
                        onClick={handleNext}
                    >
                        <HugeiconsIcon
                            icon={ArrowRight01Icon}
                            size={20}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TravelCard;