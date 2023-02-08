import React from 'react';

function CustomerProperties() {
    return (
        <div>
            <div class="p-4 sm:ml-60 mt-2">
                <div class="p-4 rounded-lg dark:border-gray-700 mt-14">
                    <div>
                        <div className="container">
                            <div className='px-4'>
                                <p className='text-2xl sm:text-4xl font-serif py-1 sm:py-4'>Akhin's Properties</p>
                                <div class="relative overflow-x-auto shadow-md mb-4">
                                    <table class="w-full text-sm text-left text-gray-500">
                                        <thead class="text-xs text-gray-700 uppercase bg-gray-300">
                                            <tr>
                                                <th scope="col" class="px-6 py-3">
                                                    Property
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Booking Status
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    MAX. GUESTS
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    BEDROOMS
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    BEDS
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    BATHROOMS
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Amount
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    LOCATION
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="bg-white border-b  border-gray-700 hover:bg-gray-200">
                                                <th scope="row" class="px-6 flex items-center py-4 font-medium text-gray-900 whitespace-nowrap hover:cursor-pointer">
                                                    <span><img src="https://a0.muscache.com/im/pictures/448bee34-7416-4262-a02f-b39e29d7ce4f.jpg?im_w=720" className='h-8 w-8 md:h-14 md:w-14 mr-1 md:mr-2' alt="img" /></span> We are welcoming you
                                                </th>
                                                <td class="px-6 py-4 text-black">
                                                    Not booked
                                                </td>
                                                <td class="px-6 py-4 text-black">
                                                    8
                                                </td>
                                                <td class="px-6 py-4 text-black">
                                                    2
                                                </td>
                                                <td class="px-6 py-4 text-black">
                                                    2
                                                </td>
                                                <td class="px-6 py-4 text-black">
                                                    2
                                                </td>
                                                <td class="px-6 py-4 text-black">
                                                    ₹22000
                                                </td>
                                                <td class="px-6 py-4 text-right">
                                                    Kozhikode, India
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b  border-gray-700 hover:bg-gray-200 ">
                                                <th scope="row" class="px-6 flex items-center py-4 font-medium text-gray-900 whitespace-nowrap hover:cursor-pointer">
                                                    <span><img src="https://a0.muscache.com/im/pictures/7a83743c-b733-482a-aa4a-aa28e3fa9469.jpg?im_w=720" className='h-8 w-8 md:h-14 md:w-14 mr-1 md:mr-2' alt="img" /></span> Have a best vacation
                                                </th>
                                                <td class="px-6 py-4 text-black">
                                                    Booked
                                                </td>
                                                <td class="px-6 py-4 text-black">
                                                    6
                                                </td>
                                                <td class="px-6 py-4 text-black">
                                                    1
                                                </td>
                                                <td class="px-6 py-4 text-black">
                                                    2
                                                </td>
                                                <td class="px-6 py-4 text-black">
                                                    1
                                                </td>
                                                <td class="px-6 py-4 text-black">
                                                    ₹20000
                                                </td>
                                                <td class="px-6 py-4 text-right">
                                                    Kozhikode, India
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomerProperties;