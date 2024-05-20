import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { updateProfile } from "firebase/auth";



const Register = () => {

    const { registerUser, setUser } = useContext(AuthContext);
    const [error, setError] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [photoURL, setPhotoURL] = useState("");

    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        // const photoURL = e.target.photoURL.value;
        const password = e.target.password.value;
        console.log(name, email, password)

        if (password.length < 6) {
            setError("Password must be 6 characters")
            return;
        }

        if (!/[A-Z]/.test(password)) {
            setError("Please add a uppercase characters")
            return
        }
        if (!/[a-z]/.test(password)) {
            setError("Please add a lowercase characters")
            return
        }

        setError("")
        console.log(email, password);
        registerUser(email, password)
            .then(result => {
                setUser(result.user)
setError("")

                updateProfile(result.user, {
                    displayName: name,
                    // photoURL: "https://i.ibb.co/bR2xvjp/360-F-402624137-Yc0k-Te-Im7m-Jn9-YA67pw-IOsi-De-Ab5-D2tb.jpg"
                    photoURL: photoURL || ""
                })
                    .then(() => console.log(""))
                    .catch()


            })
            .catch(error => setError(error.message))
    }



    return (


        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold">Register Now</h2>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your photo URL</span>
                                    </label>
                                    <input type="photo" name="photo" placeholder="Your photo URL" className="input input-bordered" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} required />
                                </div>
                                <div className="form-control relative border">
                                    <label className="label">
                                        <span className="label-text">Your Password</span>
                                    </label>
                                    <input
                                        className="input input-bordered"
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Your password"
                                        required /> <span className="absolute top-12 right-4" onClick={() => setShowPassword(!showPassword)}>

                                        {
                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }

                                    </span>
                                    {/* <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label> */}
                                </div>


                                {
                                    error && <small className="text-red-800">{error}</small>
                                }



                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>
                            <p>
                                Already have account? <Link to="/login">
                                    <button className="btn btn-link">Login</button>
                                </Link>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>

       



    );
};

export default Register;