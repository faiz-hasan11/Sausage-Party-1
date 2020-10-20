import React from 'react'
import "../../Assets/Css/nice-select.css"
import "../../Assets/Css/toastr.min.css"
import "../../Assets/Css/waves.min.css"
import "../../Assets/Css/owl.carousel.min.css"
import "../../Assets/Css/owl.theme.default.css"
import "../../Assets/Css/main-style.css"
import Footer from '../Footer/Footer'

function Navbar() {
    return (
        <div>

            {/* Onload event is below */}

            {/* <div className="preloader">
                <div className="sk-three-bounce">
                    <div className="sk-child sk-bounce1"></div>
                    <div className="sk-child sk-bounce2"></div>
                    <div className="sk-child sk-bounce3"></div>
                </div>
            </div> */}



            <div className="header dashboard pad1" style={{ padding: 0 }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <nav className="navbar navbar-expand-lg navbar-light px-0 justify-content-between">
                                <a className="navbar-brand" href="#"><img src="https://cdn.logojoy.com/wp-content/uploads/2018/08/23141702/3_big1.png" alt="no image" /></a>

                                <div className="dashboard_log my-2">
                                    <div className="d-flex align-items-center">
                                        <div className="account_money">
                                            <ul>
                                                <li className="crypto">
                                                    <span>0.0025</span>
                                                    <i className="cc BTC"></i>
                                                </li>
                                                <li className="usd">
                                                    <span>19.93 USD</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="profile_log dropdown">
                                            <div className="user" data-toggle="dropdown">
                                                <span className="thumb"><i className="la la-user"></i></span>
                                                <span className="name">Boneless Chicken</span>
                                                <span className="arrow"><i className="la la-angle-down"></i></span>
                                            </div>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a href="accounts.html" className="dropdown-item">
                                                    <i className="la la-user"></i> Account
                                            </a>
                                                <a href="history.html" className="dropdown-item">
                                                    <i className="la la-book"></i> History
                                            </a>
                                                <a href="settings.html" className="dropdown-item">
                                                    <i className="la la-cog"></i> Setting
                                            </a>
                                                <a href="lock.html" className="dropdown-item">
                                                    <i className="la la-lock"></i> Lock
                                            </a>
                                                <a href="signin.html" className="dropdown-item logout">
                                                    <i className="la la-sign-out"></i> Logout
                                            </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>



                <div className="sidebar">
                    <div className="menu">
                        <ul>
                            <li>
                                <a href="dashboard.html" data-toggle="tooltip" data-placement="right" title="Home">
                                    <span><i className="la la-igloo"></i></span>
                                </a>
                            </li>
                            <li>
                                <a href="buy-sell.html" data-toggle="tooltip" data-placement="right" title="Exchange">
                                    <span><i className="la la-exchange"></i></span>
                                </a>
                            </li>
                            <li>
                                <a href="accounts.html" data-toggle="tooltip" data-placement="right" title="Account">
                                    <span><i className="la la-user"></i></span>
                                </a>
                            </li>
                            <li>
                                <a href="settings.html" data-toggle="tooltip" data-placement="right" title="Setting">
                                    <span><i className="la la-tools"></i></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Content here - More react components to be added */}
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>



                <Footer />

            </div>





        </div>
    );
}

export default Navbar
