import React from 'react'

function AdminDashboard() {
    return (
        <div>
            <div class="p-4 sm:ml-64 mt-4">
                <div class="p-4 rounded-lg dark:border-gray-700 mt-14">
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div class="flex flex-col justify-center items-center h-40 rounded-lg bg-gray-100 shadow-lg border border-gray-300">
                            <p className='text-black md:2xl lg:text-4xl font-semibold'>1000</p>
                            <p className='text-black md:text-xl mt-5 font-semibold'>Customers</p>
                        </div>
                        <div class="flex flex-col justify-center items-center h-40 rounded-lg bg-gray-100 shadow-lg border border-gray-300">
                            <p className='text-black md:2xl lg:text-4xl font-semibold'>400</p>
                            <p className='text-black md:text-xl mt-5 font-semibold'>Trips</p>
                        </div>
                        <div class="flex flex-col justify-center items-center h-40 rounded-lg bg-gray-100 shadow-lg border border-gray-300">
                            <p className='text-black md:2xl lg:text-4xl font-semibold'>300</p>
                            <p className='text-black md:text-xl mt-5 font-semibold'>Properties</p>
                        </div>
                        <div class="flex flex-col justify-center items-center h-40 rounded-lg bg-gray-100 shadow-lg border border-gray-300">
                            <p className='text-black md:2xl lg:text-4xl font-semibold'>₹100000</p>
                            <p className='text-black md:text-xl mt-5 font-semibold'>Revenue</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard;