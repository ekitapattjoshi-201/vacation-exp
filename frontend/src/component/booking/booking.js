import { useState } from "react";
import "./booking.css";

const initialFormData = {
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelDate: "",
    travelers: "",
};

const Booking = () => {
    const [formData, setFormData] =
        useState(initialFormData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:
                e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(
            "Booking Submitted:",
            formData
        );

        alert(
            "Booking Submitted Successfully!"
        );

        setFormData(
            initialFormData
        );
    };

    return (
        <div className="booking">
            <div className="booking__container">
                <h2 className="booking__heading">
                    Book Your Trip
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="booking__form"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={
                            formData.name
                        }
                        onChange={
                            handleChange
                        }
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={
                            formData.email
                        }
                        onChange={
                            handleChange
                        }
                        required
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={
                            formData.phone
                        }
                        onChange={
                            handleChange
                        }
                        required
                    />

                    <select
                        name="destination"
                        value={
                            formData.destination
                        }
                        onChange={
                            handleChange
                        }
                        required
                    >
                        <option value="">
                            Select Destination
                        </option>

                        <option value="Goa">
                            Goa
                        </option>

                        <option value="Kashmir">
                            Kashmir
                        </option>

                        <option value="Manali">
                            Manali
                        </option>
                    </select>

                    <input
                        type="date"
                        name="travelDate"
                        value={
                            formData.travelDate
                        }
                        onChange={
                            handleChange
                        }
                        required
                    />

                    <input
                        type="number"
                        name="travelers"
                        placeholder="Number of Travelers"
                        value={
                            formData.travelers
                        }
                        onChange={
                            handleChange
                        }
                        required
                    />

                    <button type="submit">
                        Confirm Booking
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Booking;