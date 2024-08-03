import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DecortexContext } from "../DecortexContext";

import '../styles/header.css';
import imagen from '../assets/cubetas.png';
import '../bootstrap-5.3.3-dist/css/bootstrap.css'





export const Inicio = () => {


  return (
    <div className=''>
            <div className="card ">
                <div className="row content">
                  <section className=" inicio__text">
                    <article className="inicio__article">
                      <h1 className="inicio__title">Objetivo</h1>
                      <p className="inicio__parrafo">Nuestra misión es llevar el mejor material a tu hogar. Acercate con nosotros.</p>
                    </article>

                    <img src={imagen} alt="Logo"  className="inicio__img"/>
                  </section>
                  
                </div>
            </div>
        </div>
  );
};
