import { useState } from "react";
import { Link } from "react-router-dom";
import "./travelcard.css";
import { HugeiconsIcon } from "@hugeicons/react";

import {
    ArrowLeft01Icon,
    ArrowRight01Icon,
    FavouriteIcon,
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

    const [currentIndex, setCurrentIndex] =
        useState(0);

    const [search, setSearch] =
        useState("");

    const [wishlist, setWishlist] =
        useState([]);

    const filteredPackages =
        packages.filter((item) =>
            item.title
                .toLowerCase()
                .includes(
                    search.toLowerCase()
                )
        );

    const displayPackages =
        search.trim()
            ? filteredPackages
            : packages;

    const currentPackage =
        displayPackages[
        currentIndex
        ] ||
        displayPackages[0];

    const handlePrevious = () => {
        setCurrentIndex((prev) =>
            prev === 0
                ? displayPackages.length - 1
                : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev ===
                displayPackages.length - 1
                ? 0
                : prev + 1
        );
    };

    const handleWishlist = (id) => {
        setWishlist((prev) =>
            prev.includes(id)
                ? prev.filter(
                    (item) =>
                        item !== id
                )
                : [...prev, id]
        );
    };

    return (
        <div className="travel-card">
            <h2 className="travel-card-heading">
                Popular Travel Packages
            </h2>

            <div className="travel-card-search">
                <input
                    type="text"
                    placeholder="Search destination..."
                    value={search}
                    onChange={(e) => {
                        setSearch(
                            e.target.value
                        );
                        setCurrentIndex(
                            0
                        );
                    }}
                    className="travel-card-input"
                />
            </div>

            {!currentPackage ? (
                <p className="travel-card-empty">
                    No destination found
                </p>
            ) : (
                <div className="travel-card-item">
                    <img
                        src={
                            currentPackage.image
                        }
                        alt={
                            currentPackage.title
                        }
                        className="travel-card-image"
                    />

                    <div className="travel-card-content">
                        <div className="travel-card-top">
                            <h3>
                                {
                                    currentPackage.title
                                }
                            </h3>

                            <button
                                className={`travel-card-wishlist ${wishlist.includes(
                                    currentPackage.id
                                )
                                        ? "travel-card-wishlist-active"
                                        : ""
                                    }`}
                                onClick={() =>
                                    handleWishlist(
                                        currentPackage.id
                                    )
                                }
                            >
                                <HugeiconsIcon
                                    icon={
                                        FavouriteIcon
                                    }
                                    size={
                                        28
                                    }
                                />
                            </button>
                        </div>

                        <p>
                            {
                                currentPackage.description
                            }
                        </p>

                        <div className="travel-card-buttons">
                            <Link
                                to={`/package/${currentPackage.id}`}
                            >
                                <button className="travel-card-button">
                                    Explore
                                    Destination
                                </button>
                            </Link>

                            <Link to="/booking">
                                <button className="travel-card-button">
                                    Book Now
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="travel-card-controls">
                        <button
                            className="travel-card-arrow"
                            onClick={
                                handlePrevious
                            }
                        >
                            <HugeiconsIcon
                                icon={
                                    ArrowLeft01Icon
                                }
                                size={
                                    20
                                }
                            />
                        </button>

                        <button
                            className="travel-card-arrow"
                            onClick={
                                handleNext
                            }
                        >
                            <HugeiconsIcon
                                icon={
                                    ArrowRight01Icon
                                }
                                size={
                                    20
                                }
                            />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TravelCard;