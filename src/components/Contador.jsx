function Contador(props) {
    return (
        <div className="bg-success text-white text-center rounded p-4 mb-4">
            <div className="spinner-border text-white" role="status"></div>
            <h2>La página cargará en {props.segundos} segundos.</h2>
        </div>
    );
}

export default Contador;