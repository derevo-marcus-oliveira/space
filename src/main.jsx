
// Imports de ferramentas
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,
         RouterProvider, 
         Route } 
from "react-router-dom";
import Home from './routes/Components/Home/Home.jsx';
// Imports de arquivos

// Rotas
import Root from "./routes/Root/Root.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [ 
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/sobre",
        element: <h1>Sobre</h1>,
      },
      {
        path: "/projetos",
        element: <h1>Projetos</h1>,
      },
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
)
