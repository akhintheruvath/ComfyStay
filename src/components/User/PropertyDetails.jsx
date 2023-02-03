import React from 'react';
import { TablerToolsKitchen, TablerWifi } from '../../icons';

function PropertyDetails() {
  return (
    <div className='px-2 md:px-4'>
      <div className='container'>
        <div>
          <p className='text-xl md:text-3xl lg:text-4xl md:py-3 font-semibold mt-2'>Veluvana Bali - Owl Bamboo House</p>
          <div className='py-3 md:py-4 sm:flex gap-3'>
            <div className='sm:w-1/2 mb-3'>
              <img className='h-auto w-full sm:rounded-l-xl sm:rounded-r-none rounded-md' src="https://a0.muscache.com/im/pictures/4f70b681-a792-4530-8c52-f2a8d262942d.jpg?im_w=1200" alt="PlaceImage" />
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
        <div>
          <div className='sm:w-2/3'>
            <p className='text-xl'>Treehouse hosted by Veluvana</p>
            <p>11 guests . 2 bedrooms . 2 beds . 2 bathrooms</p>
            <hr className='my-3' />
          </div>
          <div className='sm:w-2/3'>
            <p className='text-lg'>Dive right in</p>
            <p>This is one of the few places in the area with a pool.</p>
            <hr className='my-3' />
          </div>
          <div className='sm:w-2/3'>
            <p className='text-lg'>What this place offers</p>
            <div className='flex'>
              <span><TablerToolsKitchen className="text-2xl my-5" /></span>
              <span className='my-5 ml-4'>Kitchen</span>
            </div>
            <div className='flex'>
              <span><TablerWifi className="text-2xl mt-2 mb-5" /></span>
              <span className='mt-1.5 mb-5 ml-4'>Wifi</span>
            </div>
            <hr className='my-3' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetails;