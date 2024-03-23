import { useState, useEffect  } from "react"
import ObjetoCard from "../components/ObjetoCard";
import Loader from "../components/Loader";
import PaginationComponent from "../components/PaginationComponent";
import PaginationSelector from "../components/PaginationSelector";

import './Home.css'

const albumURL = import.meta.env.VITE_API;

const Home = () => {

    const [objetos, setObjetos] = useState([]);
    const [itensPorPagina, setItensPorPagina] = useState(9);
    const [paginaAtual, setPaginaAtual] = useState(0);

    const paginas       = Math.ceil(objetos.length / itensPorPagina)
    const startIndex    = paginaAtual * itensPorPagina;
    const endIndex      = startIndex + itensPorPagina;
    const objetosAtuais = objetos.slice(startIndex, endIndex);

    const getObjetos = async (url) => {
        const res   = await fetch(url);
        const data  = await res.json();
        
        setObjetos(data);
    }

    useEffect(() => {
        const objetoURL = `${albumURL}`;

        getObjetos(objetoURL);
    }, [])

    

    return(
        <div className="container">
            <h2 className="title text-center"> Lista de Objetos</h2>
            <div className="objetos-container text-center">
                <PaginationSelector itensPorPagina={itensPorPagina} setItensPorPagina={setItensPorPagina} />
                <div className="row">
                    {objetos.length === 0 && <Loader />}
                    {objetos.length > 0 && objetosAtuais.map((objeto) => <ObjetoCard key={objeto.albumId/objeto.id} objeto={objeto} />)}
                </div>
                <PaginationComponent paginas={paginas} setPaginaAtual={ setPaginaAtual} />
            </div>
        </div>
    )
}

export default Home