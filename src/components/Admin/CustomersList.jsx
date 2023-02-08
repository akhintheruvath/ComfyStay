import React from 'react';
import { useNavigate } from 'react-router-dom';

function CustomersList() {
    const navigate = useNavigate();
    const gotoUserPropertiesPage = () => {
        navigate('/admin/customers/customerProperties');
    }
    return (
        <div>
            <div class="p-4 sm:ml-60 mt-2">
                <div class="p-4 rounded-lg dark:border-gray-700 mt-14">
                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        #
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Block/Unblock
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Properties
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Trips
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        1
                                    </th>
                                    <td class="px-6 py-4 font-medium dark:text-white">
                                        Akhin T
                                    </td>
                                    <td class="px-6 py-4 font-medium dark:text-white">
                                        <button className='bg-red-500 px-3 py-2 rounded text-white'>Block</button>
                                    </td>
                                    <td class="px-6 py-4 font-medium dark:text-white">
                                        <button onClick={gotoUserPropertiesPage} className='underline hover:cursor-pointer'>3</button>
                                    </td>
                                    <td class="px-6 py-4 font-medium dark:text-white">
                                        15
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomersList;