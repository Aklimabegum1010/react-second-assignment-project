import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";



const UpdateProfile = () => {
    // const { updateUserProfile } = useContext(AuthContext);
    // const [profileData, setProfileData] = useState({
    //     displayName: '',
    //     photoURL: '',
    // });
    // const [error, setError] = useState(null);

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setProfileData({ ...profileData, [name]: value });
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await updateUserProfile(profileData.displayName, profileData.photoURL);
    //         setError(null);
    //     } catch (error) {
    //         setError(error.message);
    //     }
    // };
    // return (
    //     <div className="text-center mt-20 my-20">
    //         <h2 className="text-3xl font-bold">User Profile Update</h2>
    //         <form onSubmit={handleSubmit}>
    //             <label>
    //                 Display Name:
    //                 <input
    //                     className="border w-96 h-10 rounded ml-5"
    //                     type="text"
    //                     name="displayName"
    //                     value={profileData.displayName}
    //                     onChange={handleInputChange}
    //                 />
    //             </label>
    //             <br />
    //             <label>
    //                 Photo URL:
    //                 <input
    //                     className="border w-96 h-10 rounded ml-5 my-5"
    //                     type="text"
    //                     name="photoURL"
    //                     value={profileData.photoURL}
    //                     onChange={handleInputChange}
    //                 />
    //             </label>
    //             <br />
    //             <button className="btn btn-accent" type="submit">Update Profile</button>
    //             {error && <p>{error}</p>}
    //         </form>
    //     </div>
    // );








    const { user, profile, updateUserProfile } = useContext(AuthContext);
    const [profileData, setProfileData] = useState({
        displayName: '',
        photoURL: '',
    });
    const [error, setError] = useState(null);

   
    useEffect(() => {
        if (user && profile) {
            setProfileData({
                displayName: profile.displayName || user.displayName || '',
                photoURL: profile.photoURL || user.photoURL || '',
            });
        }
    }, [user, profile]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateUserProfile(profileData.displayName, profileData.photoURL);
            setError(null);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="text-center mt-20 my-20">
            <h2 className="text-3xl font-bold">User Profile Update</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Display Name:
                    <input
                        className="border w-96 h-10 rounded ml-5"
                        type="text"
                        name="displayName"
                        value={profileData.displayName}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Photo URL:
                    <input
                        className="border w-96 h-10 rounded ml-5 my-5"
                        type="text"
                        name="photoURL"
                        value={profileData.photoURL}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <button className="btn btn-accent" type="submit">Update Profile</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );




};

export default UpdateProfile;