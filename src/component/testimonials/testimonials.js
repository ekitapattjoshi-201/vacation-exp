import "./testimonials.css";

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name: "Priya Sharma",
            review:
                "Amazing Goa trip experience! Everything was well planned.",
            rating: 4,
        },

        {
            id: 2,
            name: "Suman Sahu",
            review:
                "Smooth booking process and excellent hotel stay.",
            rating: 4,
        },

        {
            id: 3,
            name: "Deba Maharana",
            review:
                "Loved the Kashmir package. Beautiful places and great service.",
            rating: 4.5,
        },
    ];

    return (
        <div className="testimonials">
            <h2 className="testimonials__heading">
                What Our Travelers Say
            </h2>

            <div className="testimonials__container">
                {reviews.map((item) => (
                    <div
                        className="testimonials__card"
                        key={item.id}
                    >
                        <div className="testimonials__rating">
                            {[...Array(5)].map(
                                (_, index) => (
                                    <span
                                        key={index}
                                    >
                                        {index <
                                            Math.floor(
                                                item.rating
                                            )
                                            ? "⭐"
                                            : index <
                                                item.rating
                                                ? "✨"
                                                : "☆"}
                                    </span>
                                )
                            )}
                        </div>

                        <p className="testimonials__review">
                            "{item.review}"
                        </p>

                        <h3 className="testimonials__name">
                            - {item.name}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;