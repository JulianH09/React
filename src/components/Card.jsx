import React from "react";
import '../stylesheets/Card.css'

function Card (props){
    return(
        <main className="container rounded-4 bck-color">
        <div className="">
            <div className="card-body bck-color">
                <img src={require(`../images/${props.imagen}.gif`)} alt="#" className="rounded-4 img-sz"/>
                <h5 className="text-white pt-4 fw-bold fs-4">{props.nombre}</h5>
                <p className="color-text pt-1 fs-5">{props.descripcion}</p>

                <div className="d-flex justify-content-between pb-3">
                    <div className="d-flex align-items-center">
                        <img src={require(`../images/${props.imagen_eq}.svg`)} alt="#" className=""/>
                        <p className="color-eth fw-bolder pt-3 ps-1">{props.cantidad_eq}</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <img src={require(`../images/${props.imagen_rl}.svg`)} alt="#" className="pe-1"/>
                        <p className="text-white pt-3">{props.dias} days left</p>
                    </div>
                </div>
                <li className="slider"></li>        
                <div className="d-flex pt-3">
                    <img src={require(`../images/${props.imagen_perfil}.jpg`)} alt="" className="border rounded-circle border-2 img-profile"/>
                    <p className="color-text ps-3 pt-2 pe-1">Creation of</p>
                    <p className="text-white pt-2 ">{props.creador}</p>
                </div>
            </div>
        </div>
    </main>
    )
}

export default Card;