import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserHeader() {
    const [showModal, setShowModal] = useState(false);
    const [showOtpModal,setShowOtpModal] = useState(false);
    const [inputValue,setInputValue] = useState('');
    const [errorMessage,setErrorMessage] = useState('');
    const navigate = useNavigate();
    const gotoLandingPage = () => {
        navigate('/');
    }
    const gotoAddHomeDetailsPage = () => {
        navigate('/addYourHome');
    }
    const gotoWishlistsPage = () => {
        navigate('/wishlist');
    }

    const handleShowModal = () => {
        setShowModal(!showModal);
        setInputValue('');
        setErrorMessage('');
    };

    const onSubmit = (e) => {
        let len = inputValue.length;
        e.preventDefault();
        if(inputValue==''||len<10){
            setErrorMessage('Enter your 10 digit phone number first');
        }else{
            setShowModal(!showModal);
            setShowOtpModal(!showOtpModal);
        }
    };

    const closeOtpModal = (e) => {
        setShowOtpModal(!showOtpModal);
    }

    const handleValue = (e) => {
        setInputValue(e.target.value);
    }
    return (
        <div>
            <nav class="bg-white border-gray-500 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
                <div class="container flex flex-wrap items-center justify-between mx-auto">
                    <button onClick={gotoLandingPage} class="flex items-center">
                        <span class="self-center text-xl md:text-4xl font-medium whitespace-nowrap dark:text-white font-mono select-none">COMFYSTAY</span>
                    </button>
                    <div class="flex md:order-2">
                        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Search</span>
                        </button>
                        <div class="relative hidden md:block">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Search icon</span>
                            </div>
                            <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                        </div>
                        <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                            <span class="sr-only">Open menu</span>
                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                        <div class="relative mt-3 md:hidden">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                        </div>
                        <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <button onClick={gotoAddHomeDetailsPage} class="block md:text-lg py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Add Your Home</button>
                            </li>
                            <li>
                                <button onClick={handleShowModal} href="#" class="block py-2 pl-3 pr-4 md:text-lg text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Login</button>
                            </li>
                            <li>
                            <button onClick={gotoWishlistsPage} href="#" class="block py-2 pl-3 pr-4 md:text-lg text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Wishlist</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div>
                {showModal && (
                    <div className="fixed px-4 top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 mt-8">
                        <div className="mx-auto my-20 max-w-sm bg-white p-10 rounded-lg">
                            <form>
                                <h2 className="text-lg font-medium mb-4">Log in OR Sign up</h2>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Enter your phone number</label>
                                    <input type="number" value={inputValue} onChange={handleValue} placeholder="9876543210" className="w-full border border-gray-400 p-2 rounded-lg" />
                                    {errorMessage&&<p className="text-red-500">{errorMessage}</p>}
                                </div>
                                <div className="flex justify-between">
                                    <button className="bg-gray-400 text-gray-700 py-2 px-4 rounded-full" onClick={handleShowModal}>Cancel</button>
                                    <button className="bg-blue-500 text-white py-2 px-4 rounded-full" type="button" onClick={onSubmit} >Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
            <div>
                {showOtpModal && (
                    <div className="fixed px-4 top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 mt-8">
                        <div className="mx-auto my-20 max-w-sm bg-white p-10 rounded-lg">
                            <form>
                                <h2 className="text-lg font-medium mb-4">Submit OTP</h2>
                                <div className="mb-4">
                                    <input placeholder="Enter the OTP" type="number" className="w-full border border-gray-400 p-2 rounded-lg" required />
                                </div>
                                <div className="flex justify-between">
                                    <button className="bg-gray-400 text-gray-700 py-2 px-4 rounded-full" onClick={closeOtpModal}>Cancel</button>
                                    <button className="bg-blue-500 text-white py-2 px-4 rounded-full" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default UserHeader;