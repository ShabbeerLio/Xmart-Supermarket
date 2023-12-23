import React, { useState } from 'react';
import "./Address.css";

const Address = () => {
    const addresses = [
        {
            name: 'Shabbeer',
            type: 'Home',
            address: '123 Main St',
            locality: 'Example Locality',
            city: 'Example City',
            pincode: '12345',
            state: 'Example State',
            mobileNumber: '12345678906785',
        },
        {
            name: 'Shabbeer',
            type: 'office',
            address: '123 Main St',
            locality: 'Example Locality',
            city: 'Example City',
            pincode: '12345',
            state: 'Example State',
            mobileNumber: '12345678906785',
        },
        {
            name: 'Shabbeer',
            type: 'work',
            address: '123 Main St',
            locality: 'Example Locality',
            city: 'Example City',
            pincode: '12345',
            state: 'Example State',
            mobileNumber: '1234567890',
        },
        // Add more addresses as needed
    ];
    const [selectedAddress, setSelectedAddress] = useState(0);

    const handleAddressClick = (index) => {
        setSelectedAddress(index);
    };

    const defaultAddress = addresses[0];

    return (
        <div className='Address'>
            <div className="Address-title">
                <h3>Saved Addresses</h3>
                <div className="Address-title-buttons">
                    <p>+ Add new address</p>
                </div>
            </div>
            <h5>Default Address</h5>
            <div className={`profile-address-box ${selectedAddress === 0 ? 'selected' : ''}`} onClick={() => handleAddressClick(0)}>
                <div className="profile-address-box-head">
                    <h3>{defaultAddress.name}</h3>
                    <h3>{defaultAddress.type}</h3>
                </div>
                <div className="profile-address-box-body">
                    <p>{defaultAddress.address}</p>
                    <p>{defaultAddress.locality}</p>
                    <p>{`${defaultAddress.city} - ${defaultAddress.pincode}`}</p>
                    <p>{defaultAddress.state}</p>
                    <p>{defaultAddress.mobileNumber}</p>
                </div>
                <div className="profile-address-buttons-views">
                    <div className="profile-address-buttons">
                        <p>Edit</p>
                    </div>
                    <div className="profile-address-buttons">
                        <p>X Remove</p>
                    </div>
                </div>
            </div>
            <h5>Other Address</h5>
            {addresses.slice(1).map((address, index) => (
                <div key={index + 1} className={`profile-address-box ${index + 1 === selectedAddress ? 'selected' : ''}`} onClick={() => handleAddressClick(index + 1)}>
                    <div className="profile-address-box-head">
                        <h3>{address.name}</h3>
                        <h3>{address.type}</h3>
                    </div>
                    <div className="profile-address-box-body">
                        <p>{address.address}</p>
                        <p>{address.locality}</p>
                        <p>{`${address.city} - ${address.pincode}`}</p>
                        <p>{address.state}</p>
                        <p>{address.mobileNumber}</p>
                    </div>
                    <div className="profile-address-buttons-views">
                        <div className="profile-address-buttons">
                            <p>Edit</p>
                        </div>
                        <div className="profile-address-buttons">
                            <p>X Remove</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Address;
