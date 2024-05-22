import { PaymentStatus } from "../../enums/PaymentStatusEnum.js";
import Booking from "../../models/Booking.js";
import "dotenv/config";
import Stripe from "stripe";
import mongoose from "mongoose";

const stripeClient = await Stripe(process.env.STRIPE_PRIVATE_KEY);

const addBooking = async (listingId, priceInCents, userId, pstatus) => {
  try {
    const booking = new Booking({
      listing_id: new mongoose.Types.ObjectId(listingId),
      payment_amount: parseFloat(priceInCents) / 100,
      user_id: new mongoose.Types.ObjectId(userId),
      payment_status: pstatus,
    });
    await booking.save();
  } catch (err) {
    console.log(`Error store DB : ${err}`);
  }
};

export const confirmBooking = async (req, res) => {
  const session = await stripeClient.checkout.sessions.retrieve(
    req.query.session_id
  );
  const userID = req.query.user_id;
  const listingID = req.query.listing_id;
  const priceInCents = req.query.price;

  if (session.payment_status === "paid") {
    await addBooking(listingID, priceInCents, userID, PaymentStatus.SUCCESS);
    res.redirect(`${process.env.CLIENT_URL}/payment/success`);
  } else {
    res.redirect(`${process.env.CLIENT_URL}/payment/failure`);
    await addBooking(listingID, priceInCents, userID, PaymentStatus.FAILED);
  }
};
