import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer bg--dark">
  {/*Footer Widget Bar*/}
  <section className="footer-widget-area">
    <div className="container">
      <div className="row">
        <div className="footer-widget col-lg-3 col-12 mb-lg-0 mb-4 pr-lg-4">
          <img className="footer-logo mb-4" src="img/logo--light.png" alt="Mullar" />
          <p>Mazaar is a Mulltipurpose Ecommerce Template, The spread of computers and layout programmes thus made dummy text better known.</p>
          <ul>
            <li><i className="fa fa-phone" /><span>+42 (0) 123 456 7890</span></li>
            <li><i className="fa fa-envelope-open" /><span>sales@mazaar.com</span></li>
          </ul>
        </div>
        <div className="footer-widget col-sm-4 col-md-4 col-lg-2 col-12 mb-lg-0 mb-4">
          <h6 className="footer-widget-title">Information</h6>
          <ul>
            <li><button type="button">About Us</button></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><button type="button">Portfolio</button></li>
            <li><Link to="/login_register">My account</Link></li>
            <li><button type="button">Wishlist</button></li>
          </ul>
        </div>
        <div className="footer-widget col-sm-4 col-md-4 col-lg-2 col-12 mb-lg-0 mb-4">
          <h6 className="footer-widget-title">Usefull Links</h6>
          <ul>
            <li><button type="button">Privacy Policy</button></li>
            <li><button type="button">Shipping Information</button></li>
            <li><button type="button">Terms &amp; Condition</button></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>
            <li><Link to="/login_register">My account</Link></li>
            <li><button type="button">Order Tracking</button></li>
          </ul>
        </div>
        <div className="footer-widget col-sm-4 col-md-4 col-lg-2 col-12 mb-lg-0 mb-4">
          <h6 className="footer-widget-title">Our Link</h6>
          <ul>
            <li><button type="button">Men</button></li>
            <li><button type="button">Women</button></li>
            <li><button type="button">Fashion</button></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li><button type="button">Brand</button></li>
            <li><button type="button">Accessories</button></li>
            <li><button type="button">Beauty</button></li>
          </ul>
        </div>
        <div className="footer-widget col-lg-3 col-12 mb-lg-0 mb-3">
          <h6 className="footer-widget-title">Signup for Newsletter</h6>
          <form className="pt-2">
            <p>Sign up for our newsletter to get the latest news, announcements and special</p>
            <div className="form-field-wrapper">
              <input className="newsletter-input form-full" placeholder="Email Address" type="email" />
              <button className="newsletter-btn btn btn--primary" type="submit">Go</button>
            </div>
          </form>
          <ul className="social">
            <li>
              <a href="#"><i className="fa fa-twitter" /></a>
            </li>
            <li>
              <a href="#"><i className="fa fa-facebook" /></a>
            </li>
            <li>
              <a href="#"><i className="fa fa-google" /></a>
            </li>
            <li>
              <a href="#"><i className="fa fa-linkedin-square" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/*Footer Copyright Bar*/}
  <section className="footer-bottom-area">
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center text-md-left">
          <p className="footer-copyright">© 2026 Mazaar Shop</p>
        </div>
        <div className="col-md-6 text-center text-md-right">
          <img src="img/payment_logos.png" alt="payment logos" />
        </div>
      </div>
    </div>
  </section>
</footer>

  )
}

export default Footer