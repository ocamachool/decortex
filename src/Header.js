import React from 'react';
import './styles/header.css';
import Logo from './assets/Logo.png';
import './bootstrap-5.3.3-dist/css/bootstrap.css'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

export const Header = () =>{

    let navigate = useNavigate();

    return(

    <div>
        <div className="navbar navbar__color">
            <div className="">
                <div>
                    <h1 className='navbar__title'>DECORTEX</h1>
                </div>
            </div>
        </div>
        <div className="navbar navbar__scolor">
            <div className="container">
                <div className='navbar__logo'>
                    <img src={Logo} alt="Logo" height="120px" />
                </div>
                <div className='navbar__row'>
                    <div className='navbar__item'>
                    <Link to="/">Inicio</Link>
                    </div>
                    <div className='navbar__item'>
                        <Link to="/Productos">Productos</Link>
                    </div>
                    <div className='navbar__item'>
                        <Link to="/Contacto">Contacto</Link>
                    </div>
                    <div className='navbar__item'>
                        <a href='#' className='navbar__item-text'>¿Quienes somos?</a>
                    </div>
                    <div className='navbar__item'>
                        <a href='#' className='navbar__item-text'>Alta Decoración</a>
                    </div>
                    
                    


                </div>
            </div>
        </div>
    </div>
    
    )
};
    