import NavBar from "./components/NavBar/Navbar.jsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import {Gallary, Contact, About, Services} from "./components/NavBar/Pages";
import Footer from "./components/Footer/Footer.jsx"
import Home from "./components/NavBar/Pages/Home/Home.jsx"
import Products from "./components/NavBar/Pages/Products/Products.jsx"
import AddProduct from "./components/NavBar/Pages/Products/AddProduct/AddProduct.jsx"
import AdminProducts from "./components/NavBar/Pages/Products/AdminProducts/AdminProducts.jsx"
import Login from "./components/Auth/Login.jsx"
import PrivateRoute from "./components/Auth/PrivateRoute.jsx"
import AdminHeader from "./components/Auth/AdminHeader.jsx"
// import './fonts/index.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login route without main layout */}
        <Route path="/login" element={<Login />} />
        
        {/* Admin routes without navbar */}
        <Route path="/admin/*" element={
          <PrivateRoute>
            <div className="admin-container">
              <AdminHeader />
              <Routes>
                <Route index element={<AdminProducts />} />
                <Route path="/products/add" element={<AddProduct />} />
              </Routes>
            </div>
          </PrivateRoute>
        } />

        {/* Public routes with main layout */}
        <Route path="/*" element={
          <div className="container">
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallary" element={<Gallary />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />} />
            </Routes>
            <Footer />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
