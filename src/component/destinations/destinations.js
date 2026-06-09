import "./destinations.css";

const Destinations = () => {
    const destinations = [
        {
            id: 1,
            image:
                "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86",
            title: "Goa",
            description:
                "Beautiful beaches and exciting nightlife.",
        },

        {
            id: 2,
            image:
                "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
            title: "Kashmir",
            description:
                "Snowy mountains and breathtaking valleys.",
        },

        {
            id: 3,
            image:
                "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
            title: "Manali",
            description:
                "Adventure, trekking, and scenic beauty.",
        },

        {
            id: 4,
            image:
                "https://images.unsplash.com/photo-1477587458883-47145ed94245",
            title: "Jaipur",
            description:
                "Explore royal palaces and rich culture.",
        },
    ];

    return (
        <div className="destinations">
            <h2 className="destinations__heading">
                Popular Destinations
            </h2>

            <div className="destinations__container">
                {destinations.map((item) => (
                    <div
                        className="destinations__card"
                        key={item.id}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="destinations__image"
                        />

                        <div className="destinations__content">
                            <h3>
                                {item.title}
                            </h3>

                            <p>
                                {item.description}
                            </p>

                            <button className="destinations__button">
                                Explore
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Destinations;