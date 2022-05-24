import { BrowserRouter,Switch,Route } from 'react-router-dom';

import AuthProvider from './Component/hooks/AuthProvider/AuthProvider';
import PrivateRoute from './Component/hooks/PrivateRoute/PrivateRoute';
import './App.css';

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-amber-600 underline">My Project</h1>
      </div>
    
  );
}

export default App;
