import './App.css';
import './fonts.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductProvider } from './context/ProductContext/ProductState.jsx';
import { UserProvider } from './context/UserContext/UserState.jsx';
import Home from './components/Home/Home.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Login from './components/Authentication/Login/Login.jsx';

function App() {

  return (
    <>
    <UserProvider>
    <ProductProvider>
      <BrowserRouter>
        < Header />
        < Routes>
          < Route path="/" element={<Home />} />
          < Route path="/login" element={<Login />} />
        </Routes>
        {/* < Footer /> */}
      </ BrowserRouter>
    </ProductProvider>
    </UserProvider>
    </>
  )
};

export default App;
