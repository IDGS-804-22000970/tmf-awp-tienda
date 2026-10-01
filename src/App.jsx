import { useState, useEffect } from 'react';
import Encabezado from './components/Encabezado.jsx';
import Catalogo from './components/Catalogo.jsx';
import Cargando from './components/Cargando.jsx';
import { productos } from './data.js';

function esperar(milisegundos) {
    return new Promise(function (resolver) {
        setTimeout(resolver, milisegundos);
    });
}

async function obtenerProductos(retraso) {
    await esperar(retraso);
    return productos;
}

function App() {

    const [listaProductos, setListaProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [segundos, setSegundos] = useState(3);

    useEffect(function () {
        async function cargarCatalogo() {
            const datos = await obtenerProductos(3000);
            setListaProductos(datos);
            setCargando(false);
        }

        cargarCatalogo();
    }, []);

    useEffect(function () {
        if (segundos > 0) {
            setTimeout(function () {
                setSegundos(segundos - 1);
            }, 1000);
        }
    }, [segundos]);

    return (
        <div className="container py-4">
            <Encabezado />
            {cargando ? <Cargando segundos={segundos} /> : <Catalogo productos={listaProductos} />}
        </div>
    );
}

export default App;