import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import './App.css';
import About from './Pages/About/About';
import Productlisting from './Pages/Product_listing/Productlisting';
import Productdetail from './Pages/Product_detail/Productdetail';
import Cart from './Pages/Cart/Cart';
import Checkout from './Pages/Checkout/Checkout';
import Contact from './Pages/Contact/Contact';
import Loginorregister from './Pages/Login_register/Loginorregister';
import Blog from './Pages/Blog_list/Blog';
import Blogsingle from './Pages/Blog-single/Blogsingle';
import Error from './Pages/Error';

function App() {
  return (
  <>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/product_listing" element={<Productlisting />} />
    <Route path="/product_detail" element={<Productdetail />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/login_register" element={<Loginorregister />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog-single" element={<Blogsingle />} />
    <Route path="/error" element={<Error />} />
  </Routes>
  </>
  );
}

export default App;
