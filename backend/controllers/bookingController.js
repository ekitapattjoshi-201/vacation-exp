const Booking = require("../models/booking");

const createBooking = async (
    req,
    res
) => {
    try {
        const {
            name,
            email,
            phone,
            destination,
            travelDate,
            travelers,
        } = req.body;

        if (
            !name ||
            !email ||
            !phone ||
            !destination ||
            !travelDate ||
            !travelers
        ) {
            return res.status(400).json({
                success: false,
                message:
                    "All fields are required",
            });
        }

        const booking =
            await Booking.create({
                name,
                email,
                phone,
                destination,
                travelDate,
                travelers,
            });

        res.status(201).json({
            success: true,
            data: booking,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message:
                error.message,
        });
    }
};

const getBookings = async (
    req,
    res
) => {
    try {
        const bookings =
            await Booking.find();

        res.status(200).json({
            success: true,
            data: bookings,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message:
                error.message,
        });
    }
};

module.exports = {
    createBooking,
    getBookings,
};