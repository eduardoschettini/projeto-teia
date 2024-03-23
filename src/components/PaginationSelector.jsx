import React,  { useEffect, useState } from "react";

const PaginationSelector= ({itensPorPagina, setItensPorPagina}) => {

    return(
        <div className="row">
            <div className="col-sm-3">
                <select value={itensPorPagina} onChange={(e) => setItensPorPagina(Number(e.target.value))}>
                    <option value={6}>6</option>
                    <option value={9}>9</option>
                    <option value={15}>15</option>
                    <option value={24}>24</option>
                    <option value={36}>36</option>
                </select> <span>Itens Por Paginas</span>    
            </div>
                                    
        </div>
    )
}

export default PaginationSelector;