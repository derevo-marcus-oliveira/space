// Imports de ferramentas
import {Link, Outlet, useHref } from "react-router-dom";
import Header from "../Components/Header/Header";


// Imports de outros arquivos
import "./Root.css"

const Root = () => {
    var url = useHref();
    return (
        <>
            <div id="container-root">                
                <Header/>
                <div id="conteudo">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}

export default Root;