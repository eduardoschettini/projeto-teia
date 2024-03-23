import React from "react";

const PaginationComponent = ({paginas, setPaginaAtual}) => {

    return(
        <div className="row">
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">                            
                    {Array.from(Array(paginas), (item, index) => {
                        return (<li className="page-item">
                                    <button 
                                        className="page-link "  
                                        value={index} 
                                        onClick={(e => setPaginaAtual(Number(e.target.value)))}
                                    >
                                            {index + 1}
                                    </button>
                                </li>)
                        })}
                </ul>
            </nav>
        </div>
    )
}

export default PaginationComponent;