
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Pages/Home/Home';
import Navigation from './Components/Shared/Navigation/Navigation';
import Authenticate from './Pages/Authenticate/Authenticate';
import Rooms from './Pages/Rooms/Rooms';
import Activate from './Pages/Activate/Activate';
import { useSelector } from "react-redux"




function App() {

  const { user , isAuth} = useSelector((state) => state.auth )


  return (
    <>

      <BrowserRouter>

        <Navigation />

        <Routes>

          <Route path="/rooms" element={<Rooms />} />

          <Route path="/" element={<Home />} />

          {
            isAuth ? (
              <Route path="/" element={
                <GuestRoute />
              } />
            ) : (<Route path="/" element={<Home />} />)
          }

          {/* Authenticate page per jane ke liya */}
          {
            isAuth ? (
              <Route path="/authenticate" element={
                <GuestRoute />
              } />
            ) : (<Route path="/authenticate" element={<Authenticate />} />)
          }

          {/* Activate ke ender na ja ske lisliya */}
          {
            !isAuth ? (
              <Route path="/activate" element={
                <SemiProtectedRoute pathRen="/" />
              } />
            )
              : isAuth && !user.activated ? (<Route path="/activate" element={<Activate />} />) :
                (<Route path="/activate" element= {<SemiProtectedRoute pathRen="/rooms" />}/> )
          }

          {/* room ke enter na ho isliya */}

          {
            !isAuth ? (
              <Route path="/rooms" element={
                <ProtectedRoute pathRen="/" />
              } />
            )
              : isAuth && !user.activated ? (<Route path="/rooms" element={<ProtectedRoute pathRen="/activate" />} />)

                : (<Route path="/rooms" element={<Rooms />} />)

          }





        </Routes>

      </BrowserRouter>
    </>
  );
}

const GuestRoute = ({ location },) => (
  <Navigate to={
    {
      pathname: "/rooms",
      state: { from: location },
    }
  } />
)


const SemiProtectedRoute = ({ location }, pathRen) => (
  <Navigate to={
    {
      pathname: pathRen,
      state: { from: location },
    }
  } />
)


const ProtectedRoute = ({ location }, pathRen) => (
  <Navigate to={
    {
      pathname: pathRen,
      state: { from: location },
    }
  } />
)










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
