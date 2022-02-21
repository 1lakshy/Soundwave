
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Pages/Home/Home';
import Navigation from './Components/Shared/Navigation/Navigation';
import Authenticate from './Pages/Authenticate/Authenticate';
import Rooms from './Pages/Rooms/Rooms';
import Activate from './Pages/Activate/Activate';

const isAuth = true;
const user = {
  activated: false,
}

function App() {

  return (
    <>

      <BrowserRouter>

        <Navigation />

        <Routes>
          <Route path="/" element={<GuestRoute  >
            <Home />
          </GuestRoute>
          } />

          <Route path="/rooms" element={<Rooms />} />

          <Route path="/authenticate"
            element={<GuestRoute  >
              <Authenticate />
            </GuestRoute>
            } />

          <Route path="/activate" element={
            <SemiProtectedRoute>
              <Activate />
            </SemiProtectedRoute>
          } />


          <Route path="/rooms" element={
            <ProtectedRoute>
              <Rooms />
            </ProtectedRoute>
          } />

        </Routes>


        {/* <Route path="/register"  element={<Register/>} />  */}


      </BrowserRouter>
    </>
  );
}

const GuestRoute = ({ children }) => {
  return (
    isAuth ? (
      <Navigate to={
        {
          pathname: "/rooms",
        }
      } />
    ) : (
      children
    )

  );
};


const SemiProtectedRoute = ({ children }) => {
  return (
    !isAuth ? (
      <Navigate to={{
        pathname: "/"
      }}
      />
    ) : isAuth && !user.activated ? (
      children
    ) : (
      <Navigate to={{
        pathname: "/rooms"
      }}
      />
    )
  );

};

const ProtectedRoute = ({ children }) => {
  return (
    !isAuth ? (
      <Navigate to={{
        pathname: "/",
      }}
      />
    ) : isAuth && !user.activated ? (
      <Navigate to={{
        pathname: "/activate",
      }}
      />
    ) : (
      children
    )
  );

};


export default App;
