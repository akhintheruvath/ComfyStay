import React from 'react';
import { HeroiconsOutlineChevronLeft } from '../../icons';
import { useNavigate } from 'react-router-dom';

function TripBooking() {
  const navigate = useNavigate();
  const goBackToPropertyDetailsPage = () => {
    navigate('/propertyPage');
  }
  return (
    <div>
      <div className='container'>
        <div className='mx-4 my-2'>
          <div className='flex my-2 sm:my-3 md:my-4 lg:my-5'>
            <div>
              <HeroiconsOutlineChevronLeft onClick={goBackToPropertyDetailsPage} className='py-1 hover:bg-gray-100 hover:rounded-full hover:cursor-pointer mr-2' />
            </div>
            <div>
              <p className='text-xl sm:text2xl md:text-3xl font-serif pt-2 sm:py-0'>Confirm and pay</p>
            </div>
          </div>
          <div className='sm:flex px-2 mb-1'>
            <div className='sm:w-1/2'>
              <h2 className='text-lg sm:text-xl md:text-2xl font-medium mb-3'>Your trip</h2>
              <div>
                <p className='text-lg md:text-xl font-medium my-1'>Dates</p>
                <div className='flex mb-2'>
                  <p className='text-md md:text-lg'>24-30 May</p>
                  <button className='underline text-md ml-14'>Edit</button>
                </div>
                <p className='text-lg md:text-xl font-medium mt-1 my-1'>Guests</p>
                <div className='flex mb-2'>
                  <p className='text-md md:text-lg'>1 guest</p>
                  <button className='underline text-md ml-20'>Edit</button>
                </div>
              </div>
            </div>
            <div className='sm:w-1/2 sm:flex sm:justify-start mt-5 sm:mt-0'>
              <div>
                <div className='border border-gray-400 rounded-lg hover:shadow-lg lg:w-2/3 px-3'>
                  <div className='flex'>
                    <div className='py-3'>
                      <img src="https://a0.muscache.com/im/pictures/37027874/c4247a94_original.jpg?im_w=720" className='rounded-md' alt="" />
                    </div>
                    <div className='px-2 py-3 flex flex-col justify-between'>
                      <div>
                        <p>Treehouse hosted by Veluvana</p>
                        <p className='text-lg'>Veluvana Bali - Owl Bamboo House</p>
                      </div>
                      <div>Rating:4.95(37reviews)</div>
                    </div>
                  </div>
                  <hr className='pb-3' />
                  <div>
                    <p className='text-lg sm:text-xl md:text-2xl font-semibold'>Price Details</p>
                    <div className='flex justify-between my-3'>
                      <div><p className='text-lg'>₹20227 x 6 nights</p></div>
                      <div className='text-xl font-semibold'>₹121362</div>
                    </div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div className='lg:w-2/3 flex justify-center my-6'>
                  <button className='w-full text-xl md:text-2xl font-semibold border border-blue-700 px-10 py-2 sm:py-3 rounded-full hover:shadow-xl font-serif'>Confirm and pay</button>
                </div>
              </div>
            </div>
          </div>
          <div className='mb-5'>
            <p className='text-xl sm:text-2xl font-medium mb-2'>Cancellation policy</p>
            <p className='text-lg'>Free cancellation before <span>23 May</span>. Cancel before check-in on <span>24 May</span> for a partial refund.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TripBooking;