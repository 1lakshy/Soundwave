import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navigation from './Components/Shared/Navigation/Navigation';
import Authenticate from './Pages/Authenticate/Authenticate';
import Rooms from './Pages/Rooms/Rooms';
import Activate from './Pages/Activate/Activate';
import { useSelector } from 'react-redux';
import { useLoadingWithRefresh } from './hooks/useLoadingWithRefresh';

function App() {
  const { user, isAuth } = useSelector((state) => state.auth);
  const { loading } = useLoadingWithRefresh();

  return loading ? (
    'loading...'
  ) : (
    <>
      <BrowserRouter>
        <Navigation />

        <Routes>
          {/* <Route path="/rooms" element={<Rooms />} /> */}

          {/* <Route path="/" element={<Home />} />
          <Route path="/authenticate" element={<Authenticate />} /> */}
          {/* <Route path="/activate" element={<Activate />} />  */}

          {/* room ke enter na ho isliya */}
          {isAuth && user.activated ? (
            <Route path="/" element={<Rooms />} />
          ) : (
            <Route path="/" element={<Home />} />
          )}

          {isAuth && user.activated ? (
            <Route path="/" element={<Rooms />} />
          ) : (
            <Route path="/rooms" element={<Home />} />
          )}

          {!isAuth && !user.activated ? (
            <Route path="/rooms" element={<ProtectedRoute pathRen="/" />} />
          ) : (
            <Route path="/rooms" element={<Rooms />} />
          )}
          {!isAuth && !user.activated ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route path="/rooms" element={<Rooms />} />
          )}

          {isAuth && user.activated ? (
            <Route path="/rooms" element={<Rooms />} />
          ) : (
            <Route path="/rooms" element={<Home />} />
          )}

          {isAuth && !user.activated ? (
            <Route
              path="/rooms"
              element={<ProtectedRoute pathRen="activate" />}
            />
          ) : (
            <Route path="/rooms" element={<ProtectedRoute pathRen="/" />} />
          )}

          {!isAuth ? (
            <Route path="/activate" element={<Home />} />
          ) : (
            <Route path="/activate" element={<Activate />} />
          )}

          {!isAuth ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route path="/" element={<Activate />} />
          )}

          {!isAuth ? (
            <Route path="rooms" element={<Home />} />
          ) : (
            <Route path="rooms" element={<Activate />} />
          )}

          {/* Authenticate page per jane ke liya */}
          {isAuth ? (
            <Route path="/authenticate" element={<Activate />} />
          ) : (
            <Route path="/authenticate" element={<Authenticate />} />
          )}

          {/* Activate ke ender na ja ske lisliya */}
          {!isAuth ? (
            <Route
              path="/activate"
              element={<SemiProtectedRoute pathRen="/authenticate" />}
            />
          ) : (
            <Route
              path="/activate"
              element={<SemiProtectedRoute pathRen="/activate" />}
            />
          )}

          {!isAuth ? (
            <Route
              path="/rooms"
              element={<SemiProtectedRoute pathRen="/authenticate" />}
            />
          ) : (
            <Route
              path="/rooms"
              element={<SemiProtectedRoute pathRen="/activate" />}
            />
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

const GuestRoute = ({ location }) => (
  <Navigate
    to={{
      pathname: '/rooms',
      state: { from: location },
    }}
  />
);

const SemiProtectedRoute = ({ location }, pathRen) => (
  <Navigate
    to={{
      pathname: pathRen,
      state: { from: location },
    }}
  />
);

const ProtectedRoute = ({ location }, pathRen) => (
  <Navigate
    to={{
      pathname: pathRen,
      state: { from: location },
    }}
  />
);

// const GuestRoute = ({ children }) => {
//   return (
//     isAuth ? (
//       <Navigate to={
//         {
//           pathname: "/rooms",
//         }
//       } />
//     ) : (
//       children
//     )

//   );
// };

// const SemiProtectedRoute = ({ children }) => {
//   return (
//     !isAuth ? (
//       <Navigate to={{
//         pathname: "/"
//       }}
//       />
//     ) : isAuth && !user.activated ? (
//       children
//     ) : (
//       <Navigate to={{
//         pathname: "/rooms"
//       }}
//       />
//     )
//   );

// };

// const ProtectedRoute = ({ children }) => {
//   return (
//     !isAuth ? (
//       <Navigate to={{
//         pathname: "/",
//       }}
//       />
//     ) : isAuth && !user.activated ? (
//       <Navigate to={{
//         pathname: "/activate",
//       }}
//       />
//     ) : (
//       children
//     )
//   );

// };

export default App;
