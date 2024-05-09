import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './props/components/App.jsx'
// import Contador from './state/AppContador'
// import Filmes from './propsState/Filmes'
// import FilmeApi from './cicloDeVida/Filme'
import Home from './rotas/Home'
import Sobre from './rotas/Sobre'
import Usuario from './rotas/Usuario'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     {/* <App /> */}
//     {/* <Contador /> */}
//     {/* <Filmes /> */}
//     {/* <FilmeApi /> */}
//   </React.StrictMode>,
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Home />}></Route>
//         <Route path='/sobre' element={<Sobre />}></Route>
//         <Route path='/usuario' element={<Usuario />}></Route>
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>,
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/:sobre' element={<Sobre />}></Route>
        <Route path='/usuario' element={<Usuario />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
