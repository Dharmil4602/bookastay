import React, { useState } from "react";
import Pagination from "./Pagination";
import Loader from "../../utils/Loader";
import ReviewCard from "./ReviewCard";
import UserRating from "./UserRating";
import Overview from "./Overview";

const Reviews = ({ reviewData }) => {
    const [userRating, setUserRating] = useState(0);

    const [userReview, setUserReview] = useState("");

    const [shouldHideUserRatingsSelector, setShouldHideUserRatingsSelector] = useState(false);

    const [toastMessage, setToastMessage] = useState("");
    const [reviews, setReviews] = useState(reviewData);
    /**
     * Handles the selected user rating.
     * @param {number} rate - The rating value.
     */
    const handleRating = (rate) => {
        setUserRating(rate);
    };

    const handleReviewSubmit = async () => {
        if (userRating === 0) {
            setToastMessage({
                type: "error",
                message: "Please select a rating before submitting."
            });
            return;
        }

        setShouldHideUserRatingsSelector(false);
    };

    const handleUserReviewChange = (review) => {
        setUserReview(review);
    };

    const isEmpty = reviewData?.length === 0;

    return (
        <div className="flex flex-col border-t p-4">
            <h1 className="text-xl font-bold text-gray-700">User Reviews</h1>
            <div className="flex flex-col gap-6 bg-white py-4 shadow-sm md:flex-row">
                {/* {shouldHideUserRatingsSelector ? null : (
                    <UserRating
                        userRating={userRating}
                        isEmpty={isEmpty}
                        handleRating={handleRating}
                        userReview={userReview}
                        handleReviewSubmit={handleReviewSubmit}
                        handleUserReviewChange={handleUserReviewChange}
                    />
                )} */}
            </div>
            <div>
                {isEmpty ? (
                    <h2 className="items-center">No data found</h2>
                ) : (
                    // <Loader height={"600px"} />
                    <div>
                        {reviewData?.map((review, index) => (
                            <ReviewCard
                                key={index}
                                reviewerName={review?.firstName + " " + review?.lastName}
                                reviewDate={review?.date
                                    ?.substring(0, 10)
                                    .split("-")
                                    .reverse()
                                    .join("-")}
                                review={review?.comment}
                                rating={review?.rating}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Reviews;
