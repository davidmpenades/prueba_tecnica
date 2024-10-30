import { Layout } from 'antd';
import React from 'react';
import logo from '../../assets/img/logo.png';
import '../../styles/common.css';

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  return (
    <AntHeader className='custom-header bg-menu'>
      <div className='logo-container'>
        <img src={logo} alt='Sercomgas Logo' className='logo' />
      </div>
    </AntHeader>
  );
};

export default Header;
