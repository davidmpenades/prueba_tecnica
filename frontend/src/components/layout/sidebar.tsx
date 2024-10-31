import {
  FireOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from '@ant-design/icons';
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/common.css';

const Sidebar: React.FC = () => {
  return (
    <div className='sidebar bg-menu'>
      <ul>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            <div className='nav-item'>
              <UnorderedListOutlined className='nav-icon' />
              <span className='nav-text'>Operaciones</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/marketers'
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            <div className='nav-item'>
              <FireOutlined className='nav-icon' />
              <span className='nav-text'>Comercializadoras</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clients'
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            <div className='nav-item'>
              <UserOutlined className='nav-icon' />
              <span className='nav-text'>Clientes</span>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
