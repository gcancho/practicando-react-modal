import React from 'react';

const Modal = ({imagen, cambiarMiModal}) => {


    const cerrarModal = () =>{
        //Cambia el estado a false para que no se muestre el modal
        cambiarMiModal(false);
    }
    
    return ( 
        <div className="modal">
            <img src={imagen} alt=""/>
            <button onClick={cerrarModal}>Cerrar</button>
        </div>
     );
}
 


export default Modal;