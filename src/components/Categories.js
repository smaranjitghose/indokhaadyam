import React from "react";
import "../styles/categories.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Categories = () => {
  return (
    <>
      <p className="h3 fw-bold ms-md-5 my-2 ps-4">Top Categories -</p>
      <div className="container ">
        <div className="row">
          <div className="col carding m-3">
            <img src="https://i.postimg.cc/hv2cL1P8/mithai.jpg"/>
            <div class="info text-center mt-5">
              <h2 className="spacingTop">Mithai Masti <br />(Indian Sweets)</h2>
              <a href="#" class="btn btn-dark" role="button">Read More</a>
            </div>
          </div>
          <div className="col carding m-3">
            <img src="https://i.postimg.cc/6qWB4mw5/breakfast.jpg"/>
            <div class="info text-center mt-5">
              <h2 className="spacingTop">Nashta <br />(Indian Breakfast)</h2>
              <a href="#" class="btn btn-dark" role="button">Read More</a>
            </div>
          </div>
          <div className="col carding m-3">
            <img src="https://i.postimg.cc/qRXkRdP5/chaat.jpg"/>
            <div class="info text-center mt-5">
              <h2 className="spacingTop">Chaat and Snacks</h2>
              <a href="#" class="btn btn-dark" role="button">Read More</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col carding m-3">
            <img src="https://i.postimg.cc/tTHqpgM6/fasting.jpg"/>
            <div class="info text-center mt-5">
              <h2 className="spacingTop">Fasting Food</h2>
              <a href="#" class="btn btn-dark" role="button">Read More</a>
            </div>
          </div>
          <div className="col carding m-3">
            <img src="https://i.postimg.cc/CK8h38mY/drinks.jpg"/>
            <div class="info text-center mt-5">
              <h2 className="spacingTop">Drinks</h2>
              <a href="#" class="btn btn-dark" role="button">Read More</a>
            </div>
          </div>
          <div className="col carding m-3">
            <img src="https://i.postimg.cc/jSmq3c6Z/main-Course.jpg"/>
            <div class="info text-center mt-5">
              <h2 className="spacingTop">Main Course</h2>
              <a href="#" class="btn btn-dark" role="button">Read More</a>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};
export default Categories;
