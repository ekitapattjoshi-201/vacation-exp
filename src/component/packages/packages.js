import "./packages.css";

const Packages = () => {
    const packages = [
        {
            id: 1,
            image:
                "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86",
            title: "Goa Escape",
            duration: "4 Days / 3 Nights",
            price: "₹15,999",
            rating: "⭐ 4.5",
        },
        {
            id: 2,
            image:
                "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
            title: "Kashmir Adventure",
            duration: "5 Days / 4 Nights",
            price: "₹22,999",
            rating: "⭐ 4.8",
        },
        {
            id: 3,
            image:
                "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
            title: "Manali Trip",
            duration: "3 Days / 2 Nights",
            price: "₹18,999",
            rating: "⭐ 4.6",
        },
        {
            id: 4,
            image:
                "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce",
            title: "Kerala Tour",
            duration: "6 Days / 5 Nights",
            price: "₹25,999",
            rating: "⭐ 4.9",
        },
    ];

    return (
        <section className="packages">
            <h2 className="packages__heading">
                Popular Packages
            </h2>

            <div className="packages__container">
                {packages.map((item) => (
                    <div
                        className="packages__card"
                        key={item.id}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="packages__image"
                        />

                        <div className="packages__content">
                            <h3>
                                {item.title}
                            </h3>

                            <p className="packages__duration">
                                {item.duration}
                            </p>

                            <div className="packages__bottom">
                                <div>
                                    <span className="packages__price">
                                        {item.price}
                                    </span>

                                    <p className="packages__rating">
                                        {item.rating}
                                    </p>
                                </div>

                                <button className="packages__button">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Packages;