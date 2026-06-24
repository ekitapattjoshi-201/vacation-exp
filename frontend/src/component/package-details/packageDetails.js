import { useParams, Link } from "react-router-dom";
import "./packagedetails.css";

const PackageDetails = () => {
    const { id } = useParams();

    const packageData = {
        1: {
            title: "Goa Beach",
            image:
                "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86",
            price: "₹15,999",
            duration: "4 Days / 3 Nights",
            hotel: "3 Star Hotel",
            description:
                "Enjoy Goa's beautiful beaches, nightlife, and relaxing vibes.",
            places: [
                "Baga Beach",
                "Calangute Beach",
                "Fort Aguada",
            ],
        },

        2: {
            title: "Kashmir",
            image:
                "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
            price: "₹22,999",
            duration: "5 Days / 4 Nights",
            hotel: "4 Star Hotel",
            description:
                "Explore snowy mountains and beautiful valleys in Kashmir.",
            places: [
                "Srinagar",
                "Gulmarg",
                "Pahalgam",
            ],
        },

        3: {
            title: "Manali",
            image:
                "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
            price: "₹18,999",
            duration: "4 Days / 3 Nights",
            hotel: "3 Star Hotel",
            description:
                "Adventure trip with trekking and mountain views.",
            places: [
                "Solang Valley",
                "Rohtang Pass",
                "Hadimba Temple",
            ],
        },
    };

    const selectedPackage = packageData[id];

    return (
        <div className="package-details">
            <div className="package-details__card">
                <img
                    src={selectedPackage.image}
                    alt={selectedPackage.title}
                    className="package-details__image"
                />

                <div className="package-details__content">
                    <h2>
                        {selectedPackage.title}
                    </h2>

                    <p className="package-details__description">
                        {selectedPackage.description}
                    </p>

                    <div className="package-details__info">
                        <p>
                            <strong>Price:</strong>{" "}
                            {selectedPackage.price}
                        </p>

                        <p>
                            <strong>Duration:</strong>{" "}
                            {selectedPackage.duration}
                        </p>

                        <p>
                            <strong>Hotel:</strong>{" "}
                            {selectedPackage.hotel}
                        </p>
                    </div>

                    <div className="package-details__places">
                        <h3>Places Covered</h3>

                        <ul>
                            {selectedPackage.places.map(
                                (place, index) => (
                                    <li key={index}>
                                        {place}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    <div className="package-details__actions">
                        <Link to="/">
                            <button className="package-details__button">
                                Back to Home
                            </button>
                        </Link>

                        <button className="package-details__button">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageDetails;