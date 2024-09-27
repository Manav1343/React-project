import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Link, NavLink } from "react-router-dom";



function Signup(props) {
  const history = useNavigate();
  const { register, handleSubmit } = useForm();

  
  const submitData = (data) => {
 
  };
  return (
    <div>
      <div className="container-fluid ">
        <div className="row mx-0">
          <div className="col-6 i col-md-6 col-sm-12">
            <i class="fa-solid fa-person-skating ms-3 me-2 "></i>
            <NavLink
              to="/"
              className="navbar-brand me-5 fw-bolder text-dark"
              href="#"
            >
              Skateshop{" "}
            </NavLink>
            {/* <img src="/one.webp" alt="" className='w-100 i ' /> */}
          </div>
          <div className="col-6 col-md-6 col-sm-12 ">
            <div>
              <div className="col-12 mx-auto shadow p-5 my-5  border  rounded">
                <form
                  action=""
                  method="post"
                  onSubmit={handleSubmit(submitData)}
                >
                  <thead className="fw-bold fs-4">Sign up</thead>
                  <p>Choose your preferred sign up method</p>

                  <div className="mt-4">
                    <input
                      type="text"
                      className="form-control"
                      {...register("email")}
                      placeholder="enter email id" required
                    />
                  </div>
                  <div className="mt-4">
                    <input
                      type="number"
                      className="form-control"
                      {...register("mobile")}
                      placeholder="enter mobile" required
                    />
                  </div>
                  <div className="mt-4">
                    <input
                      type="password"
                      className="form-control"
                      {...register("password")}
                      placeholder="create password" required
                    />
                  </div>
                  <div className="mt-4">
                    <button className=" form-control btn btn-dark">
                      Continue
                    </button>
                  </div>

                  <div className="mt-4">
                    <p>
                      Already have an account?
                      <Link
                        to="/signin"
                        className="text-decoration-none text-dark"
                      >
                        Sign in
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
