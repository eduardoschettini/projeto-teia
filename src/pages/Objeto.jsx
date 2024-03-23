import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './Objeto.css';

const albumURL = import.meta.env.VITE_API;

const Objeto = () => {
    const {id} = useParams();
    const [objeto, setObjeto] = useState(null);

    const getObjeto = async (url) => {
        const res   = await fetch(url);
        const data  = await res.json();
        setObjeto(data[0]);
    }

    useEffect(() => {
        const objetoUrl = `${albumURL}?id=${id}`
        getObjeto(objetoUrl)
    }, [])

    return (
        <div className='container text-center'>
            <div className="card card-objeto text-center objeto-card col-sm-10">
                {objeto &&
                    <>
                    <div className="card-header">
                        <strong>Album: {objeto.albumId} - Objeto: {objeto.id}</strong>
                        </div>
                    <div className="card-body">
                        <img src={objeto.url} alt={objeto.title} />
                        <h2 className="texto-objeto-title">{objeto.title}</h2>
                    </div>
                    </>
                }
            </div>
            
        </div>
        
    )
}

export default Objeto