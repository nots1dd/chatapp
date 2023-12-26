import { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../src/screens/home";
import Login from "../src/screens/login";
import Register from "../src/screens/register";
import { AuthContext } from "./context/AuthContext";
import './style.css';

function App() {
  const currentUser = useContext(AuthContext);
  console.log(currentUser)
  const ProtectedRoute = ({children}) => {
    if(currentUser === null){
      return <Navigate to="login" />;
    }

    return children
  };
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute>
        }/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
