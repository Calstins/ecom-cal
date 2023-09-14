import './App.css';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resetpassword from './pages/Resetpassword';
import Forgotpassword from './pages/Forgotpassword';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import Enquiries from './pages/Enquiries';
import Bloglist from './pages/Bloglist';
import Blogcatlist from './pages/Blogcatlist';
import Orders from './pages/Orders';
import Colourlist from './pages/Colourlist';
import Customers from './pages/Customers';
import Productlist from './pages/Productlist';
import Brandlist from './pages/Brandlist';
import Categorylist from './pages/Categorylist';
import Addblog from './pages/Addblog';
import Couponlist from './pages/Couponlist';
import Addproduct from "./pages/Addproduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/reset-password" element={<Resetpassword />} />
          <Route path="/forgot-password" element={<Forgotpassword />} />
          <Route path="/admin" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='enquiries' element={<Enquiries />} />
            <Route path='blog-list' element={<Bloglist />} />
            <Route path='blog' element={<Addblog />} />
            <Route path='list-brand' element={<Brandlist />} />
            <Route path='blog-category-list' element={<Blogcatlist />} />
            <Route path='orders' element={<Orders />} />
            <Route path='list-color' element={<Colourlist />} />
            <Route path='customers' element={<Customers />} />
            <Route path='list-product' element={<Productlist />} />
            <Route path='list-category' element={<Categorylist />} />
            <Route path='coupon-list' element={<Couponlist />} />
            <Route path="product" element={<Addproduct />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
