import React from 'react';

function AddHome() {
    return (
        <div>
            <div className='container'>
                <div className='my-5 flex justify-center'>
                    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm border border-gray-400">
                        <form>
                            <div className="form-group mb-6">
                                <label for="propertyType" className="form-label inline-block mb-2 text-gray-700">Which of these best describes your place</label>
                                <select name='propertyType' className='border border-gray-300 rounded pl-2 pr-56 py-2'>
                                    <option value="Home">Home</option>
                                    <option value="Flat">Flat</option>
                                    <option value="Cabin">Cabin</option>
                                    <option value="Cave">Cave</option>
                                    <option value="Hotel">Hotel</option>
                                    <option value="Tent">Tent</option>
                                    <option value="Apartment">Apartment</option>
                                    <option value="Tree House">Tree House</option>
                                </select>
                            </div>
                            <div className="form-group mb-6">
                                <label for="state" className="form-label inline-block mb-2 text-gray-700">In which state your place located?</label>
                                <select name='propertyType' className='border border-gray-300 rounded pl-1 pr-44 py-2'>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="West Bengal">West Bengal</option>
                                </select>
                            </div>
                            <button type="submit" className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add Home</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddHome;