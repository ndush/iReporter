// 🎙
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed-top navbar navbar-expand-sm  navbar-expand-lg navbar-dark bg-light static-top" >
      <div className="container-fluid">
      <Link to={"/"} className="navbar-brand" style={{ fontWeight: "bold",color: "#fa7670",padding:"2px" }} >
      iREPO{/* <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/327/eyes_1f440.png" alt="..." height="36"/>*/}RTER
      </Link>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link d-flex justify-content-center"
                to="/"
                style={{ color: "black" }}

              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link d-flex justify-content-center"
                to="/get-started"
                //to signup
                style={{ color: "black" }}
              >
                Get started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
