import React from 'react';
import { MdiLightAccount, TablerStarFilled } from '../../icons';

function UserProfile() {
    return (
        <div>
            <div className='container'>
                <div className='sm:flex my-7'>
                    <div className='mx-6 md:mr-16'>
                        <div className='flex flex-col items-center border border-gray-400 rounded-lg p-4 sm:p-2 md:p-6 shadow-lg'>
                            <MdiLightAccount className="text-xl sm:text-2xl border border-gray-500 rounded-full pb-2 bg-gray-100 my-2" />
                            <p className='underline hover:cursor-pointer'>Update photo</p>
                            <div className='pt-3'>
                                <p className='text-lg sm:text-xl'>Name:Name</p>
                                <p className='text-lg sm:text-xl'>Mobile:Mobile</p>
                                <p className='text-lg sm:text-xl'>Email:Email</p>
                                <p className='text-lg sm:text-xl'>Address:Address</p>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-5/12 leading-10 px-8 mt-6 sm:mt-0'>
                        <p className='text-xl sm:text-2xl lg:text-3xl font-semibold'>Hi, Name</p>
                        <p className='text-md'>Joined in 2023</p>
                        <p className='underline hover:cursor-pointer mb-2'>Edit profile</p>
                        <div className='flex'>
                            <TablerStarFilled className='text-2xl mr-2 mt-1' />
                            <p className='text-xl sm:text-2xl font-semibold'>1 Review(s)</p>
                        </div>
                        <p className='leading-8 mt-2 text-lg'>One of the best Properties i have stayed at ,
                            The ambience was so calming and peaceful
                            We went when there were light rain showers so the pool water was too chilled , it was one amazing experience staying at...
                            <span className='underline hover:cursor-pointer text-sm'>show more</span>
                            <span></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;