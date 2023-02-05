import React from 'react';

function MyTrips() {
    return (
        <div>
            <div className="container">
                <div className='px-4'>
                    <p className='text-2xl sm:text-4xl font-serif py-1 sm:py-4'>My Trips</p>
                    <div class="relative overflow-x-auto shadow-md mb-4">
                        <table class="w-full text-sm text-left text-gray-500">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-300">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Destination
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Host
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Number of guests
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Amount
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Date
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b  border-gray-700 hover:bg-gray-200">
                                    <th scope="row" class="px-6 flex items-center py-4 font-medium text-gray-900 whitespace-nowrap hover:cursor-pointer">
                                        <span><img src="https://a0.muscache.com/im/pictures/448bee34-7416-4262-a02f-b39e29d7ce4f.jpg?im_w=720" className='h-8 w-8 md:h-14 md:w-14 mr-1 md:mr-2' alt="img" /></span> Lonavla, Maharashtra, India
                                    </th>
                                    <td class="px-6 py-4 text-black">
                                        Booked
                                    </td>
                                    <td class="px-6 py-4 text-black">
                                        John David
                                    </td>
                                    <td class="px-6 py-4 text-black">
                                        6
                                    </td>
                                    <td class="px-6 py-4 text-black">
                                        ₹18000
                                    </td>
                                    <td class="px-6 py-4 text-black">
                                        28/02/2023 - 30/02/2023
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <a href="#" class="font-medium text-red-600 hover:underline">Cancel</a>
                                    </td>
                                </tr>
                                <tr class="bg-white border-b  border-gray-700 hover:bg-gray-200 ">
                                    <th scope="row" class="px-6 flex items-center py-4 font-medium text-gray-900 whitespace-nowrap hover:cursor-pointer">
                                        <span><img src="https://a0.muscache.com/im/pictures/7a83743c-b733-482a-aa4a-aa28e3fa9469.jpg?im_w=720" className='h-8 w-8 md:h-14 md:w-14 mr-1 md:mr-2' alt="img" /></span> Goa, India
                                    </th>
                                    <td class="px-6 py-4 text-black">
                                        Completed
                                    </td>
                                    <td class="px-6 py-4 text-black">
                                        Marques Brownley
                                    </td>
                                    <td class="px-6 py-4 text-black">
                                        8
                                    </td>
                                    <td class="px-6 py-4 text-black">
                                        ₹16000
                                    </td>
                                    <td class="px-6 py-4 text-black">
                                        22/01/2023 - 25/01/2023
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <a href="#" class="font-medium text-blue-600 hover:underline"></a>
                                    </td>
                                </tr>
                                <tr class="bg-white border-b  border-gray-700 hover:bg-gray-200">
                                    <th scope="row" class="px-6 flex items-center py-4 font-medium text-gray-900 whitespace-nowrap hover:cursor-pointer">
                                        <span><img src="https://a0.muscache.com/im/pictures/448bee34-7416-4262-a02f-b39e29d7ce4f.jpg?im_w=720" className='h-8 w-8 md:h-14 md:w-14 mr-1 md:mr-2' alt="img" /></span> Lonavla, Maharashtra, India
                                    </th>
                                    <td class="px-6 py-4 text-black">
                                        Booked
                                    </td>
                                    <td class="px-6 py-4 text-black">
                                        John David
                                    </td>
                                    <td class="px-6 py-4 text-black">
                                        6
                                    </td>
                                    <td class="px-6 py-4 text-black">
                                        ₹18000
                                    </td>
                                    <td class="px-6 py-4 text-black">
                                        28/02/2023 - 30/02/2023
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <a href="#" class="font-medium text-red-600 hover:underline">Cancel</a>
                                    </td>
                                </tr>
                                <tr class="bg-white border-b  border-gray-700 hover:bg-gray-200 ">
                                    <th scope="row" class="px-6 flex items-center py-4 font-medium text-gray-900 whitespace-nowrap hover:cursor-pointer">
                                        <span><img src="https://a0.muscache.com/im/pictures/7a83743c-b733-482a-aa4a-aa28e3fa9469.jpg?im_w=720" className='h-8 w-8 md:h-14 md:w-14 mr-1 md:mr-2' alt="img" /></span> Goa, India
                                    </th>
                                    <td class="px-6 py-4 text-black">
                                        Completed
                                    </td>
                                    <td class="px-6 py-4 text-black">
                                        Marques Brownley
                                    </td>
                                    <td class="px-6 py-4 text-black">
                                        8
                                    </td>
                                    <td class="px-6 py-4 text-black">
                                        ₹16000
                                    </td>
                                    <td class="px-6 py-4 text-black">
                                        22/01/2023 - 25/01/2023
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <a href="#" class="font-medium text-blue-600 hover:underline"></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyTrips;