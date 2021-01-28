import React from 'react';
import Card from './componentes/Card';
import Imagen1 from './imagenes/1.jpg';
import Imagen2 from './imagenes/2.jpg';
import Imagen3 from './imagenes/3.jpg';
import Imagen4 from './imagenes/4.jpg';

const App = () => {
    return ( 
        <div className="contenedor">
            <Card id="1" usuario="Cesar" color="red" imagen={Imagen1}/>
            <Card id="2" usuario="Carlos" color="green" imagen={Imagen2}/>
            <Card id="3" usuario="Manuel" color="blue" imagen={Imagen3}/>
            <Card id="4" usuario="Jorge" color="gray" imagen={Imagen4}/>
        </div>
     );
}
 
export default App;