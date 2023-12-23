import React, { useState } from 'react'
import "./Profile.css"

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        fullName: 'Shabbeer',
        mobileNumber: '+91 9876543210',
        email: 'eghjklo@gmail.com',
        dob: 'Not added',
        location: 'Not Added',
        altNumber: 'Not Added',
        displayname: 'lio',
        gender: 'male'
    });
    
    const handleEditClick = () => {
        setIsEditing(true);
    };
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSaveClick = () => {
        setIsEditing(false);
    };

    return (
        <div className='Profile'>
            {isEditing ? (
                <div className="profile-editing">
                    <div className="profile-editing-items">
                        <form>
                            <div className="profile-editing-items-fields">
                                <label htmlFor="fullName">Full Name:</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    placeholder="Shabbeer"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="profile-editing-items-fields">
                                <label htmlFor="mobileNumber">Mobile Number:</label>
                                <input
                                    type="tel"
                                    id="mobileNumber"
                                    name="mobileNumber"
                                    placeholder="+91 9876543210"
                                    value={formData.mobileNumber}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="profile-editing-items-fields">
                                <label for="email">Email ID:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="eghjklo@gmail.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="profile-editing-items-fields">
                                <label for="dob">Date of Birth:</label>
                                <input
                                    type="date"
                                    id="dob"
                                    name="dob"
                                    placeholder="Note added"
                                    value={formData.dob}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="profile-editing-items-fields">
                                <label for="location">Location:</label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    placeholder="Not Added"
                                    value={formData.location}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="profile-editing-items-fields">
                                <label for="altNumber">Alternate Number:</label>
                                <input
                                    type="tel"
                                    id="altNumber"
                                    name="altNumber"
                                    placeholder="Not Added"
                                    value={formData.altNumber}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="profile-editing-items-fields">
                                <label for="displayname">Display Name:</label>
                                <input
                                    type="text"
                                    id="displayname"
                                    name="displayname"
                                    placeholder="lio"
                                    value={formData.displayname}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="profile-editing-items-fields-gender">
                                <label>Gender:</label>
                                <input
                                    type="radio"
                                    id="male"
                                    name="gender"
                                    value="Male"
                                    checked={formData.gender === 'Male'}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="male">Male</label>
                                <input
                                    type="radio"
                                    id="female"
                                    name="gender"
                                    value="Female"
                                    checked={formData.gender === 'Female'}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="female">Female</label>
                                <input
                                    type="radio"
                                    id="trans"
                                    name="gender"
                                    value="Trans"
                                    checked={formData.gender === 'Trans'}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="trans">Trans</label>
                            </div>
                        </form>
                    </div>

                    <div className="profile-editing-button" onClick={handleSaveClick}>
                        <p >Save</p>
                    </div>
                </div>
            ) : (<>
                <table >
                    <tr>
                        <td>Full Name</td>
                        <td>: {formData.fullName}</td>
                    </tr>
                    <tr>
                        <td>Mobile Number</td>
                        <td>: {formData.mobileNumber}</td>
                    </tr>
                    <tr>
                        <td>Email ID</td>
                        <td>: {formData.email}</td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>: {formData.gender}</td>
                    </tr>
                    <tr>
                        <td>Date of Birth</td>
                        <td>: {formData.dob}</td>
                    </tr>
                    <tr>
                        <td>Location</td>
                        <td>: {formData.location}</td>
                    </tr>
                    <tr>
                        <td>Alternate Number</td>
                        <td>: {formData.altNumber}</td>
                    </tr>
                    <tr>
                        <td>Distdlay Name</td>
                        <td>: {formData.displayname}</td>
                    </tr>
                </table>
                <div className="profile-button" onClick={handleEditClick}>
                    <p >Edit</p>
                </div>
            </>
            )}
        </div>
    )
}

export default Profile
