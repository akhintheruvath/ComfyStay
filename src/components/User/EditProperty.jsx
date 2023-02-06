import React, { useState } from 'react';
import { SimpleLineIconsMinus, SimpleLineIconsPlus } from '../../icons';

function EditProperty() {
    const [imageEdit, setImageEdit] = useState('Edit Images');
    const [imageEditButton, setImageEditButton] = useState(false);
    const [guestsCount, setGuestsCount] = useState(1);
    const [title, setTitle] = useState("Initial Value");
    const [titleEditable, setTitleEditable] = useState(false);
    let propertyTitle;

    const handleEditClick = () => {
        setTitleEditable(true);
        propertyTitle = title;
        console.log(propertyTitle);
    };

    const handleSaveClick = () => {
        setTitleEditable(false);
    };

    const handleCancelClick = () => {
        console.log(propertyTitle);
        setTitle(propertyTitle);
        console.log(title);
        setTitleEditable(false);
    };

    const imageEditOption = () => {
        if (imageEditButton) setImageEdit('Edit Images');
        else setImageEdit('Cancel');
        setImageEditButton(!imageEditButton);
    }
    return (
        <div>
            <div className='container'>
                <div className='px-4'>
                    <div>
                        <div className='flex justify-between'>
                            <p className='text-2xl font-medium my-3'>Photos</p>
                            <p onClick={imageEditOption} className='text-lg my-3 underline hover:cursor-pointer'>{imageEdit}</p>
                        </div>
                        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-4'>
                            <div>
                                <img className='rounded' src="https://a0.muscache.com/im/pictures/monet/Luxury-602690453390608880/original/7d13b8b5-b1b4-4b51-9b60-71eb6b1664da?im_w=720" alt="" />
                                {imageEditButton && <button className='underline'>Edit</button>}
                            </div>
                            <div>
                                <img className='rounded' src="https://a0.muscache.com/im/pictures/monet/Luxury-602690453390608880/original/7d13b8b5-b1b4-4b51-9b60-71eb6b1664da?im_w=720" alt="" />
                                {imageEditButton && <button className='underline'>Edit</button>}
                            </div>
                            <div>
                                <img className='rounded' src="https://a0.muscache.com/im/pictures/monet/Luxury-602690453390608880/original/7d13b8b5-b1b4-4b51-9b60-71eb6b1664da?im_w=720" alt="" />
                                {imageEditButton && <button className='underline'>Edit</button>}
                            </div>
                            <div>
                                <img className='rounded' src="https://a0.muscache.com/im/pictures/monet/Luxury-602690453390608880/original/7d13b8b5-b1b4-4b51-9b60-71eb6b1664da?im_w=720" alt="" />
                                {imageEditButton && <button className='underline'>Edit</button>}
                            </div>
                            <div>
                                <img className='rounded' src="https://a0.muscache.com/im/pictures/monet/Luxury-602690453390608880/original/7d13b8b5-b1b4-4b51-9b60-71eb6b1664da?im_w=720" alt="" />
                                {imageEditButton && <button className='underline'>Edit</button>}
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-2/3'>
                        <p className='text-2xl font-medium my-3'>Property basics</p>
                        <div className='mb-4'>
                            <div className='flex justify-between'>
                                <p className='text-xl'>Property title</p>
                                <button onClick={handleEditClick} className='text-lg underline'>Edit</button>
                            </div>
                            {titleEditable ? (
                                <div>
                                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                                    <button onClick={handleSaveClick} className="bg-blue-400 px-2 py-1 text-white rounded mr-2" >Save</button>
                                    <button onClick={handleCancelClick} className="px-2 py-1 border border-gray-300 rounded" >Cancel</button>
                                </div>
                            ) : (
                                <div>
                                    <p>{title}</p>
                                </div>
                            )}
                        </div>
                        <hr className='mb-3' />
                        <div className='mb-4'>
                            <div className='flex justify-between'>
                                <p className='text-xl'>Property Description</p>
                                <button className='text-lg underline'>Edit</button>
                            </div>
                            <div>
                                <p>Reconnect with loved ones in this family-friendly place.</p>
                            </div>
                        </div>
                        <hr className='mb-3' />
                        <div className='flex justify-between mb-3'>
                            <div className='text-xl'>Number of guests</div>
                            <div className='flex gap-3'>
                                <SimpleLineIconsMinus onClick={() => { if (guestsCount > 1) setGuestsCount(guestsCount - 1); console.log(guestsCount) }} />
                                <p className='text-2xl select-none'>{guestsCount}</p>
                                <SimpleLineIconsPlus onClick={() => { if (guestsCount < 12) setGuestsCount(guestsCount + 1); console.log(guestsCount) }} />
                            </div>
                        </div>
                        <hr className='mb-3' />
                        <div className='mb-4'>
                            <div>
                                <p className='text-2xl font-medium my-3'>Amentities</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='text-lg'>Wifi</p>
                                <button className='text-lg underline'>Edit</button>
                            </div>
                        </div>
                        <hr className='mb-3' />
                        <p className='text-2xl font-medium my-3'>Location</p>
                        <div className='mb-4'>
                            <div>
                                <p className='text-xl'>Address</p>
                            </div>
                            <div className='flex justify-between leading-6'>
                                <input value="Kozhikode, Kerala, India" />
                                <button className='text-lg underline'>Edit</button>
                            </div>
                        </div>
                        <hr className='mb-3' />
                        <div className='mb-4'>
                            <div>
                                <p className='text-2xl font-medium my-3'>Property and Rooms</p>
                            </div>
                            <p className='text-xl'>Property type</p>
                            <div className='flex justify-between'>
                                <p>Home</p>
                                <button className='text-lg underline'>Edit</button>
                            </div>
                            <div className='flex justify-between'>
                                <p>Listing type : <span>Entire Home/flat</span></p>
                                <button className='text-lg underline'>Edit</button>
                            </div>
                            <hr className='my-3' />
                            <p className='text-xl'>Rooms and Spaces</p>
                            <div className='flex justify-between'>
                                <p>Bedrooms : <span>1</span></p>
                                <button className='text-lg underline'>Edit</button>
                            </div>
                            <div className='flex justify-between'>
                                <p>Beds : <span>2</span></p>
                                <button className='text-lg underline'>Edit</button>
                            </div>
                            <div className='flex justify-between'>
                                <p>Bathrooms : <span>1</span></p>
                                <button className='text-lg underline'>Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProperty;