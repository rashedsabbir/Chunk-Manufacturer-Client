import { BrowserRouter,Switch,Route } from 'react-router-dom';

import AuthProvider from './Component/hooks/AuthProvider/AuthProvider';
import PrivateRoute from './Component/hooks/PrivateRoute/PrivateRoute';
import './App.css';
import Header from './Component/Shared/Header/Header';
import Footer from './Component/Shared/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
  <BrowserRouter>
   <Header/>
   <Footer/>
   </BrowserRouter>
  </AuthProvider>
      </div>
    
  );
}

export default App;
