import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function About(props) {
  return (
    <>
      <Header />
      <div className="about border-bottom">
        <h1 className="fs-1 ">About</h1>
        <p className="fs-6 ">About the project and the author of the project.</p>
        <div className="container mb-5 row mx-0">
          <div className="one col-6 col-md-6 col-sm-12">
            <img src="aboutskat.webp" alt="" />
          </div>
          <div className="two col-6 col-md-6 col-sm-12">
            <h1>Skatesworld</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              eligendi reiciendis magnam? A adipisci blanditiis sunt illo
              consectetur maiores cupiditate labore reprehenderit minus tempore,
              ratione possimus. Libero at amet laboriosam veniam vitae
              consequatur aspernatur, explicabo atque nulla ea natus accusamus
              provident architecto ratione eos blanditiis minus eveniet aut
              assumenda! Saepe unde maxime delectus eligendi nam odit commodi
              explicabo possimus neque assumenda qui porro, labore iusto,
              repudiandae, omnis ea perferendis perspiciatis aliquam sunt
              voluptas quia at? Similique deserunt numquam odit laborum, ut
              veritatis. 
            </p>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
        </div>

        <div className="container mb-5 row">
          <div className="one col-6 col-md-6 col-sm-12">
            <h1>Clothworld</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              eligendi reiciendis magnam? A adipisci blanditiis sunt illo
              consectetur maiores cupiditate labore reprehenderit minus tempore,
              ratione possimus. Libero at amet laboriosam veniam vitae
              consequatur aspernatur, explicabo atque nulla ea natus accusamus
              provident architecto ratione eos blanditiis minus eveniet aut
              assumenda! Saepe unde maxime delectus eligendi nam odit commodi
              explicabo possimus neque assumenda qui porro, labore iusto,
              repudiandae.
            </p>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="two col-6 col-md-6 col-sm-12">
            <img src="aboutcloth.webp" alt="" className="w-100" />
          </div>
        </div>

        <div className="container mb-5 row">
            <div className="one col-6 col-md-6 col-sm-12">
                <img src="aboutshoes.webp" alt="" className="w-100"/>
            </div>
            <div className="two col-6 col-md-6 col-sm-12">
                <h1>Shoesworld</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eligendi reiciendis magnam? A adipisci blanditiis sunt illo consectetur maiores cupiditate labore reprehenderit minus tempore, ratione possimus. Libero at amet laboriosam veniam vitae consequatur aspernatur, explicabo atque nulla ea natus accusamus provident architecto ratione eos blanditiis minus eveniet aut assumenda! Saepe unde maxime delectus eligendi nam odit commodi explicabo possimus neque assumenda qui porro, labore iusto, repudiandae.</p>
                <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            </div>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default About;
