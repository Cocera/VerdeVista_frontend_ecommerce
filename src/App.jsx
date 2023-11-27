import './App.css';
import './fonts.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductProvider } from './context/ProductContext/ProductState.jsx';
import Home from './components/Home/Home.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Login from './components/Authentication/Login/Login.jsx';

function App() {

  return (
    <>
    <BrowserRouter>
      <ProductProvider>
        < Header />
        < Routes>
          < Route path="/" element={<Home />} />
          < Route path="/login" element={<Login />} />
        </Routes>
        < Footer />
      </ProductProvider>
    </ BrowserRouter>
    </>
  )
};

export default App;
