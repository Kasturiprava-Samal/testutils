import React from "react";
import PropTypes from "prop-types";
export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active" />
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>

            <li className="nav-item" />
            <a className="nav-link" href="/">
              {props.aboutText}
            </a>
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="btn btn-outline-primary my-2 my-sm-0"
          type="submit"
        >
          Search
        </button>
      </form> */}
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              type="radio"
              id="customRadio1"
              name="customRadio"
              className="custom-control-input"
              onClick={props.toggleMode}
            />
            <label className="custom-control-label" htmlFor="customRadio1">
              {props.mode === "light"
                ? `Enable Dark Mode`
                : `Enable Light Mode`}
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};
Navbar.defaultProps = {
  title: " set title here",
  aboutText: "About text here",
};
