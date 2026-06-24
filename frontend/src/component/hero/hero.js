import "./hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__overlay">

                <div className="hero__content">
                    <h1 className="hero__title">
                        Explore The World With
                        Vacation EXP
                    </h1>

                    <p className="hero__description">
                        Discover amazing places,
                        create unforgettable
                        memories, and plan your
                        perfect vacation.
                    </p>

                    <button className="hero__button">
                        Explore Packages
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Hero;