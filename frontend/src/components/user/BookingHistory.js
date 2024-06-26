import React, { useEffect, useState } from "react";
import axios from "axios";
import BookingTable from "../table/BookingHistorytable";
import { Alert } from "@mui/material";

const onBookingClickHandler = (bookingId) => {
    console.log(`Booking_Id: ${bookingId}`);
};

function BookingHistory() {
    const [bookingHistory, setBookingHistory] = useState([]);
    const token = localStorage.getItem("token");
    useEffect(() => {
        const fetchBookingHistory = async () => {
            try {
                const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/bookings`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setBookingHistory(data.result);
            } catch (error) {
                console.log("Error in fetching booking history");
            }
        };
        fetchBookingHistory();
    }, [token]);
    return (
        <>
            <div style={{ marginTop: 70, padding: 20 }}>
                <h1 className="text-5xl">Booking History</h1>
                <br />
                <br />
                {bookingHistory && bookingHistory.length > 0 ? (
                    <BookingTable
                        bookings={bookingHistory}
                        onClickHandler={onBookingClickHandler}
                    />
                ) : (
                    <Alert severity="error">No Booking History Found</Alert>
                )}
            </div>
        </>
    );
}

export default BookingHistory;
