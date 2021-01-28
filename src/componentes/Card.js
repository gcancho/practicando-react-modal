import React from 'react';
import Imagen from './Imagen';

const Card = () => {
    return ( 
        <div className="card">
            <h2 className="card__titulo">Tarjeta</h2>
            <Imagen/>
        </div>
     );
}

export default Card;