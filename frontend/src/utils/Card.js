import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faWifi,
    faTemperatureArrowUp,
    faTv,
    faFire,
    faStar,
    faEdit
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Card = ({ _id, name, img, price, rating, description }) => {
    const userType = localStorage.getItem("userType");
    console.log(userType);
    const navigate = useNavigate();
    // console.log(
    //     "******************** Card data *************************",
    //     _id,
    //     name,
    //     img,
    //     rating,
    //     description
    // );
    const handleUpdateClick = () => {
        navigate(`/update-listing/${_id}`);
    };
    const handleCardClick = () => {
        navigate(`/booking-details/${_id}`); // Navigate to the booking details page with _id as URL parameter
    };
    // console.log(name, rating, price, description);
    return (
        <>
            <div
                key={_id}
                className="relative z-0 flex w-full max-w-[24rem] cursor-pointer flex-col rounded-lg border-2 bg-stone-50 bg-clip-border text-gray-700 shadow-xl xl:mx-2 xl:mb-10 xl:mt-6"
            >
                {/* CARD STARTING */}
                <div className="bg-blue-gray-500 shadow-blue-gray-500/40 relative mx-4 mt-4 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg">
                    <img className="h-48 w-full" src={img?.[0]} alt={name} />
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                    {/* Update button */}
                    {userType === "Service Provider" ? (
                        <button
                            className="absolute right-4 top-4 z-10 h-8 w-10 rounded-full bg-white text-center align-middle font-medium text-blue-600"
                            type="button"
                            onClick={handleUpdateClick}
                        >
                            <FontAwesomeIcon icon={faEdit} className="h-6 w-6 text-blue-600" />
                        </button>
                    ) : (
                        <></>
                    )}

                    {/* <button
                        className="absolute right-4 top-4 z-10 h-8 w-14 rounded-full bg-orange-400 text-center align-middle font-medium text-blue-600"
                        type="button"
                        onClick={handleUpdateClick}
                    >
                        <FontAwesomeIcon icon={faEdit} className="h-6 w-6 text-blue-600" />
                    </button> */}
                </div>
                {/* FEATURES */}
                <div className="p-4">
                    <div className="mb-3 flex items-center justify-between">
                        <h5 className="text-blue-gray-900 block font-sans text-xl font-bold leading-snug tracking-normal antialiased">
                            {name}
                        </h5>
                        <p className="text-blue-gray-900 flex items-center gap-1.5 text-base font-medium leading-relaxed antialiased">
                            <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                            {rating}
                        </p>
                    </div>
                    <span className="font-bold">${price}</span>
                    <p className="block font-sans text-base font-light leading-tight text-gray-700 antialiased">
                        {description.split(" ").slice(0, 10).join(" ")}
                    </p>
                    <div className="group mt-2 inline-flex flex-wrap items-center gap-5">
                        <span
                            data-tooltip-target="money"
                            className="cursor-pointer rounded-full border border-red-800/5 bg-red-800/5 p-3 text-sky-600 transition-colors hover:border-red-800/10 hover:bg-red-800/10 hover:!opacity-100 group-hover:opacity-70"
                        >
                            <FontAwesomeIcon icon={faTemperatureArrowUp} />
                        </span>
                        <span
                            data-tooltip-target="wifi"
                            className="cursor-pointer rounded-full border border-red-800/5 bg-red-800/5 p-3 text-sky-600 transition-colors hover:border-red-800/10 hover:bg-red-800/10 hover:!opacity-100 group-hover:opacity-70"
                        >
                            <FontAwesomeIcon icon={faWifi} />
                        </span>

                        <span
                            data-tooltip-target="tv"
                            className="cursor-pointer rounded-full border border-red-800/5 bg-red-800/5 p-3 text-sky-600 transition-colors hover:border-red-800/10 hover:bg-red-800/10 hover:!opacity-100 group-hover:opacity-70"
                        >
                            <FontAwesomeIcon icon={faTv} />
                        </span>
                        <span
                            data-tooltip-target="fire"
                            className="cursor-pointer rounded-full border  border-red-800/5 bg-red-800/5 p-3 text-sky-600 transition-colors hover:border-red-800/10 hover:bg-red-800/10 hover:!opacity-100 group-hover:opacity-70"
                        >
                            <FontAwesomeIcon icon={faFire} className="h-4 w-4" />
                        </span>
                    </div>
                </div>
                {/* SUBMIT */}
                <div className="p-6 pt-2">
                    <button
                        type="button"
                        onClick={handleCardClick}
                        class="mb-2 mr-2 block w-full rounded-lg bg-sky-600 bg-gradient-to-r px-5 py-3.5 text-center align-middle text-sm font-medium text-white shadow-lg shadow-blue-500/50 hover:bg-sky-800"
                    >
                        VIEW DETAILS
                    </button>
                </div>
            </div>
        </>
    );
};

export default Card;
