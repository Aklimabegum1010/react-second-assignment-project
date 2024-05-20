import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const UserProfile = () => {


    // const { user, profile } = useContext(AuthContext)
    // return (

    //     <div>
    //         {user && (
    //             <div>
    //                 <h2>Welcome, {profile.displayName}</h2>
    //                 <p>Email: {user.email}</p>
    //             </div>
    //         )}
    //     </div>


    // );



    const { user, profile } = useContext(AuthContext);

    return (
        <div className="user-profile text-center my-20 text-4xl">
            {user && (
                <div>

                    {profile?.photoURL && <img className="rounded-full w-60 h-60 mx-auto" src={profile.photoURL} alt="User" />}
                    <p><strong>Name:</strong> {profile?.displayName || user.displayName}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    
                    

                </div>
            )}
        </div>
    );
};





export default UserProfile;