import React, { useState } from 'react';
import { MdiLightAccount, TablerDeviceTablet, TablerToolsKitchen, TablerWifi } from '../../icons';
import { useNavigate } from 'react-router-dom';

function PropertyDetails() {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numGuests, setNumGuests] = useState(1);
  const navigate = useNavigate();
  const gotoBookingPage = () => {
    navigate('/propertyPage/tripBooking');
  }
  return (
    <div className='px-2 md:px-4'>
      <div className='container'>
        <div>
          <p className='text-xl md:text-3xl lg:text-4xl md:py-3 font-serif mt-2'>Veluvana Bali - Owl Bamboo House</p>
          <div className='py-3 md:py-4 sm:flex gap-3'>
            <div className='sm:w-1/2 mb-3'>
              <img className='h-auto w-full sm:rounded-l-xl sm:rounded-r-none rounded-md' src="https://a0.muscache.com/im/pictures/37027874/c4247a94_original.jpg?im_w=720" alt="PlaceImage" />
            </div>
            <div className='sm:w-1/2 flex gap-3'>
              <div>
                <img className='pb-1' src="https://a0.muscache.com/im/pictures/45a3aa2b-ce00-4068-9ebe-9f83ca281fe4.jpg?im_w=720" alt="PlaceImage" />
                <img className='pt-1' src="https://a0.muscache.com/im/pictures/f474dfbe-557a-4d07-8d6e-76aba506b5a6.jpg?im_w=720" alt="PlaceImage" />
              </div>
              <div>
                <img className='sm:rounded-tr-xl pb-1' src="https://a0.muscache.com/im/pictures/45a3aa2b-ce00-4068-9ebe-9f83ca281fe4.jpg?im_w=720" alt="PlaceImage" />
                <img className='sm:rounded-br-xl pt-1' src="https://a0.muscache.com/im/pictures/f474dfbe-557a-4d07-8d6e-76aba506b5a6.jpg?im_w=720" alt="PlaceImage" />
              </div>
            </div>
          </div>
        </div>
        <div className='sm:flex gap-3'>
          <div className='sm:w-2/3'>
            <div>
              <p className='text-xl font-semibold'>Treehouse hosted by Veluvana</p>
              <p>11 guests . 2 bedrooms . 2 beds . 2 bathrooms</p>
              <hr className='my-3 w-5/6' />
            </div>
            <div>
              <p className='text-lg'>Dive right in</p>
              <p>This is one of the few places in the area with a pool.</p>
              <hr className='my-3 w-5/6' />
            </div>
            <p className='text-lg font-medium'>What this place offers</p>
            <div className='flex'>
              <div className='w-1/2'>
                <div className='flex'>
                  <span><TablerToolsKitchen className="text-2xl my-5" /></span>
                  <span className='my-5 ml-4'>Kitchen</span>
                </div>
                <div className='flex'>
                  <span><TablerWifi className="text-2xl mt-2 mb-5" /></span>
                  <span className='mt-1.5 mb-5 ml-4'>Wifi</span>
                </div>
                <div className='flex'>
                  <span><TablerDeviceTablet className="text-2xl mt-2 mb-5" /></span>
                  <span className='mt-1.5 mb-5 ml-4'>Television</span>
                </div>
              </div>
              <div className='w-1/2'>
                <div className='flex'>
                  <span><TablerToolsKitchen className="text-2xl my-5" /></span>
                  <span className='my-5 ml-4'>Kitchen</span>
                </div>
                <div className='flex'>
                  <span><TablerWifi className="text-2xl mt-2 mb-5" /></span>
                  <span className='mt-1.5 mb-5 ml-4'>Wifi</span>
                </div>
                <div className='flex'>
                  <span><TablerDeviceTablet className="text-2xl mt-2 mb-5" /></span>
                  <span className='mt-1.5 mb-5 ml-4'>Television</span>
                </div>
              </div>
            </div>
            <hr className='my-3 w-5/6' />
          </div>
          <div className='sm:w-1/3 m-1 p-3 sm:p-0 border border-gray-400 hover:border-gray-500 rounded-lg hover:shadow-lg'>
            <p className='flex justify-center p-2 text-2xl'><span className='font-semibold pr-1'>₹20,227</span>night</p><hr className='my-1' />
            <form className='flex flex-col items-center pt-2'>
              <p className='text-2xl font-medium pt-3 pb-7'>Select trip date</p>
              <div className='flex flex-col gap-7 sm:pb-6'>
                <div className="form-group text-xl border border-gray-300 hover:border-gray-500 rounded-md p-2">
                  <label htmlFor="check-in-date">Check-in Date : </label>
                  <input
                    type="date"
                    className="form-control"
                    value={checkInDate}
                    onChange={(event) => setCheckInDate(event.target.value)}
                    required
                  />
                </div>
                <div className="form-group text-xl border border-gray-300 hover:border-gray-500 rounded-md p-2">
                  <label htmlFor="check-out-date">Check-out Date : </label>
                  <input
                    type="date"
                    className="form-control"
                    value={checkOutDate}
                    onChange={(event) => setCheckOutDate(event.target.value)}
                    required
                  />
                </div>
                <div className="form-group text-xl border border-gray-300 hover:border-gray-500 rounded-md p-2">
                  <label htmlFor="num-guests">Number of Guests : </label>
                  <input
                    type="number"
                    className="form-control w-20"
                    value={numGuests}
                    onChange={(event) => setNumGuests(event.target.value)}
                    min="1"
                    required
                  />
                </div>
                <button onClick={gotoBookingPage} className='text-2xl sm:text-3xl py-2 font-medium font-serif text-white bg-slate-800 rounded-md'>Reserve</button>
                <p className='flex justify-center text-xl sm:text-2xl font-semibold'>Total - ₹20,227</p>
              </div>
            </form>
          </div>
        </div>
        <p className='text-2xl font-medium sm:w-1/2 my-5 sm:-mt-48 lg:-mt-28'>1 Review</p>
        <div className='sm:w-1/2 mb-8'>
          <div className='flex'>
            <MdiLightAccount className="border border-gray-800 rounded-full pb-1" />
            <div className='flex flex-col pl-2'>
              <div className='text-xl'>Name</div>
              <div>1 September 2022</div>
            </div>
          </div>
          <div className='mt-2 text-lg'>
            <p className='leading-8'>One of the best Properties i have stayed at ,
              The ambience was so calming and peaceful
              We went when there were light rain showers so the pool water was too chilled , it was one amazing experience staying at...
              <span className='underline hover:cursor-pointer text-sm'>show more</span>
              <span></span>
            </p>
          </div>
        </div>
        <div className='sm:flex sm:gap-9'>
          <div className='sm:w-1/2 mb-8'>
            <div className='flex'>
              <MdiLightAccount className="border border-gray-800 rounded-full pb-1" />
              <div className='flex flex-col pl-2'>
                <div className='text-xl font-bold'>Hosted by Veluvana</div>
                <div>Joined in September 2021</div>
              </div>
            </div>
            <div className='mt-2 text-lg'>
              <p className='leading-8'>One of the best Properties that you can stay and it will be a great experience for you.
                <span></span>
              </p>
            </div>
          </div>
          <div className='sm:w-1/2 mb-8'>
            <p className='text-2xl font-medium'>Things to know</p>
            <p className='text-xl'>House rules</p>
            <p>Check in : 2:00pm - 12am</p>
            <p>Check out before 11:00am</p>
            <p>Maximum guests : 11</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetails;