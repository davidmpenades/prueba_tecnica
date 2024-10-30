import Header from './components/layout/header';
import Sidebar from './components/layout/sidebar';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />
      <BrowserRouter>
        <div className='layout'>
          <Sidebar />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
