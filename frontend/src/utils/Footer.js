import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    const { pathname } = location;
    const footerClass = pathname === "/login" ? "absolute bottom-0 w-screen" : "";
    const hideFooter = pathname === "/search" ? "hidden" : "";
    return (
        <footer className={`body-font ${footerClass} ${hideFooter} bg-blue-100 text-gray-600`}>
            <div className="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">
                {pathname === "/login" ? console.log("Login") : console.log("Not")}
                <a
                    className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start"
                    href="/"
                >
                    {/* <img alt="logo" width={40} height={40} src="/Images/logo.png" /> */}
                    {/* <BookOpenIcon className="h-7 w-7 text-blue-600" /> */}

                    <span className="ml-3 cursor-pointer text-xl">BookAStay</span>
                </a>
                <p className="mt-4 text-sm text-gray-500 hover:text-yellow-500 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4">
                    © 2023 by Group-7.
                </p>
                <span className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
                    <a className="text-gray-500 hover:text-yellow-500" href="/">
                        <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                        >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </a>
                    <a className="ml-3 text-gray-500 hover:text-yellow-500" href="/">
                        <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                        >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                    </a>
                    <a className="ml-3 text-gray-500 hover:text-yellow-500" href="/">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                        >
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                    </a>
                    <a className="ml-3 text-gray-500 hover:text-yellow-500" href="/">
                        <svg
                            fill="currentColor"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="0"
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="none"
                                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                            ></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                    </a>
                </span>
            </div>
        </footer>
    );
};

export default Footer;

// import React from "react";

// const Footer = () => {
//     return (

//         <footer className=" body-font absolute bottom-0 w-screen bg-blue-100 text-gray-600">
//             <div className="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">
//                 <a
//                     className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start"
//                     href="/"
//                 >
//                     {/* <img alt="logo" width={40} height={40} src="/Images/logo.png" /> */}
//                     {/* <BookOpenIcon className="h-7 w-7 text-blue-600" /> */}

//                     <span className="ml-3 cursor-pointer text-xl">BookAStay</span>
//                 </a>
//                 <p className="mt-4 text-sm text-gray-500 hover:text-yellow-500 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4">
//                     © 2023 by Group-7.
//                 </p>
//                 <span className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
//                     <a className="text-gray-500 hover:text-yellow-500" href="/">
//                         <svg
//                             fill="currentColor"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             className="h-5 w-5"
//                             viewBox="0 0 24 24"
//                         >
//                             <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
//                         </svg>
//                     </a>
//                     <a className="ml-3 text-gray-500 hover:text-yellow-500" href="/">
//                         <svg
//                             fill="currentColor"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             className="h-5 w-5"
//                             viewBox="0 0 24 24"
//                         >
//                             <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
//                         </svg>
//                     </a>
//                     <a className="ml-3 text-gray-500 hover:text-yellow-500" href="/">
//                         <svg
//                             fill="none"
//                             stroke="currentColor"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             className="h-5 w-5"
//                             viewBox="0 0 24 24"
//                         >
//                             <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
//                             <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
//                         </svg>
//                     </a>
//                     <a className="ml-3 text-gray-500 hover:text-yellow-500" href="/">
//                         <svg
//                             fill="currentColor"
//                             stroke="currentColor"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="0"
//                             className="h-5 w-5"
//                             viewBox="0 0 24 24"
//                         >
//                             <path
//                                 stroke="none"
//                                 d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
//                             ></path>
//                             <circle cx="4" cy="4" r="2" stroke="none"></circle>
//                         </svg>
//                     </a>
//                 </span>
//             </div>
//         </footer>
//     );
// };

// export default Footer;
