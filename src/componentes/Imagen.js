import React from 'react';
import ImagenGiovanni from '../imagenes/1.jpg';
import ImagenGiovanni2 from '../imagenes/2.jpg';
import ImagenGiovanni3 from '../imagenes/3.jpg';
import ImagenGiovanni4 from '../imagenes/4.jpg';

const ImagenUno = () => {
    return (
        <img className="card__imagen" src={ImagenGiovanni} alt="" />
    );
}
const ImagenDos = () => {
    return (
        <img className="card__imagen" src={ImagenGiovanni2} alt="" />
    );
}
const ImagenTres = () => {
    return (
        <img className="card__imagen" src={ImagenGiovanni3} alt="" />
    );
}
const ImagenCuatro = () => {
    return (
        <img className="card__imagen" src={ImagenGiovanni4} alt="" />
    );
}

export { ImagenUno, ImagenDos, ImagenTres, ImagenCuatro };