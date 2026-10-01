import TarjetaProducto from './TarjetaProducto.jsx';

function Catalogo(props) {
    return (
        <div className="row">
            {props.productos.map(function (producto) {
                return (
                    <TarjetaProducto
                        key={producto.id}
                        nombre={producto.nombre}
                        precio={producto.precio}
                        imagen={producto.imagen}
                    />
                );
            })}
        </div>
    );
}

export default Catalogo;