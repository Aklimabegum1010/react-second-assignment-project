
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext, useEffect } from "react";


// const Login = () => {




//     const { loginUser } = useContext(AuthContext);
//     const handleLogin = (e) => {
//         e.preventDefault()
//         // const name = e.target.name.value;
//         const email = e.target.email.value;
//         // const photoURL = e.target.photoURL.value;
//         const password = e.target.password.value;
//         console.log(email, password)
//         loginUser(email, password)
//     }


//     return (





//         <div>
//             <div className="hero min-h-screen bg-base-200">
//                 <div className="hero-content flex-col">
//                     <div className="text-center">
//                         <h2 className="text-4xl font-bold">Login Now</h2>
//                     </div>
//                     <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                         <div className="card-body">
//                             <form onSubmit={handleLogin}>
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text">Your Email</span>
//                                     </label>
//                                     <input type="Email" name="email" placeholder="Your Email" className="input input-bordered" required />
//                                 </div>
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text">Your Password</span>
//                                     </label>
//                                     <input type="password" name="password" placeholder="Your password" className="input input-bordered" required />
//                                     <label className="label">
//                                         <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                                     </label>
//                                 </div>
//                                 <div className="form-control mt-6">
//                                     <button className="btn btn-primary">Login</button>
//                                 </div>
//                             </form>
//                             <div className="text-center">
//                                 <p>Login with social account</p>
//                             </div>
//                             <p>
//                                 Please register <Link to="/register">
//                                     <button className="btn btn-link">Register</button>
//                                 </Link>
//                             </p>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>





//     );
// };


const Login = () => {
  const { loginUser, googleLogin, githubLogin, setUser, user } = useContext(AuthContext);
  const location = useLocation()
  console.log(location)
  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)
    loginUser(email, password)
  }

  const handleGoogleLogin =() => {
    googleLogin()
    .then (result => setUser(result.user))
  }

  const handleGithubLogin =() =>{
    githubLogin()
    .then (result => console.log(result.user))
  }

  useEffect(() =>{
if(user){
  navigate(location.state)
}
  }, [user])

  return (

    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name="email" type="email" placeholder="email" className="input input-bordered" required />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input name="password" type="password" placeholder="password" className="input input-bordered" required />

            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>


            <div className="flex gap-5 text-center">
              <button onClick={handleGoogleLogin} className="px-6 py-2 text-white rounded bg-sky-800">Google login</button>
              <button onClick={handleGithubLogin} className="px-6 py-2 text-white rounded bg-sky-800">Github login</button>
              
            </div>



            <p className="mx-auto">
              Dont have account <Link to="/register">
                <button className="btn btn-link">Register</button>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>




  );
};

export default Login;