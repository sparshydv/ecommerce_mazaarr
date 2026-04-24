import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [activemenu, setactivemenu] = useState("");
  const [mobileordesktop, setmobileordesktop] = useState(false);

  return (
    <header
      id="header"
      className="header header--sticky"
      data-header-hover="true"
    >
      {/*Header Navigation*/}
      <nav id="navigation" className="header-nav">
        <div className="container-fluid">
          <div className="row">
            {/*Logo*/}
            <div className="site-logo">
              <Link to="/">
                <img
                  src="img/logo--dark.png"
                  className="logo-dark"
                  alt="Mazaar"
                />
                <img
                  src="img/logo--light.png"
                  className="logo-light"
                  alt="Mazaar"
                />
              </Link>
            </div>
            {/*End Logo*/}



            {/*Navigation Menu*/}
            <div className={mobileordesktop ? "nav-menu show-on-mobile" : "nav-menu"}>
              <ul>
                <li className="nav-menu-item">
                  <Link to="/">Home</Link>
                  {/*Dropdown*/}
                  <div className="nav-dropdown col3-dropdown">
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <ul>
                          <li>
                            <Link to="/">
                              <img
                                src="img/banner/themeshots/shot_home01.jpg"
                                alt="Banner"
                              />
                              <figure className="text--center">Home 01</figure>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <ul>
                          <li>
                            <a href="home_02.html">
                              <img
                                src="img/banner/themeshots/shot_home02.jpg"
                                alt="Banner"
                              />
                              <figure className="text--center">Home 02</figure>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <ul>
                          <li>
                            <a href="home_03.html">
                              <img
                                src="img/banner/themeshots/shot_home03.jpg"
                                alt="Banner"
                              />
                              <figure className="text--center">Home 03</figure>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <ul>
                          <li>
                            <a href="home_04.html">
                              <img
                                src="img/banner/themeshots/shot_home04.jpg"
                                alt="Banner"
                              />
                              <figure className="text--center">Home 04</figure>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <ul>
                          <li>
                            <a href="home_05.html">
                              <img
                                src="img/banner/themeshots/shot_home05.jpg"
                                alt="Banner"
                              />
                              <figure className="text--center">Home 05</figure>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <ul>
                          <li>
                            <a href="home_06.html">
                              <img
                                src="img/banner/themeshots/shot_home06.jpg"
                                alt="Banner"
                              />
                              <figure className="text--center">Home 06</figure>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*End Dropdown*/}
                </li>
                <li className="nav-menu-item mega-menu">
                  <button
                    type="button"
                    onMouseLeave={() => {
                      setactivemenu("");
                    }}
                    onMouseEnter={() => {
                      setactivemenu("Shop");
                    }}
                  >
                    Shop
                  </button>
                  {/*Dropdown*/}
                  <div
                    className="nav-dropdown mega-dropdown"
                    onMouseLeave={() => {
                      setactivemenu("");
                    }}
                    onMouseEnter={() => {
                      setactivemenu("Shop");
                    }}
                    style={{
                      display: activemenu === "Shop" ? "block" : "none",
                      opacity: 1,
                    }}
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-3">
                          <ul>
                            <li>
                              <span className="dropdown-title">
                                All Collection
                              </span>
                            </li>
                            <li><button type="button">New Clothes</button></li>
                            <li><button type="button">Back In Stock Clothes</button></li>
                            <li><button type="button">Dresses</button></li>
                            <li><button type="button">Trousers &amp; Chinos</button></li>
                            <li><button type="button">Tops &amp; Tees</button></li>
                            <li><button type="button">Shirt</button></li>
                            <li><button type="button">Sweatshirts</button></li>
                            <li><button type="button">Sweaters</button></li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul>
                            <li>
                              <span className="dropdown-title">
                                Women's Fashion
                              </span>
                            </li>
                            <li>
                              <a href="#">Ethnic Wear</a>
                            </li>
                            <li>
                              <a href="#">Sarees</a>
                            </li>
                            <li>
                              <a href="#">Dress Material</a>
                            </li>
                            <li>
                              <a href="#">Kurtis</a>
                            </li>
                            <li>
                              <a href="#">Saree Combo</a>
                            </li>
                            <li>
                              <a href="#">Tops &amp; Tunics</a>
                            </li>
                            <li>
                              <a href="#">Dresses</a>
                            </li>
                            <li>
                              <a href="#">Tees &amp; Polo</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul>
                            <li>
                              <span className="dropdown-title">
                                Man Fashion
                              </span>
                            </li>
                            <li>
                              <a href="#">T-shirts</a>
                            </li>
                            <li>
                              <a href="#">Kurtas, Pyjamas &amp; Dhotis</a>
                            </li>
                            <li>
                              <a href="#">Shorts &amp; Three-Fourths</a>
                            </li>
                            <li>
                              <a href="#">Shirts</a>
                            </li>
                            <li>
                              <a href="#">Top &amp; Bottom Sets</a>
                            </li>
                            <li>
                              <a href="#">Ride On &amp; Scooters</a>
                            </li>
                            <li>
                              <a href="#">Electronic Toys</a>
                            </li>
                            <li>
                              <a href="#">Soft Toys</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul>
                            <li>
                              <a href="#">
                                <img
                                  src="img/banner/nav_banner01.jpg"
                                  alt="banner"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End Dropdown*/}
                </li>
                <li className="nav-menu-item">
                  <button
                    type="button"
                    onMouseLeave={() => {
                      setactivemenu("");
                    }}
                    onMouseEnter={() => {
                      setactivemenu("Man");
                    }}
                  >
                    Man
                  </button>
                  {/*Dropdown*/}
                  <div
                    className="nav-dropdown col2-dropdown"
                    onMouseLeave={() => {
                      setactivemenu("");
                    }}
                    onMouseEnter={() => {
                      setactivemenu("Man");
                    }}
                    style={{
                      display: activemenu === "Man" ? "block" : "none",
                      opacity: 1,
                    }}
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <ul>
                          <li>
                            <span className="dropdown-title">Chothes</span>
                          </li>
                          <li><button type="button">New In clothing</button></li>
                          <li><button type="button">New In Footwear</button></li>
                          <li><button type="button">New In Bags</button></li>
                          <li><button type="button">New In Watches</button></li>
                          <li><button type="button">Shirt</button></li>
                          <li><button type="button">Jeans</button></li>
                          <li><button type="button">Casual Trousers</button></li>
                          <li><button type="button">Suits &amp; Blazers</button></li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <ul>
                          <li>
                            <span className="dropdown-title">Watches</span>
                          </li>
                          <li><button type="button">Analog</button></li>
                          <li><button type="button">Chronograph</button></li>
                          <li><button type="button">Digital</button></li>
                          <li><button type="button">Watch Cases</button></li>
                          <li><button type="button">Shoes</button></li>
                          <li><button type="button">Lether Wallets</button></li>
                          <li><button type="button">Belts</button></li>
                          <li><button type="button">Accesories</button></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*End Dropdown*/}
                </li>
                <li className="nav-menu-item">
                  <Link
                    to="/product_listing"
                    onMouseLeave={() => {
                      setactivemenu("");
                    }}
                    onMouseEnter={() => {
                      setactivemenu("Women");
                    }}
                  >
                    Women
                  </Link>
                  {/*Dropdown*/}
                  <div
                    className="nav-dropdown col3-dropdown center"
                    onMouseLeave={() => {
                      setactivemenu("");
                    }}
                    onMouseEnter={() => {
                      setactivemenu("Women");
                    }}
                    style={{
                      display: activemenu === "Women" ? "block" : "none",
                      opacity: 1,
                    }}
                  >
                    <div className="row">
                      <div className="col-lg-4">
                        <ul>
                          <li>
                            <span className="dropdown-title">Clothes</span>
                          </li>
                          <li><button type="button">Back In Stock Clothes</button></li>
                          <li><button type="button">Dresses</button></li>
                          <li><button type="button">Tops &amp; Tees</button></li>
                          <li><button type="button">Sweatshirts</button></li>
                          <li><button type="button">Sweaters</button></li>
                          <li><button type="button">Kimonos</button></li>
                          <li><button type="button">Jackets</button></li>
                        </ul>
                      </div>
                      <div className="col-lg-4">
                        <ul>
                          <li>
                            <span className="dropdown-title">
                              Beauty &amp; Wellness
                            </span>
                          </li>
                          <li><button type="button">All Wellness</button></li>
                          <li><button type="button">Makeup</button></li>
                          <li><button type="button">Skincare</button></li>
                          <li><button type="button">Body</button></li>
                          <li><button type="button">Sun Care</button></li>
                          <li><button type="button">Hair</button></li>
                          <li><button type="button">Aromatherapy</button></li>
                        </ul>
                      </div>
                      <div className="col-lg-4">
                        <ul>
                          <li>
                            <span className="dropdown-title">Accesories</span>
                          </li>
                          <li><button type="button">New Accesories</button></li>
                          <li><button type="button">Jewelry</button></li>
                          <li><button type="button">Bags</button></li>
                          <li><button type="button">Hats</button></li>
                          <li><button type="button">Sunglasses</button></li>
                          <li><button type="button">Scarves</button></li>
                          <li><button type="button">Belts</button></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*End Dropdown*/}
                </li>
                <li className="nav-menu-item mega-menu">
                  <button
                    type="button"
                    className="sale-color"
                    onMouseLeave={() => {
                      setactivemenu("");
                    }}
                    onMouseEnter={() => {
                      setactivemenu("Sale");
                    }}
                  >
                    Sale
                  </button>
                  {/*Dropdown*/}
                  <div
                    className="nav-dropdown mega-dropdown"
                    onMouseLeave={() => {
                      setactivemenu("");
                    }}
                    onMouseEnter={() => {
                      setactivemenu("Sale");
                    }}
                    style={{
                      display: activemenu === "Sale" ? "block" : "none",
                      opacity: 1,
                    }}
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-3">
                          <ul>
                            <li><button type="button">New Sale</button></li>
                            <li><button type="button">All Sale</button></li>
                            <li><button type="button">Featured Sale</button></li>
                            <li>
                              <button type="button">Sale Dresses</button>
                            </li>
                            <li>
                              <button type="button">Sale Tops</button>
                            </li>
                            <li>
                              <button type="button">Sale Sweaters</button>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul>
                            <li>
                              <button type="button">Sale Jackets &amp; Outerwear </button>
                            </li>
                            <li>
                              <button type="button">Sale Bottoms</button>
                            </li>
                            <li>
                              <button type="button">Sale Intimates</button>
                            </li>
                            <li>
                              <button type="button">Sale Accessories</button>
                            </li>
                            <li>
                              <button type="button">Sale Shoes</button>
                            </li>
                            <li>
                              <button type="button">Sale Bags</button>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul>
                            <li>
                              <button type="button">Sale Beauty &amp; Wellness</button>
                            </li>
                            <li>
                              <button type="button">Sale FP Movement</button>
                            </li>
                            <li>
                              <button type="button">Sale Swim</button>
                            </li>
                            <li>
                              <button type="button">
                                Sale FP Beach &amp; Endless Summer{" "}
                              </button>
                            </li>
                            <li>
                              <button type="button">Sale Under $19.95</button>
                            </li>
                            <li>
                              <button type="button">Sale Sport</button>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul>
                            <li>
                              <button type="button">Sale Under $29.95 </button>
                            </li>
                            <li>
                              <button type="button">Sale Under $49.95 </button>
                            </li>
                            <li>
                              <button type="button">Sale Under $59.95 </button>
                            </li>
                            <li>
                              <button type="button">Sale Under $69.95</button>
                            </li>
                            <li>
                              <button type="button">Sale Under $89.95 </button>
                            </li>
                            <li>
                              <button type="button">Sale Under $99.95 </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End Dropdown*/}
                </li>
                <li className="nav-menu-item">
                  <button type="button">Blog</button>
                  {/*Dropdown*/}
                  <div className="nav-dropdown">
                    <ul>
                      <li className="nav-menu-item">
                        <button type="button">Blog Grid</button>
                        <ul className="nav-dropdown-sub">
                          <li>
                            <a href="blog_grid-2_col.html">2 column</a>
                          </li>
                          <li>
                            <a href="blog_grid-3_col.html">3 column</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-menu-item">
                        <a href="blog_masonry.html">Masonry</a>
                      </li>
                      <li className="nav-menu-item">
                        <button type="button">List</button>
                        <ul className="nav-dropdown-sub">
                          <li>
                            <Link to="/blog">List 1</Link>
                          </li>
                          <li>
                            <a href="blog_list-sidebar_right.html">
                              List 2 - With Sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-menu-item">
                        <Link to="/blog-single">Blog Single</Link>
                      </li>
                      <li className="nav-menu-item">
                        <button type="button">Submenu Right</button>
                        <ul className="nav-dropdown-sub">
                          <li>
                            <button type="button">Submenu 1</button>
                          </li>
                          <li>
                            <button type="button">Submenu 2</button>
                          </li>
                          <li>
                            <button type="button">Submenu 3</button>
                          </li>
                          <li>
                            <button type="button">Submenu 4</button>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-menu-item">
                        <button type="button">Submenu left</button>
                        <ul className="nav-dropdown-sub left">
                          <li>
                            <button type="button">Submenu 1</button>
                          </li>
                          <li>
                            <button type="button">Submenu 2</button>
                          </li>
                          <li>
                            <button type="button">Submenu 3</button>
                          </li>
                          <li>
                            <button type="button">Submenu 4</button>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  {/*End Dropdown*/}
                </li>
                <li className="nav-menu-item">
                  <button type="button">Pages</button>
                  {/*Dropdown*/}
                  <div className="nav-dropdown col2-dropdown left">
                    <div className="row">
                      <div className="col-lg-6">
                        <ul>
                          <li>
                            <span className="dropdown-title">Shop</span>
                          </li>
                          <li>
                            <a href="product_listing.html">
                              Shop List - Sidebar Left
                            </a>
                          </li>
                          <li>
                            <a href="product_listing-right_sidebar.html">
                              Shop List - Sidebar Right
                            </a>
                          </li>
                          <li>
                            <a href="product_listing-no_sidebar.html">
                              Shop List - No Sidebar
                            </a>
                          </li>
                          <li>
                            <Link to="/product_detail">Product Detail 1</Link>
                          </li>
                          <li>
                            <Link to="/product_detail">Product Detail 2</Link>
                          </li>
                          <li>
                            <Link to="/product_detail">Product Detail 3</Link>
                          </li>
                          <li>
                            <Link to="/product_detail">Product Detail 4</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span className="dropdown-title">Elements</span>
                          </li>
                          <li>
                            <a href="ele_accordian.html">Accordian</a>
                          </li>
                          <li>
                            <a href="ele_tabs.html">Tabs</a>
                          </li>
                          <li>
                            <a href="ele_sliders.html">Sliders</a>
                          </li>
                          <li>
                            <a href="ele_typography.html">Typography</a>
                          </li>
                          <li>
                            <a href="ele_btn-and-form.html">
                              Buttons &amp; Form
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <ul>
                          <li>
                            <span className="dropdown-title">Portfolio</span>
                          </li>
                          <li>
                            <a href="portfolio_grid.html">Portfolio Grid</a>
                          </li>
                          <li>
                            <a href="portfolio_masonry.html">
                              Portfolio Masonry
                            </a>
                          </li>
                          <li>
                            <a href="portfolio_single.html">Portfolio Single</a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span className="dropdown-title">Extra Pages</span>
                          </li>
                          <li>
                            <Link to="/cart">Cart</Link>
                          </li>
                          <li>
                            <Link to="/checkout">Checkout</Link>
                          </li>
                          <li>
                            <Link to="/login_register">
                              Login &amp; Register
                            </Link>
                          </li>
                          <li>
                            <Link to="/about">About</Link>
                          </li>
                          <li>
                            <Link to="/contact">Contact</Link>
                          </li>
                          <li>
                            <Link to="/error">Error 404</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*End Dropdown*/}
                </li>
              </ul>
            </div>
            {/*Nav Icons*/}
            <div className="nav-icons">
              <ul>
                <li className="nav-icon-item d-lg-none">
                  <div
                    className={mobileordesktop ? "nav-icon-trigger menu-mobile-btn active" : "nav-icon-trigger menu-mobile-btn"}
                    onClick={()=>{setmobileordesktop(!mobileordesktop)}}
                    title="Navigation Menu"
                  >
                    <span>
                      <i className="ti-menu" />
                    </span>
                  </div>
                </li>
                <li className="nav-icon-item">
                  <div
                    className="nav-icon-trigger search-menu-btn"
                    title="Search"
                  >
                    <span>
                      <i className="ti-search" />
                    </span>
                  </div>
                </li>
                <li className="nav-icon-item d-none d-lg-table-cell">
                  <button className="nav-icon-trigger" type="button" title="Whishlist">
                    <span>
                      <i className="ti-heart" />
                      <span className="nav-icon-count">0</span>
                    </span>
                  </button>
                </li>
                <li className="nav-icon-item">
                  <div
                    className="nav-icon-trigger cart-sidebar-btn"
                    title="Shopping Cart"
                  >
                    <span>
                      <i className="ti-bag" />
                      <span className="nav-icon-count">3</span>
                    </span>
                  </div>
                </li>
                <li className="nav-icon-item">
                  <div
                    className="nav-icon-trigger dropdown--trigger"
                    title="User Account"
                  >
                    <span>
                      <i className="ti-user" />
                    </span>
                  </div>
                  {/*Dropdown*/}
                  <div className="dropdown--menu dropdown--right">
                    <ul>
                      <li>
                        <Link to="/login_register">My Account</Link>
                      </li>
                      <li>
                        <button type="button">Order Tracking</button>
                      </li>
                      <li>
                        <button type="button">Compare</button>
                      </li>
                      <li>
                        <button type="button">Wishlist</button>
                      </li>
                      <li>
                        <Link to="/cart">Cart</Link>
                      </li>
                      <li>
                        <button type="button">Lost Password</button>
                      </li>
                      <li>
                        <hr />
                      </li>
                      <li>
                        <button
                          type="button"
                          className="btn btn--primary btn--sm btn--full"
                        >
                          <i className="fa fa-shopping-cart" />
                          Purchase Now
                        </button>
                      </li>
                    </ul>
                  </div>
                  {/*End Dropdown*/}
                </li>
              </ul>
            </div>
            {/*End Nav Icons*/}
            {/*Search Bar*/}
            <div className="searchbar-menu">
              <div className="searchbar-menu-inner">
                {/*Search Bar*/}
                <div className="search-form-wrap">
                  <form>
                    <button className="search-icon btn--lg">
                      <i className="ti-search" />
                    </button>
                    <input
                      className="search-field input--lg"
                      placeholder="Search here..."
                      defaultValue
                      name="s"
                      title="Search..."
                      type="search"
                      autoComplete="off"
                    />
                    <span className="search-close-icon">
                      <i className="ti-close" />
                    </span>
                  </form>
                </div>
                {/*End Search Bar*/}
                {/*Search Result Bar*/}
                <div className="search-results-wrap">
                  <div className="search-results-loading">
                    <span className="fa fa-spinner fa-spin" />
                  </div>
                  <div className="search-results-text woocommerce">
                    <ul>
                      <li>Nothing found</li>
                    </ul>
                  </div>
                </div>
                {/*End Search Result Bar*/}
              </div>
            </div>
            {/*End Search Bar*/}
          </div>
        </div>
      </nav>
      {/*End Header Navigation*/}
    </header>
  );
};

export default Header;
