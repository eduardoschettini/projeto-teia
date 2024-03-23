import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ObjetoCard from '../components/ObjetoCard'

import Loader from "../components/Loader";

const searchUrl = import.meta.env.VITE_API;


const Pesquisa = () => {
    const [searchParams] = useSearchParams()

    const [objetos, setObjetos] = useState([])
    const query = searchParams.get("q")

    console.log("query: " + query);
    console.log("searchUrl:" + searchUrl);

    const getObjetoPesquisado = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setObjetos(data);
    };

    useEffect(() => {
        const objetoPesquisadoUrl = `${searchUrl}?id=${query}`

        getObjetoPesquisado(objetoPesquisadoUrl);
    }, [query])
    
    return(
        <div className="container">
            <h2 className="title text-center"> Resultado para: <span className="query-text">{query}</span></h2>
            <div className="objetos-container text-center">
                <div className="row">
                    {objetos.length === 0 && <Loader />}
                    {objetos.length > 0 && objetos.map((objeto) => <ObjetoCard key={objeto.albumId/objeto.id} objeto={objeto} />)}
                </div>
            </div>
        </div>
    )
}

export default Pesquisa