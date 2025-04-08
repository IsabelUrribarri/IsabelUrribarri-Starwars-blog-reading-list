import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import mandoaIMG from '../../img/Mandoa.png';
import planetsIMG from '../../img/planetsIMG.png';
import vehicleIMG from '../../img/vehicleIMG.png';

import "../../styles/StarWarsHome.css";

export const StarWarsHome = () => {
  const { store, actions } = useContext(Context);



  return (
    <div className="container">
      <div className="row mt-5 justify-content-center">

       {/* Characters */}
        <div className="col-sm-12 col-md-6 col-lg-4 my-5 d-flex justify-content-center">
          <Link to="/characters" className="text-decoration-none text-center">
            <div className="d-flex flex-column align-items-center">
              <img src={mandoaIMG} className="homeimg mb-2" alt="Mandoa" />
              <h6 className="text-warning fw-bold">Characters</h6>
            </div>
          </Link>
        </div>

      {/* Vehicles */}
      <div className="col-sm-12 col-md-6 col-lg-4 my-5 d-flex justify-content-center">
        <Link to="/vehicles" className="text-decoration-none text-center">
          <div className="d-flex flex-column align-items-center">
            <img src={vehicleIMG} className="homeimg mb-2" alt="Vehicle" />
            <h6 className="text-warning fw-bold">Vehicles</h6>
          </div>
        </Link>
      </div>

    {/* Planets */}
    <div className="col-sm-12 col-md-6 col-lg-4 my-5 d-flex justify-content-center">
      <Link to="/planets" className="text-decoration-none text-center">
        <div className="d-flex flex-column align-items-center">
          <img src={planetsIMG} className="homeimg mb-2" alt="Planets" />
          <h6 className="text-warning fw-bold">Planets</h6>
        </div>
      </Link>
    </div>

  </div>

  <div className="stars"></div>
</div>)}