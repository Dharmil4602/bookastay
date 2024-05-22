/**
 * Auther: Shyamal Prajapati
 * Banner id: B00958501
 */

// import UserReviews from "../user-reviews/UserReviews";
import React, { useEffect, useState } from "react";
import ReactImageGallery from "react-image-gallery";
import BookingSidebar from "./BookingSidebar";
import Reviews from "../reviews/Reviews";
import { useParams } from "react-router-dom";
import axios from "axios";

const Booking = () => {
    const { id } = useParams();
    console.log("Paratrmsadasdfasd", id);
    const [hotelDetails, setHotelDetails] = useState({});
    const [image, setImage] = useState([]);
    const token = localStorage.getItem("token");
    // const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchHotelDetails = async () => {
            try {
                console.log("***********");
                const response = await axios.get(
                    `${process.env.REACT_APP_BACKEND_URL}/api/listings/listings/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                console.log(response.data);
                // const { img, name, description } = response.data;
                setHotelDetails(response.data);
                console.log("Hotel details:", response.data);
                // setImage(img);
                // setIsLoading(false);
            } catch (error) {
                console.error("Error fetching hotel details:", error);
                // setIsLoading(false);
            }
        };

        fetchHotelDetails();
    }, []);

    // console.log(hotelDetails);
    const images = hotelDetails?.img?.map((image) => ({
        original: image,
        thumbnail: image,
        thumbnailClass: "h-[80px]",
        thumbnailLoading: "lazy"
    }));
    console.log(images);

    const [reviewData, setReviewData] = useState({
        isLoading: true,
        data: []
    });
    const [currentReviewsPage, setCurrentReviewPage] = useState(1);

    // const handlePageChange = (page) => {
    //     setCurrentReviewPage(page);
    // };

    // const handlePreviousPageChange = () => {
    //     setCurrentReviewPage((prev) => {
    //         if (prev <= 1) return prev;
    //         return prev - 1;
    //     });
    // };

    // const handleNextPageChange = () => {
    //     setCurrentReviewPage((prev) => {
    //         if (prev >= reviewData.pagination.totalPages) return prev;
    //         return prev + 1;
    //     });
    // };

    console.log("Hotel details for review:", hotelDetails.reviews);

    // console.log("asvdjhasgugegqwjkh4eqwoh", { ...hotelDetails });
    return (
        <div className="container mx-auto mt-20 flex flex-wrap items-start justify-center p-4 md:flex-nowrap">
            <div className="w-[800px] overflow-hidden rounded-lg bg-white shadow-lg">
                <div>
                    <div className="relative w-full">
                        <ReactImageGallery
                            items={images ?? []}
                            showPlayButton={false}
                            showFullscreenButton={false}
                            infinite={true}
                            lazyLoad={true}
                            autoPlay={true}
                            showNav={false}
                            className="max-h-48"
                        />
                        {/* {mergedHotelDetails.discount && (
                            <div className="absolute right-0 top-0 m-4 rounded bg-yellow-500 px-2 py-1 text-xs font-semibold text-white">
                                {mergedHotelDetails.discount} OFF
                            </div>
                        )} */}
                    </div>
                    <div className="p-4">
                        <h2 className="mb-2 text-3xl font-semibold text-gray-800">
                            {hotelDetails.name}
                        </h2>
                        <p className="mb-4 text-sm text-gray-600">
                            Address: {hotelDetails.address}
                        </p>
                        <p className="mb-4 text-base text-gray-600">{hotelDetails.description}</p>
                        {/* <div className="mt-2 space-y-2">
                             {hotelDetails.description.map((line) => (
                                <p className="text-gray-700">{line}</p>
                            ))}
                        </div> */}
                        <div className="mt-4 flex items-center justify-between">
                            <div>
                                {hotelDetails.utilities && hotelDetails.utilities.length > 0 && (
                                    <div>
                                        <p className="text-base text-gray-600">
                                            Features include: {hotelDetails.utilities.join(" | ")}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <Reviews reviewData={hotelDetails?.reviews} />
                {/* <Reviews
                    reviews={hotelDetails.reviews ?? []}
                    handlePageChange={handlePageChange}
                    handlePreviousPageChange={handlePreviousPageChange}
                    handleNextPageChange={handleNextPageChange}
                /> */}
            </div>

            <BookingSidebar hotelCode={{ ...hotelDetails }} />

            {/* <BookingSidebar /> */}
        </div>
    );
};

export default Booking;
