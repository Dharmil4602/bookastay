/**
 * Auther: Shyamal Prajapati
 * Banner id: B00958501
 */

import React, { useEffect, useState } from "react";
import Card from "../../utils/Card";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Listing = () => {
    const userType = localStorage.getItem("userType");
    const token = localStorage.getItem("token");
    const userId = token.userId;

    const navigate = useNavigate();
    const handleAddListing = () => {
        navigate("/add-listing");
    };
    const handleUpdateListing = () => {
        navigate("/update-listing");
    };

    const [listings, setListings] = useState([]);
    let updatedListings = [];

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_BACKEND_URL}/api/listings/listings`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                console.log(
                    "-------------------------------- response ------------------------------",
                    response.data
                );
                setListings(response.data);
            } catch (error) {
                console.error("Error fetching listings:", error);
            }
        };

        fetchListings();
    }, []);

    return (
        <>
            <div className="grid sm:flex sm:justify-between">
                <div>
                    <h1 className="relative top-20 mb-6 ml-14 mt-10 grid-rows-1 text-3xl font-bold text-gray-800 underline">
                        My Listings
                    </h1>
                </div>
                <div className="mx-auto mb-10 mt-16 flex flex-col sm:mr-6 sm:mt-32 sm:grid-rows-2 sm:flex-row sm:items-center sm:justify-end">
                    <button
                        onClick={handleAddListing}
                        className="mb-2 w-full rounded bg-orange-600 px-4 py-2 font-bold text-white hover:bg-orange-700 sm:mb-0 sm:mr-2 sm:w-auto"
                    >
                        Add Listing
                    </button>
                    {/* <button
                        onClick={handleUpdateListing}
                        className="w-full rounded bg-orange-600 px-4 py-2 font-bold text-white hover:bg-orange-700 sm:mb-0 sm:mr-2 sm:w-auto"
                    >
                        Update Listing
                    </button> */}
                </div>
            </div>

            {console.log("updatedListings", updatedListings)}
            <div className="min-w-screen mx-6 grid grid-cols-1 items-center justify-center gap-6 overflow-x-auto outline-none focus:outline-none sm:grid-cols-2 xl:grid-cols-4">
                {listings.map((detail) => (
                    <Card key={detail.id} {...detail} />
                ))}
            </div>
        </>
    );
};

export default Listing;
