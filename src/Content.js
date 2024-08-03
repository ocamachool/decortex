import React from 'react';
import './styles/header.css';
import imagen from './assets/Palladio.jpg';
import './bootstrap-5.3.3-dist/css/bootstrap.css'


export const Content = () =>{
    return(

        <div className='content'>
            <div>
                <img src={imagen} alt="Logo" height="200px" />
            </div>
        </div>
    
    )
};
    