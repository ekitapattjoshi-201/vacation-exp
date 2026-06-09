import "./category.css";

const Category = () => {
    const categories = [
        {
            id: 1,
            image:
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            title: "Adventure",
            description:
                "Thrilling trekking and outdoor experiences.",
        },

        {
            id: 2,
            image:
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            title: "Beach",
            description:
                "Relax at beautiful beaches and resorts.",
        },

        {
            id: 3,
            image:
                "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
            title: "Hill Station",
            description:
                "Enjoy scenic mountains and cool weather.",
        },

        {
            id: 4,
            image:
                "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
            title: "Cultural",
            description:
                "Explore heritage, traditions, and history.",
        },

        {
            id: 5,
            image:
                "https://images.unsplash.com/photo-1549366021-9f761d450615",
            title: "Safari",
            description:
                "Wildlife adventures and jungle experiences.",
        },
    ];

    return (
        <div className="category">
            <h2 className="category__heading">
                Explore by Category
            </h2>

            <div className="category__container">
                {categories.map((item) => (
                    <div
                        className="category__card"
                        key={item.id}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="category__image"
                        />

                        <div className="category__content">
                            <h3>
                                {item.title}
                            </h3>

                            <p>
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;