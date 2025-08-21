import NavBar from "./components/NavBar/Navbar.jsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import {Gallary, Contact, About, Services} from "./components/NavBar/Pages";
//import About from "./components/NavBar/Pages/About";
//import Services from "./components/NavBar/Pages/Services/Services";
import Footer from "./components/Footer/Footer.jsx"
import Home from "./components/NavBar/Pages/Home/Home.jsx"
import Products from "./components/NavBar/Pages/Products/Products.jsx"
// import './fonts/index.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/gallary" element={<Gallary/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
