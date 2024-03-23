import { Link } from "react-router-dom";

import './ObjetoGrid.css'

const ObjetoCard = ({objeto, showLink = true}) => {
    return <div className="card text-center objeto-card col-sm-3">
                <div className="card-header">
                    Album: {objeto.albumId} - Objeto: {objeto.id}
                </div>
                <div className="card-body">
                    <img src={objeto.thumbnailUrl} alt={objeto.title} />
                    <p className="texto-objeto-title">{objeto.title}</p>
                </div>
                <div className="card-footer text-muted">
                    {showLink && <Link className="btn btn-primary" to={`/objeto/${objeto.id}`}>Mostrar</Link>}
                </div>
            </div>
};

export default ObjetoCard;

/*





*/