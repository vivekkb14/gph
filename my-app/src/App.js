import NavBar from "./components/NavBar/Navbar";
import { Route, Routes } from "react-router-dom";
import {Gallary, Contact, About, Services} from "./components/NavBar/Pages";
//import About from "./components/NavBar/Pages/About";
//import Services from "./components/NavBar/Pages/Services/Services";
import Footer from "./components/Footer/Footer"
import Home from "./components/NavBar/Pages/Home/Home"

function App() {
  return (
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/gallary" element={<Gallary/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
