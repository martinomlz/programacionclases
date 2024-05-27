import sailormoon from '../imagenes/momo-italiano.png'
import '../estilos/estilos.css';

function Cajatres() {
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
            <p> KAKAROTO
                 

            </p>
            <button className='botonMasInfo'>
                Ver más
            </button>
            </div>
           
        </div>
    

    );
}
export default Cajatres;