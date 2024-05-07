import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './props/components/App.jsx'
import Contador from './state/AppContador'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Contador />
  </React.StrictMode>,
)
