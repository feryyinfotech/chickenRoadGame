import { Route, Routes } from 'react-router-dom';
import { adminroutes } from './AdminRoutes';
import AdminLayout from './Adminpages/Layout';
import BeforeLogin from './BeforeLogin';
import LayoutAviator from './GamePage/Layout';
import PlayGame from './GamePage/PlayGame';
import SplashScreen from './SplashScreen';
import './assets/style/main.css';
import './assets/style/style.css';
import Zptokenadd from './pages/auth/Component/Zptokenadd';
import ZptokenPayout from './pages/auth/Component/Zptokenpayout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/home/Dashboard';
import { routes } from './route';
import { deCryptData } from './shared/secret';
import ForgetPassword from './pages/auth/ForgetPassword';
import Chickenroad from './pages/ChicknRoad/Chickenroad';

function App() {
  const userData = deCryptData(localStorage.getItem('user_id'));
  const isAuthenticated = userData ? true : false;

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/zptokenadd" element={<Zptokenadd />} />
      <Route path="/zptokenpayout" element={<ZptokenPayout />} />
      <Route path="/forgot" element={<ForgetPassword />} />

      <Route path="/chickenroad" element={<Chickenroad />} />
      <Route path="/register" element={<Register />} />
      <Route path="/before-login" element={<BeforeLogin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route
        path="/playgame"
        element={<LayoutAviator component={<PlayGame />} />}
      />

      {isAuthenticated ? (
        routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))
      ) : (
        <Route path="/" element={<Login />} />
      )}

      {isAuthenticated &&
      (userData.user_type === 'Admin' ||
        userData.user_type === 'Super Admin') ? (
        adminroutes.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            element={
              <AdminLayout
                id={route.id}
                navLink={route.path}
                navItem={route.navItem}
                component={route.component}
              />
            }
          />
        ))
      ) : (
        <Route path="/" element={<Login />} />
      )}

      <Route path="/splash" element={<SplashScreen />} />
    </Routes>
  );
}

export default App;
