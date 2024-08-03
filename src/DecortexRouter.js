import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Inicio} from "./views/Inicio";
import { Header } from "./Header";
import { Productos } from "./views/Productos";
import { Contacto } from "./views/Contacto";



/**
 * PizzaRouter
 * Enrutador de la aplicacion
 * Definimos dentro de él las rutas que nuestra aplicacion va a manejar.
 * @returns
 */
export const DecortexRouter = () => {
    return (
        
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/Productos" element={<Productos/>}/>
                <Route path="/Contacto" element={<Contacto/>}/>
              

            </Routes>
        
    );
};
