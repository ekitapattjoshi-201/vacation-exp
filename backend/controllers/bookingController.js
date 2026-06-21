const Booking = require("../models/booking");

const createBooking = async (
    req,
    res
) => {
    try {
        const booking =
            await Booking.create(
                req.body
            );

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