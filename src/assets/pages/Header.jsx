import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";
import Signin from "./Signin";

const Header = () => {
  const history = useNavigate();
  // const [value, setValue] = useState({});

  const user = auth.currentUser;

  function show() {
    if (user !== null) {
      user.providerData.forEach((profile) => {
        // const obj = {
        //   Name: profile.displayName,
        //   Email: profile.email,
        //   photoURL: profile.photoURL,
        // };
        // setValue(obj);
        console.log("Name:" + profile.displayName);
        console.log("Email:" + profile.email);
        console.log("photo URL:" + profile.photoURL);
      });
    }
  }
  function logout() {
    
    signOut(auth)
      .then(() => {
    
        history("/Signin");
      })
      .catch((error) => {
        // alert("error");
        console.log(error);
      });
  }
  useEffect(() => {
    show();
  }, []);
 
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid border-bottom p-2">
          <i class="fa-solid fa-person-skating ms-3 me-2 "></i>
          <NavLink to="/" className="navbar-brand me-5 fw-bolder mm" href="#">
            Skateshop{" "}
          </NavLink>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  About
                </NavLink>
              </li>
              <li class="nav-item  dropdown me-3">
                <a
                  class="nav-link dropdown-toggle text-dark"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All
                </a>
                <ul
                  class="dropdown-menu ll bg-light"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <NavLink to="/skate" className="dropdown-item " href="#">
                      Skateboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/clothing" className="dropdown-item " href="#">
                      {" "}
                      Clothing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/shoes" className="dropdown-item " href="#">
                      Shoes
                    </NavLink>
                  </li>
                </ul>
              </li>

              <NavLink
                className="btn  me-3 bg-dark text-white"
                type="submit"
                to="/signin"
              >
                SignIn
              </NavLink>
            </ul>
            { user ?
            (

             <div class="dropdown">
              <h1
                class="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={user?.photoURL}
                  alt=""
                  className="rounded-circle w-25"
                />
              </h1>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    {user?.displayName}
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    {user?.email}
                  </a>
                </li>

                <button
                  href="#"
                  onClick={logout}
                  className="btn btn-dark ms-3"
                >
                  signout
                </button>
              </ul>
            </div>
            ) : (
              signOut
            )}
          
  


            <form class="d-flex ">
              <input
                class="form-control me-3"
                type="search"
                placeholder="Search Products..."
                aria-label="Search"
              />
              <i class="fa-solid fa-cart-shopping cart"></i>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
