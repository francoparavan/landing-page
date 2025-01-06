import React from "react";
import PropTypes from "prop-types";

export const Jumbotron = (props) => {
  return (
    <div className="container">
      <div
        className="p-5 my-5 bg-body-tertiary rounded-3 d-flex align-items-center"
        style={{
          backgroundImage: `url(${props.backgroundURL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "300px",
        }}
      >
        <div className="container-fluid py-5 text-center text-md-start">
          <h1 className="display-3 fw-semibold mb-3">{props.title}</h1>
          <p
            className="fs-6"
            style={{
              color: "white",
            }}
          >
            {props.description}
          </p>
          <a href={props.buttonURL} className="btn btn-warning btn-lg mt-3">
            <b>{props.buttonLabel}</b>
          </a>
        </div>
      </div>
    </div>
  );
};

Jumbotron.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  buttonURL: PropTypes.string,
  buttonLabel: PropTypes.string,
  backgroundURL: PropTypes.string,
};
