import "./travelcard.css";

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

    return (
        <div className="travel-card">
            <h2 className="travel-card__heading">
                Popular Travel Packages
            </h2>

            <div className="travel-card__container">
                {packages.map((item) => (
                    <div className="travel-card__item" key={item.id}>
                        <img
                            src={item.image}
                            alt={item.title}
                            className="travel-card__image"
                        />

                        <div className="travel-card__content">
                            <h3>{item.title}</h3>

                            <p>{item.description}</p>

                            <div className="travel-card__bottom">
                                <span>{item.price}</span>

                                <button>
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TravelCard;