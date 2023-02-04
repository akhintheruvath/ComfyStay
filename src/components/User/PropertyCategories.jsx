import React from 'react';

function PropertyCategories() {
  return (
    <div>
        <div className="container">
            <div className='flex gap-2 sm:gap-0 justify-between mt-6 mx-4 lg:px-5 sm:py-3 lg:py-4 overflow-x-auto lg:border lg:border-gray-300 rounded-lg'>
                <p className="font-bold text-md sm:text-xl hover:cursor-pointer px-1">Home</p>
                <p className="font-bold text-md sm:text-xl hover:cursor-pointer px-1">Flat/Apartment</p>
                <p className="font-bold text-md sm:text-xl hover:cursor-pointer px-1">Cabin</p>
                <p className="font-bold text-md sm:text-xl hover:cursor-pointer px-1">Cave</p>
                <p className="font-bold text-md sm:text-xl hover:cursor-pointer px-1">Hotel</p>
                <p className="font-bold text-md sm:text-xl hover:cursor-pointer px-1">Tent</p>
                <p className="font-bold text-md sm:text-xl hover:cursor-pointer px-1">Tiny Home</p>
                <p className="font-bold text-md sm:text-xl hover:cursor-pointer px-1">Tree House</p>
            </div>
        </div>
    </div>
  )
}

export default PropertyCategories;