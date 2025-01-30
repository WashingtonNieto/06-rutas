import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div>
      <h1>PANEL DE CONTROL</h1>
      <p>Elige una de estas opciones</p>
      <nav>
        <ul>
          <li>
            <NavLink to='/panel/inicio'>Inicio</NavLink>
          </li>
          <li>
            <NavLink to='/panel/crear-articulos'>Crear Artículos</NavLink>
          </li>
          <li>
            <NavLink to='/panel/gestion-usuarios'>Gestión de usuarios</NavLink>
          </li>
          <li>
            <NavLink to='/panel/acerca-de'>Acerca de</NavLink>
          </li>                    
        </ul>
      </nav>
      <div>
        {/* Cargar los componentes de la subruta */}
        <Outlet />
      </div>
    </div>
  )
}
