import React, { useState } from 'react';
import Modal from './Modal';

const Card = ({ usuario, color, imagen, id }) => {
    const [miModal, cambiarMiModal] = useState(false);

    let idSeleccionado;
    const mostrarModal = (e) => {
        switch (e.target.id) {
            case "1":
                idSeleccionado = e.target.id;
                cambiarMiModal(idSeleccionado);
                break;
            case "2":
                idSeleccionado = e.target.id;;
                cambiarMiModal(idSeleccionado);
                break;
            case "3":
                idSeleccionado = e.target.id;
                cambiarMiModal(idSeleccionado);
                break;
            case "4":
                idSeleccionado = e.target.id;
                cambiarMiModal(idSeleccionado);
                break;
            default:
                break;
        }
        console.log(idSeleccionado);
    }


    return (
        <div className="card">
            <h2 style={{ color: color }}>Hola mi nombre es {usuario}</h2>
            <img src={imagen} alt="" />
            <button id={id} className="boton" onClick={mostrarModal}>Ver más</button>
            {miModal ? <Modal cambiarMiModal={cambiarMiModal} imagen={imagen} /> : null}
        </div>
    )
}

export default Card;