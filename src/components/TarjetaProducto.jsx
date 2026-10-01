function TarjetaProducto(props) {
    return (
        <div className="col-6 col-md-3 mb-4">
            <div className="card h-100">
                <img
                    src={props.imagen}
                    className="card-img-top"
                    alt={props.nombre}
                    style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="card-body">
                    <h5 className="card-title">{props.nombre}</h5>
                    <p className="card-text">${props.precio}</p>
                </div>
            </div>
        </div>
    );
}

export default TarjetaProducto;