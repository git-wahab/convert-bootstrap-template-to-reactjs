import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="hero-slider">
        <div
          className="slider-item th-fullpage hero-area"
          style={{
            backgroundImage: "url('assets/images/slider/slider-1.jpg')",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8 text-center">
                <p
                  data-duration-in=".3"
                  data-animation-in="fadeInUp"
                  data-delay-in=".1"
                >
                  PRODUCTS
                </p>
                <h1
                  data-duration-in=".3"
                  data-animation-in="fadeInUp"
                  data-delay-in=".5"
                >
                  The beauty of nature <br /> is hidden in details.
                </h1>
                <a
                  data-duration-in=".3"
                  data-animation-in="fadeInUp"
                  data-delay-in=".8"
                  className="btn"
                  href="shop.html"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="products section bg-gray">
        <div className="container">
          <div className="row">
            <div className="title text-center">
              <h2>Trendy Products</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="product-item">
                <div className="product-thumb">
                  <span className="bage">Sale</span>
                  <img
                    className="img-responsive"
                    src="/assets/images/shop/products/product-1.jpg"
                    alt="product-img"
                  />
                  <div className="preview-meta">
                    <ul>
                      <li>
                        <span data-toggle="modal" data-target="#product-modal">
                          <i className="tf-ion-ios-eye"></i>
                        </span>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="tf-ion-ios-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="tf-ion-android-cart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-content">
                  <h4>
                    <Link to="/product/detail">Reef Boardsport</Link>
                    {/* <a href="product-single.html">Reef Boardsport</a> */}
                  </h4>
                  <p className="price">$200</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-item">
                <div className="product-thumb">
                  <img
                    className="img-responsive"
                    src="/assets/images/shop/products/product-2.jpg"
                    alt="product-img"
                  />
                  <div className="preview-meta">
                    <ul>
                      <li>
                        <span data-toggle="modal" data-target="#product-modal">
                          <i className="tf-ion-ios-eye"></i>
                        </span>
                      </li>
                      <li>
                        <a href="#">
                          <i className="tf-ion-ios-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="tf-ion-android-cart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-content">
                  <h4>
                    <a href="product-single.html">Rainbow Shoes</a>
                  </h4>
                  <p className="price">$200</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-item">
                <div className="product-thumb">
                  <img
                    className="img-responsive"
                    src="/assets/images/shop/products/product-3.jpg"
                    alt="product-img"
                  />
                  <div className="preview-meta">
                    <button
                      className="btn btn-secondary btn-lg"
                      type="button" // Prevents accidental form submission
                      onClick={() => console.log("View item clicked")} // Add your handler
                    >
                      View Item
                    </button>
                  </div>
                </div>
                <div className="product-content">
                  <h4>
                    <a href="product-single.html">Strayhorn SP</a>
                  </h4>
                  <p className="price">$230</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-category section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title text-center">
                <h2>Product Category</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="category-box">
                <a href="#!">
                  <img
                    src="/assets/images/shop/category/category-1.jpg"
                    alt=""
                  />
                  <div className="content">
                    <h3>Clothes Sales</h3>
                    <p>Shop New Season Clothing</p>
                  </div>
                </a>
              </div>
              <div className="category-box">
                <a href="#!">
                  <img
                    src="/assets/images/shop/category/category-2.jpg"
                    alt=""
                  />
                  <div className="content">
                    <h3>Smart Casuals</h3>
                    <p>Get Wide Range Selection</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="category-box category-box-2">
                <a href="#!">
                  <img
                    src="/assets/images/shop/category/category-3.jpg"
                    alt=""
                  />
                  <div className="content">
                    <h3>Jewellery</h3>
                    <p>Special Design Comes First</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
