import React from 'react';
import '../stylesheets/Review.css'

function Review (props){
    return(
        <div className="box-container rounded-4">
            <p>{props.texto}</p>
            <div className="box-user">
                <img className="img-rounded" src={require(`../images/${props.imagen}.jpg`)} alt="" />
                <div className="informacion">
                    <h3>{props.nombre}</h3>
                    <p>{props.cargo}</p>
                </div>  
            </div>

        </div>
    )
}

export default Review;