// Imports de ferramentas
import {Link, Outlet, useHref } from "react-router-dom";


// Imports de outros arquivos
import "./Home.css"

const habilidades = [
    { "id": 1, "nome": "HTML", "nivel": 9, "tempo": "mais de 2 anos" },
    { "id": 2, "nome": "CSS", "nivel": 8, "tempo": "mais de 2 anos" },
    { "id": 3, "nome": "JavaScript", "nivel": 9, "tempo": "mais de 2 anos"},
    { "id": 4, "nome": "React", "nivel": 6, "tempo": "menos de 1 ano"},
    { "id": 5, "nome": "Vue js", "nivel": 6, "tempo": "menos de 1 ano"},
    { "id": 6, "nome": "C#", "nivel": 7, "tempo": "mais de 2 anos"},
]

var emojins = {
    "n1": <img src="./img/tonto.png" alt="paixao" />,
    "n2": <img src="./img/desajeitado.png" alt="natural" />,
    "n3": <img src="./img/rir.png" alt="pensando" />,
    "n4": <img src="./img/grin-alt.png" alt="feliz" />,
    "n5": <img src="./img/estrelado.png" alt="a paixao" />,   
}


const Home = () => {
    var url = useHref();
    return (
        <>
            <div id="home">                
                {habilidades.map((hab) => (
                    <>

                        <div className="cards">
                            
                        </div>
                    
                    </>
                ))}
            </div>
           

        </>
    )
}

export default Home;