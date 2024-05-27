import sailormoon from '../imagenes/sailor2.jpeg'
import '../estilos/estilos.css';
function Cajados() {
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
            <p> caja 2 pie
                 

            </p>
            <button className='botonMasInfo'>
                Ver más
            </button>
            </div>
           
        </div>
    

    );
}
export default Cajados;