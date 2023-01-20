import React from 'react'
import { PropTypes } from "prop-types";

export default function Propiedades(props) {
    return (
        <div>
            <h2>{props.porDefecto}</h2>
            <h2>{props.esDia ? "Si" : "No"} es de dia </h2>
            <ul>
                <li>{props.arreglo.join(",")} </li>
            </ul>
            <li>{props.objeto.nombre + "-" + props.objeto.email} </li>
            <p>{props.arreglo.map(props.funcion).join(", ")} </p>
            <h2>{props.componente} </h2>
        </div>
    )
}
