import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState(null);



    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        // .then (result=>console.log(result.user))
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogin = () => {
        signInWithPopup(auth, githubProvider)
    }

    // const logOut = () => {
    //     return signOut(auth);
    // }



    const logOut = async () => {
        try {
            await signOut(auth);
            setUser(null);
            setProfile(null);
        } catch (error) {
            setError(error.message);
        }
    };


    // const updateUserProfile = (profileData) => {
    //     return updateProfile(auth.currentUser, profileData)
    //         .then(() => {
    //             console.log('Profile updated successfully');
    //             setProfile(profileData)
    //         })
    //         .catch((error) => {
    //             console.error('Error updating profile:', error.message);
    //             throw error;
    //         });
    // };


    const updateUserProfile = async (displayName, photoURL) => {
        try {
            await updateProfile(auth.currentUser, { displayName, photoURL });
            setProfile({ displayName, photoURL });
        } catch (error) {
            setError(error.message);
        }
    };





    const authInfo = {
        registerUser,
        loginUser,
        user,
        logOut,
        setUser,
        googleLogin,
        githubLogin,
        updateUserProfile,
        profile,
        error,
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
            if (currentUser) {
                setUser(currentUser)
                setProfile({ displayName: currentUser.displayName, photoURL: currentUser.photoURL });
            }
            else {
                setUser(null);
                setProfile(null);
            }
        });

        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;