import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DecortexContext } from "../DecortexContext";

import '../styles/header.css';
import imagen from '../assets/rodillos.png';
import imagen2 from '../assets/cubetas.png';
import imagen3 from '../assets/cuñas.png';
import imagen4 from '../assets/tiner.png';
import imagen5 from '../assets/lijas.png';
import imagen6 from '../assets/brochas.png';
import '../bootstrap-5.3.3-dist/css/bootstrap.css'





export const Productos = () => {


  return (
    <div className='productos__img'>
           <img src={imagen}  className="img__prod"/>
           <img src={imagen2}  className="img__prod"/>
           <img src={imagen3}  className="img__prod"/>
           <img src={imagen4}  className="img__prod"/>
           <img src={imagen5}  className="img__prod"/>
           <img src={imagen6}  className="img__prod"/>
    </div>
  );
};