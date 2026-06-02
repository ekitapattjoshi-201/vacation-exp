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
            description:
                "Relax at beautiful beaches and enjoy nightlife.",
        },
        {
            id: 2,
            image:
                "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
            title: "Kashmir",
            description:
                "Explore snowy mountains and scenic valleys.",
        },
        {
            id: 3,
            image:
                "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
            title: "Manali",
            description:
                "Adventure, trekking, and mountain views.",
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

                    <button className="travel-card__button">
                        Explore Destination
                    </button>
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