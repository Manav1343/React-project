import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { json, useNavigate } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { auth } from "../../../firebase";

function Signin() {
  const history = useNavigate();
  const { register, handleSubmit } = useForm();

  const submitData = (data) => {
      
  };
  const googleBtn = () => {
    const provider = new GoogleAuthProvider();
    console.log(provider);
    signInWithPopup(auth, provider)
      .then((result) => {
      
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        localStorage.setItem("token",result.user.accessToken)
        localStorage.setItem("user",JSON.stringify(result.user))
        history("/")
        const user = result.user;
        console.log(user);
       
      })
      .catch((error) => {
        console.log(error.message);
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  return (
    <div>
      <div className="container-fluid ">
        <div className="row mx-0">
          <div className="col-lg-6 col-md-6 i  col-sm-12">
            <i class="fa-solid fa-person-skating ms-3 me-2 "></i>
            <NavLink
              to="/"
              className="navbar-brand me-5 fw-bolder text-dark "
              href="#"
            >
              Skateshop{" "}
            </NavLink>
            {/* <img src="/one.webp" alt="" className='w-100 i ' /> */}
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className=" mx-auto shadow p-5 my-5  border  rounded">
              <form action="" method="post" onSubmit={handleSubmit(submitData)}>
                <thead className="fw-bold fs-4">Sign in</thead>
                <p>Choose your preferred sign in method</p>

                <div className="mt-4">
                  <input
                    type="text" required
                    className="form-control"
                    {...register("email")}
                    placeholder="enter email id"
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="password" required
                    className="form-control"
                    {...register("password")}
                    placeholder="enter password"
                  />
                </div>
                <div className="mt-4">
                  <NavLink to='/' className=" form-control btn btn-dark">
                    Sign in
                  </NavLink>
                  <button
                    className=" form-control btn btn-dark mt-2"
                    onClick={googleBtn}
                    type="button"
                  ><i class="fa-brands g fa-google"></i>
                    oogle
                  </button>
                </div>

                <div className="mt-4">
                  <p>
                    Don't have an account?{" "}
                    <Link
                      to="/signup"
                      className="text-decoration-none text-dark"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
