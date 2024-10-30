import { Spin } from 'antd';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/layout/header';
import Sidebar from './components/layout/sidebar';

function App() {
  const Operation = React.lazy(() => import('./pages/operationsPage'));
  const Client = React.lazy(() => import('./pages/clientsPage'));

  return (
    <div className='App'>
      <Header />
      <BrowserRouter>
        <div className='layout'>
          <Sidebar />
          <div className='content'>
            <Suspense
              fallback={
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                  }}
                >
                  <Spin size='large' />
                </div>
              }
            >
              <Routes>
                <Route path='/' element={<Operation />} />
                <Route path='/clients' element={<Client />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
