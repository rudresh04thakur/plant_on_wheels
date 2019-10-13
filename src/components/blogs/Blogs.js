import React, { Component } from "react";
import "./Blogs.css";
export class Blogs extends Component {
  render() {
    return (
      <div className="component-Blogs">
        <div className="breadcrumb-area gray-bg">
          <div className="container">
            <div className="breadcrumb-content">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="active">Blog Details Standerd </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="blog-area ptb-75">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-xl-9 col-md-8">
                <div className="blog-details-wrapper">
                  <div className="single-blog-wrapper">
                    <div className="blog-img mb-30">
                      <img
                        alt=""
                        src={require("../../assets/img/blog/blog-3.jpg")}
                      />
                    </div>
                    <div className="blog-content">
                      <h2>New Collection Our Shop </h2>
                      <div className="blog-date-categori">
                        <ul>
                          <li>October 14, 2018 </li>
                          <li>Admin</li>
                        </ul>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprhendit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qei
                      officia deser mollit anim id est laborum. Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et
                    </p>
                    <div className="highlights-title-wrapper">
                      <div className="highlights-img">
                        <img
                          alt=""
                          src={require("../../assets/img/blog/blog-link-post2.png")}
                        />
                      </div>
                      <div className="importent-title">
                        <h4>
                          Lorem ipsum dolor sit amet, consecte adipisicing elit,
                          sed do eiusmod tempor incididunt labo dolor magna
                          aliqua. Ut enim ad minim veniam quis nostrud.
                        </h4>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehendrit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <div className="dec-img-wrapper">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="dec-img">
                            <img
                              alt=""
                              src={require("../../assets/img/blog/blog-dec-img1.jpg")}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="dec-img dec-mrg">
                            <img
                              alt=""
                              src={require("../../assets/img/blog/blog-dec-img2.jpg")}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehnderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia dser mollit anim id est laborum. Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et
                    </p>
                    <div className="blog-dec-tags-social">
                      <div className="blog-dec-tags">
                        <ul>
                          <li>
                            <a href="#">lifestyle</a>
                          </li>
                          <li>
                            <a href="#">interior</a>
                          </li>
                          <li>
                            <a href="#">outdoor</a>
                          </li>
                        </ul>
                      </div>
                      <div className="blog-dec-social">
                        <span>share :</span>
                        <ul>
                          <li>
                            <a href="#">
                              <i className="ion-social-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ion-social-skype" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ion-social-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ion-social-facebook" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="administrator-wrapper">
                      <div className="administrator-img">
                        <img
                          alt=""
                          src={require("../../assets/img/blog/blog-administrator.png")}
                        />
                      </div>
                      <div className="administrator-content">
                        <h4>Mildred Barnett</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolor magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea coma consequat. Duis aute irure dolor in
                          reprehenderit
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="blog-comment-wrapper mt-55">
                    <h4 className="blog-dec-title">COMMENTS : 02</h4>
                    <div className="single-comment-wrapper mt-35">
                      <div className="blog-comment-img">
                        <img
                          alt=""
                          src={require("../../assets/img/blog/blog-comment1.png")}
                        />
                      </div>
                      <div className="blog-comment-content">
                        <h4>Anthony Stephens</h4>
                        <span>October 14, 2018 </span>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolor magna aliqua. Ut enim ad minim veniam,{" "}
                        </p>
                        <div className="blog-btn">
                          <a href="blog-details.html">read more</a>
                        </div>
                      </div>
                    </div>
                    <div className="single-comment-wrapper mt-50 ml-125">
                      <div className="blog-comment-img">
                        <img
                          alt=""
                          src={require("../../assets/img/blog/blog-comment2.png")}
                        />
                      </div>
                      <div className="blog-comment-content">
                        <h4>Anthony Stephens</h4>
                        <span>October 14, 2018 </span>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolor magna aliqua. Ut enim ad minim veniam,{" "}
                        </p>
                        <div className="blog-btn">
                          <a href="blog-details.html">read more</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="blog-reply-wrapper mt-50">
                    <h4 className="blog-dec-title">POST A COMMENT</h4>
                    <form action="#">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="leave-form">
                            <input type="text" placeholder="Full Name" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="leave-form">
                            <input type="email" placeholder="Eail Address " />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="text-leave">
                            <textarea placeholder="Massage" />
                            <input type="submit" value="SEND MASSAGE" />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-xl-3 col-md-4">
                <div className="blog-sidebar-wrapper sidebar-mrg">
                  <div className="blog-widget mb-50">
                    <div className="blog-search">
                      <form className="news-form">
                        <input type="text" placeholder="Search....." />
                        <button type="submit">
                          <i className="ion-search" />
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="blog-widget mb-40">
                    <div className="blog-author">
                      <a href="#">
                        <img
                          alt=""
                          src={require("../../assets/img/blog/blog-author.png")}
                        />
                      </a>
                      <h4>
                        <a href="#">Kathy Gibson</a>
                      </h4>
                      <span>Head of Director, SEO</span>
                    </div>
                  </div>
                  <div className="blog-widget mb-45">
                    <h4 className="blog-widget-title mb-25">Recent post</h4>
                    <div className="blog-recent-post">
                      <div className="recent-post-wrapper mb-25">
                        <div className="recent-post-img">
                          <a href="#">
                            <img
                              alt=""
                              src={require("../../assets/img/blog/blog-recentpost-1.jpg")}
                            />
                          </a>
                        </div>
                        <div className="recent-post-content">
                          <h4>
                            <a href="#">New Products</a>
                          </h4>
                          <span>October 14, 2018</span>
                        </div>
                      </div>
                      <div className="recent-post-wrapper mb-25">
                        <div className="recent-post-img">
                          <a href="#">
                            <img
                              alt=""
                              src={require("../../assets/img/blog/blog-recentpost-2.jpg")}
                            />
                          </a>
                        </div>
                        <div className="recent-post-content">
                          <h4>
                            <a href="#">New Products</a>
                          </h4>
                          <span>October 14, 2018</span>
                        </div>
                      </div>
                      <div className="recent-post-wrapper mb-25">
                        <div className="recent-post-img">
                          <a href="#">
                            <img
                              alt=""
                              src={require("../../assets/img/blog/blog-recentpost-3.jpg")}
                            />
                          </a>
                        </div>
                        <div className="recent-post-content">
                          <h4>
                            <a href="#">New Products</a>
                          </h4>
                          <span>October 14, 2018</span>
                        </div>
                      </div>
                      <div className="recent-post-wrapper mb-25">
                        <div className="recent-post-img">
                          <a href="#">
                            <img
                              alt=""
                              src={require("../../assets/img/blog/blog-recentpost-4.jpg")}
                            />
                          </a>
                        </div>
                        <div className="recent-post-content">
                          <h4>
                            <a href="#">New Products</a>
                          </h4>
                          <span>October 14, 2018</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="blog-widget mb-40">
                    <h4 className="blog-widget-title mb-25">categories</h4>
                    <div className="blog-categori">
                      <ul>
                        <li>
                          <a href="#">Birthday (05)</a>
                        </li>
                        <li>
                          <a href="#">Bouquets (08)</a>
                        </li>
                        <li>
                          <a href="#">Custom Orders (02)</a>
                        </li>
                        <li>
                          <a href="#">Home Decor (07)</a>
                        </li>
                        <li>
                          <a href="#">Weddings (06)</a>
                        </li>
                        <li>
                          <a href="#">Interior Decor (01)</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-widget mb-35">
                    <h4 className="blog-widget-title mb-30">instagram</h4>
                    <div className="blog-instagram">
                      <ul>
                        <li>
                          <a href="#">
                            <img
                              alt=""
                              src={require("../../assets/img/instagram/instagram1.jpg")}
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              alt=""
                              src={require("../../assets/img/instagram/instagram2.jpg")}
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              alt=""
                              src={require("../../assets/img/instagram/instagram3.jpg")}
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="assets/img/instagram/instagram4.jpg"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              alt=""
                              src={require("../../assets/img/instagram/instagram5.jpg")}
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              alt=""
                              src={require("../../assets/img/instagram/instagram6.jpg")}
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-widget mb-35">
                    <h4 className="blog-widget-title mb-20">follow us </h4>
                    <div className="blog-sidebar-social">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="ion-social-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="ion-social-skype" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="ion-social-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="ion-social-facebook" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-widget mb-50 mrg-none">
                    <h4 className="blog-widget-title mb-25">tags</h4>
                    <div className="blog-tags">
                      <ul>
                        <li>
                          <a href="#">bouquet</a>
                        </li>
                        <li>
                          <a href="#">event </a>
                        </li>
                        <li>
                          <a href="#">gift </a>
                        </li>
                        <li>
                          <a href="#">joy </a>
                        </li>
                        <li>
                          <a href="#">love </a>
                        </li>
                        <li>
                          <a href="#">special </a>
                        </li>
                        <li>
                          <a href="#">success </a>
                        </li>
                        <li>
                          <a href="#">festival </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
