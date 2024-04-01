import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import avartar from "../../sunflower (1).jpg"
import icon from "../../Screenshot 2024-03-29 202455.png"

function Header() {
    return (
        <div className="header">
            <nav className="navbar py-4">
                <div className="container-xxl">
                    <div className="h-right d-flex align-items-center order-1">                      
                        <Dropdown className="dropdown user-profile ms-2 ms-sm-3 d-flex align-items-center">
                            <div className="u-info me-2">
                                <p className="mb-0 text-end line-height-sm "><small><i>Handicrafted by</i></small></p>
                                <span className="font-weight-bold ps-5">Jim HLS</span>
                            </div>
                            <Dropdown.Toggle as="a" className="nav-link dropdown-toggle pulse p-0">
                                {<img className="avatar lg rounded-circle" src={avartar} alt="profile" />}
                            </Dropdown.Toggle>
                        </Dropdown>
                    </div>
                    <div className="h-right d-flex align-items-center">                      
                        <Dropdown className="dropdown user-profile ms-2 ms-sm-3 d-flex align-items-center">
                            <Dropdown.Toggle as="a" className="nav-link dropdown-toggle pulse p-0 ps-4">
                                {<img className="avatar lg rounded-circle" src={icon} alt="profile" />}
                            </Dropdown.Toggle>
                        </Dropdown>
                    </div>


                    <button className="navbar-toggler p-0 border-0 menu-toggle order-3"
                        onClick={() => {
                            var side = document.getElementById("mainSideMenu");
                            if (side) {
                                if (side.classList.contains("open")) {
                                    side.classList.remove("open")
                                } else {
                                    side.classList.add("open")
                                }
                            }
                        }}
                    >
                        <span className="fa fa-bars"></span>
                    </button>


                    <div className="order-0 col-lg-4 col-md-4 col-sm-12 col-12 mb-3 mb-md-0 ">

                    </div>

                </div>
            </nav>
        </div>
    )
}


export default Header;  