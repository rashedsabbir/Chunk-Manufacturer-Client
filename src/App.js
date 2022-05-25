import { BrowserRouter, Switch ,Route } from 'react-router-dom';

import AuthProvider from './Component/hooks/AuthProvider/AuthProvider';
import PrivateRoute from './Component/hooks/PrivateRoute/PrivateRoute';
import './App.css';
import Header from './Component/Shared/Header/Header';
import Footer from './Component/Shared/Footer/Footer';
import NotFound from './Component/Pages/NotFound/NotFound';
import Blog from './Component/Pages/Blog/Blog'
import MyPortfolio from './Component/Pages/MyPortfolio/MyPortfolio';
import Login from './Component/Pages/Authentication/Login/Login';
import Register from './Component/Pages/Authentication/Register/Register';
import NewUser from './Component/Pages/Authentication/NewUser/NewUser';
import DashBoard from './Component/Pages/Dashboard/DashBoard/DashBoard';
import UpdateProfile from './Component/Pages/Dashboard/UpdateProfile/UpdateProfile';
import Home from './Component/Pages/Home/Home/Home';
import Gallery from './Component/Pages/Home/Gallery/Gallery';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
  <BrowserRouter>
   <Header/>
   <Switch>
   <Route exact path='/'>
 <Home></Home>
     </Route>
     <Route path='/home'>
 <Home></Home>
 </Route>
 <Route path='/gallery'>
 <Gallery></Gallery>
     </Route>
   <Route path='/login'>
 <Login></Login>
     </Route>
     <Route path='/register'>
 <Register></Register>
     </Route>
   <Route path='/blog'>
 <Blog></Blog>
     </Route>
   <Route path='/my-portfolio'>
 <MyPortfolio></MyPortfolio>
     </Route>
     
     <PrivateRoute path='/new_user'>
 <NewUser></NewUser>
     </PrivateRoute>
     <PrivateRoute path='/dashboard'>
 <DashBoard></DashBoard>
     </PrivateRoute>
     <PrivateRoute path="/update-profile">
          <UpdateProfile></UpdateProfile>
        </PrivateRoute>
   <Route path='*'>
 <NotFound></NotFound>
     </Route>
   </Switch>
   <Footer/>
   </BrowserRouter>
  </AuthProvider>
      </div>
    
  );
}

export default App;
