import Booking from "../../models/Booking.js"
import Listing from "../../models/Listing.js";

const getBookingsWithListingDetails = async (userID) => {
  try {
    const bookings = await Booking.find({ user_id: userID });

    const formattedBookings = [];

    for (const booking of bookings) {
      const listing = await Listing.findOne({ _id: booking.listing_id });

      const formattedBooking = {
        listingName: listing.name,
        paymentAmount: booking.payment_amount,
        paymentStatus: booking.payment_status,
      };

      formattedBookings.push(formattedBooking);
    }

    return formattedBookings;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    throw error;
  }
};


export const bookingList = async (req,res) => {
    const userID = req.userId
    try {
      const bookings = await getBookingsWithListingDetails(userID);
      if(bookings){
        res.json({ result: bookings }).status(200)
      }
      else {
        res.json({ result: null }).status(200)
      }
    } catch (err) {
      res.status(500).json({ error: "Error fetching bookings" });
    }
}