import React from "react";
import "../Home/Section.css";
import { NavLink } from "react-router-dom";

function Section(props) {
  return (
    <>
      <div className="container main">
        <h1 className="text-center h">
          An e-commerce skateshop built<br></br> with everything new in Node.js
        </h1>
        <h5 className="text-center h5 mt-3">
          Buy and sell skateboarding gears from independent<br></br> brands and
          stores around the world with ease{" "}
        </h5>

        <div className="buy d-flex justify-content-center mt-3">
          <div className="buybutton btn bg-dark text-white me-3">Buy Now</div>
          <div className="sellbt btn btn-outline-dark ">Sell Now</div>
        </div>
      </div>

      <div className=" container main2  border-bottom pb-5 ">
        <div className="row">
          <NavLink to="/skate" className="cardBody col-lg-4 col-md-6 mt-3">
            <div className="card-img">
              <img src="/public/img1.jpg" alt="" />
            </div>
            <div className="content">
              <i class="fa-solid fa-person-skating text-center "></i>
              <h2 className="card-title text-center">Skatebord</h2>
            </div>
          </NavLink>

          <NavLink to="/clothing" className="cardBody col-lg-4 col-md-6 mt-3">
            <div className="card-img">
              <img src="/public/img2.jpg" alt="" />
            </div>
            <div className="content">
              <i class="fa-solid fa-shirt text-center"></i>
              <h2 className="card-title text-center">Clothing</h2>
            </div>
          </NavLink>

          <NavLink to="/shoes" className="cardBody col-lg-4 col-md-6 mt-3">
            <div className="card-img">
              <img src="/public/img3.jpg" alt="" />
            </div>
            <div className="content">
              <i class="fa-solid fa-shoe-prints text-center"></i>
              <h2 className="card-title text-center">Shoes</h2>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Section;
