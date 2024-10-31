import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'sonner';
import Header from './components/layout/header';
import Sidebar from './components/layout/sidebar';

function App() {
  const Operation = React.lazy(() => import('./pages/operationsPage'));
  const Client = React.lazy(() => import('./pages/clientsPage'));
  const Marketer = React.lazy(() => import('./pages/marketerPage'));

  return (
    <div className='App'>
      <Header />
      <BrowserRouter>
        <div className='layout'>
          <Sidebar />
          <div className='content'>
            <Suspense>
              <Toaster
                position='top-left'
                richColors
                expand={true}
                closeButton={true}
              />
              <Routes>
                <Route path='/' element={<Operation />} />
                <Route path='/clients' element={<Client />} />
                <Route path='/marketers' element={<Marketer />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
