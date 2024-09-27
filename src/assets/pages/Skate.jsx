import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CardUi from "./CardUi";
import Data from "./Data";
import { NavLink } from "react-router-dom";

function Skate(props) {
  return (
    <div>
      <Header />
      
      <div className="row mx-0 border-bottom">
        {Data.map((items, index) => (
          <div className="mt-5 mb-5 col-md-4 col-sm-6  position-relative">
            <CardUi
              title={items.title}
              para={items.para}
              image={items.image}
              price={items.price}
              id={index}
            />
            <div className="position-absolute" style={{bottom:"17px",right:"25px"}}>
              <NavLink to={`/view/${index}`} className="btn btn-outline-dark ">
                Read More...
              </NavLink>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Skate;
