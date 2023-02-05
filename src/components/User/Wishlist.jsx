import React from 'react';
import { useNavigate } from 'react-router-dom';

function Wishlist() {
  const navigate = useNavigate();
  const gotoPropertyPage = () => {
    navigate('/propertyPage');
  }
  return (
    <div>
      <div className='container'>
        <div className='px-4'>
          <p className='text-2xl sm:text-4xl font-serif py-1 sm:py-4'>Wishlist</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
              <div onClick={gotoPropertyPage} className="flex justify-center hover:shadow-2xl hover:cursor-pointer sm:mb-7">
                <div className="rounded-lg shadow-lg bg-white border border-gray-300 hover:border-gray-500">
                  <div className="flex justify-center pt-4 px-4 object-cover">
                    <img className="rounded-lg h-64 w-72 md:h-80 md:w-80" src="https://a0.muscache.com/im/pictures/miso/Hosting-50017167/original/b4318221-a13f-47b2-9ef9-5f46e6db49a3.jpeg?im_w=720" alt="" />
                  </div>
                  <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">Selat, Indonesia</h5>
                    <p className="text-gray-700 text-base mb-4">5582KM away</p>
                    <p><span className="font-semibold">₹20,227</span> night</p>
                  </div>
                </div>
              </div>
              <div onClick={gotoPropertyPage} className="flex justify-center hover:shadow-2xl hover:cursor-pointer sm:mb-7">
                <div className="rounded-lg shadow-lg bg-white border border-gray-300 hover:border-gray-500">
                  <div className="flex justify-center pt-4 px-4 object-cover">
                    <img className="rounded-lg h-64 w-72 md:h-80 md:w-80" src="https://a0.muscache.com/im/pictures/37027874/c4247a94_original.jpg?im_w=720" alt="" />
                  </div>
                  <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">Selat, Indonesia</h5>
                    <p className="text-gray-700 text-base mb-4">5582KM away</p>
                    <p><span className="font-semibold">₹20,227</span> night</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wishlist;