import sailormoon from '../imagenes/goku.jpg'
import '../estilos/estilos.css';
function Caja() {
    return (
        <div className='card'>
            <div className='cajita'>
            <img className='contendorImagen'
                 src={sailormoon} 
                 width={300}
                 />
            <h3>
                GOKU
            </h3>
            <p> pie caja 1
                 

            </p>
            <button className='botonMasInfo'>
                Ver más
            </button>
            </div>
           
        </div>
    

    );
}


export default Caja;

