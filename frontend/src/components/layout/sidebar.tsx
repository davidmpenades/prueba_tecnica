import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/common.css';
import './sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <div className='sidebar bg-menu'>
      <ul>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Operaciones
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/marketers'
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Comercializadoras
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clients'
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Clientes
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
