import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiSearchAlt2 } from "react-icons/bi"

import "./Navbar.css"

const Navbar = () => {

    const [pesquisa, setPesquisa] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(!pesquisa) return;

        navigate(`/pesquisa?q=${pesquisa}`)
        setPesquisa("")
    };

    return(
        <nav id="navbar" className='navbar'>
            <div className="container-fluid">
                <h3 className='navbar-brand'>Projeto Teia</h3>
                <Link id='nav-link' to="/"><strong>Home</strong></Link>
                <form className="d-flex" onSubmit={handleSubmit}>
                    <input className="form-control me-2" 
                        type="text" id="Pesquisa" placeholder='Peqsuise o ID de um objeto' aria-label="Pesquisa"
                        onChange={(e) => setPesquisa(e.target.value)} 
                        value={pesquisa} />
                    <button id="btnPesquisa" type='submit'>
                        <BiSearchAlt2 />
                    </button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar