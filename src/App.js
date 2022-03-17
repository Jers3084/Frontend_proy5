import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Catalogo } from './components/Catalogo/Catalogo'
import { Registro } from './components/Registro/Registro'
import { IniciarSesion } from './components/IniciarSesion/IniciarSesion'
import { Detalle } from './components/Detalle/Detalle'
import { Home } from './components/Home/Home'
import { UserContext } from './Context/UserContext'
import { PerfildeUsuario } from './components/PerfildeUsuario/PerfildeUsuario'

function App() {
  const [userc, setUserc] = useState({ token: false, shopping: [] })

  return (
    <>
      <UserContext.Provider value={{ userc, setUserc }}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/catalogo">
              <Catalogo />
            </Route>
            <Route path="/iniciarsesion">
              <IniciarSesion />
            </Route>
            <Route path="/perfildeusuario">
              <PerfildeUsuario />
            </Route>
            <Route path="/registro">
              <Registro />
            </Route>
            <Route path="/detalle/:id">
              <Detalle />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </>
  )
}

export default App
