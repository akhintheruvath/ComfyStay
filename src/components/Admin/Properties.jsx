import React from 'react';

function Properties() {
    return (
        <div>
            <div class="p-4 sm:ml-64 mt-4">
                <div class="p-4 rounded-lg dark:border-gray-700 mt-10">
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <div>
                            <p className='text-2xl sm:text-3xl font-serif py-3'>Properties List</p>
                        </div>
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Property
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Host
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Max.guests
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Price/person
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Location
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <th scope="row" class="px-6 flex items-center py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap hover:cursor-pointer">
                                        <span><img src="https://a0.muscache.com/im/pictures/448bee34-7416-4262-a02f-b39e29d7ce4f.jpg?im_w=720" className='h-8 w-8 md:h-14 md:w-14 mr-1 md:mr-2' alt="img" /></span> We are welcoming you
                                    </th>
                                    <td class="px-6 py-4 text-black dark:text-white">
                                        Not booked
                                    </td>
                                    <td class="px-6 py-4 text-black dark:text-white">
                                        John David
                                    </td>
                                    <td class="px-6 py-4 text-black dark:text-white">
                                        6
                                    </td>
                                    <td class="px-6 py-4 text-black dark:text-white">
                                        3000
                                    </td>
                                    <td class="px-6 py-4 text-black dark:text-white">
                                        Kozhikode, India
                                    </td>
                                    <td class="px-6 py-4 text-black dark:text-white">
                                        <button className='bg-red-500 p-2 rounded'>Disable</button>
                                    </td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <th scope="row" class="px-6 flex items-center py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap hover:cursor-pointer">
                                        <span><img src="https://a0.muscache.com/im/pictures/448bee34-7416-4262-a02f-b39e29d7ce4f.jpg?im_w=720" className='h-8 w-8 md:h-14 md:w-14 mr-1 md:mr-2' alt="img" /></span> We are welcoming you
                                    </th>
                                    <td class="px-6 py-4 text-black dark:text-white">
                                        Not booked
                                    </td>
                                    <td class="px-6 py-4 text-black dark:text-white">
                                        John David
                                    </td>
                                    <td class="px-6 py-4 text-black dark:text-white">
                                        6
                                    </td>
                                    <td class="px-6 py-4 text-black dark:text-white">
                                        3000
                                    </td>
                                    <td class="px-6 py-4 text-black dark:text-white">
                                        Kozhikode, India
                                    </td>
                                    <td class="px-6 py-4 text-black dark:text-white">
                                        <button className='bg-red-500 p-2 rounded'>Disable</button>
                                    </td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <th scope="row" class="px-6 flex items-center py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap hover:cursor-pointer">
                                        <span><img src="https://a0.muscache.com/im/pictures/448bee34-7416-4262-a02f-b39e29d7ce4f.jpg?im_w=720" className='h-8 w-8 md:h-14 md:w-14 mr-1 md:mr-2' alt="img" /></span> We are welcoming you
                                    </th>
                                    <td class="px-6 py-4 text-black dark:text-white">
                                        Not booked
                                    </td>
                                    <td class="px-6 py-4 text-black dark:text-white">
                                        John David
                                    </td>
                                    <td class="px-6 py-4 text-black dark:text-white">
                                        6
                                    </td>
                                    <td class="px-6 py-4 text-black dark:text-white">
                                        3000
                                    </td>
                                    <td class="px-6 py-4 text-black dark:text-white">
                                        Kozhikode, India
                                    </td>
                                    <td class="px-6 py-4 text-black dark:text-white">
                                        <button className='bg-red-500 p-2 rounded'>Disable</button>
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

export default Properties;