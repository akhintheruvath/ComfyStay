import React from 'react'

function TripConfirmation() {
  return (
    <div>
      <div className='container'>
        <div className='sm:flex sm:gap-10 md:gap-16 mx-5 my-4'>
          <div className='sm:w-1/2 mb-4 sm:mb-0'>
            <p className='text-xl sm:text-2xl font-medium my-1 sm:my-2 md:my-3'>Your reservation is confirmed. Have a great experience!</p>
            <p className='text-xl sm:text-2xl italic mb-3'>You are going to Lonavla, India</p>
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-26934863/original/bb76077c-793e-4eb6-b7f4-7d3f7066d345.jpeg?im_w=720" className='rounded-md md:rounded-lg shadow-md' alt="" />
            <div className='flex justify-between my-4'>
              <div>
                <p className='text-lg sm:text-xl font-medium'>22 February 2023</p>
                <p className='text-md sm:text-lg font-medium'>Check-in time is 4pm - 6pm</p>
              </div>
              <div>
                <p className='text-lg sm:text-xl font-medium'>25 February 2023</p>
                <p className='text-md sm:text-lg font-medium'>Check-out time is 9am - 11am</p>
              </div>
            </div>
          </div>
          <div className='sm:w-1/2'>
            <hr className='mt-2 sm:mt-4 sm:hidden' />
            <h2 className='text-xl font-medium sm:text-2xl sm:font-semibold my-1 sm:my-2 md:my-3'>Address</h2>
            <p className='text-lg sm:text-xl'>ABCD House, 123 main street ,Lonavla, Maharashtra, India</p>
            <hr className='mt-2 sm:mt-4' />
            <h2 className='text-xl font-medium sm:text-2xl sm:font-semibold my-1 sm:my-2 md:my-3'>Guests</h2>
            <p className='text-lg sm:text-xl'>4</p>
            <hr className='mt-2 sm:mt-4' />
            <h2 className='text-xl font-medium sm:text-2xl sm:font-semibold my-1 sm:my-2 md:my-3'>Amount</h2>
            <p className='text-lg sm:text-xl'>₹20000</p>
            <hr className='mt-2 sm:mt-4' />
            <h2 className='text-xl font-medium sm:text-2xl sm:font-semibold my-1 sm:my-2 md:my-3'>Reservation ID</h2>
            <p className='text-lg sm:text-xl'>abcdefg1234</p>
            <hr className='mt-2 sm:mt-4' />
            <h2 className='text-xl font-medium sm:text-2xl sm:font-semibold my-1 sm:my-2 md:my-3'>Host Details</h2>
            <p className='text-lg sm:text-xl'>Akshay is your host. Contact Akshay to coordinate arrival time and key exchange.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TripConfirmation;