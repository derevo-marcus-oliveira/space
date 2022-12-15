// Imports de ferramentas
import {Link, Outlet, useHref } from "react-router-dom";


// Imports de outros arquivos
import "./Header.css"

const Header = () => {
    var url = useHref();
    return (
        <>
            <div id="container-header">                
                <nav className="navigation">
                    <ul className="navLista">
                        <li className="navItem">
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li className="navItem"> 
                            <Link to={"/sobre"}>Sobre</Link>
                        </li>
                        <li className="navItem">
                            <Link to={"/projetos"}>Projetos</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header;