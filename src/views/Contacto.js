import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DecortexContext } from "../DecortexContext";

import '../styles/header.css';
import imagen from '../assets/rodillos.png';

import '../bootstrap-5.3.3-dist/css/bootstrap.css'





export const Contacto = () => {


  return (
    <div className='content'>
           <section className="cont__section">
                <h4>+5528981695</h4>
                <h4>ocamachooliva22@gmail.com</h4>
            </section>
            <p>Sitio desarrollado por empresa DECORTEX</p>
    </div>
  );
};