import React from "react";
import PropTypes from "prop-types";

export const Jumbotron = (props) => {
  return (
    <div className="container">
      <div
        className="p-5 my-5 bg-body-tertiary rounded-3 d-flex justify-content-center flex-column"
        style={{
          backgroundImage: `url(${props.backgroundURL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "300px",
        }}
      >
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{
            height: "100%",
          }}
        >
          <h1 className="display-3 fw-semibold mb-3 text-center mt-2">{props.title}</h1>
          <p
            className="text-center"
            style={{
              color: "white",
              fontSize: "20px",
            }}
          >
            {props.description}
          </p>
          <div className="mt-4">
            <a href={props.buttonURL} className="btn btn-warning btn-lg">
              <b>{props.buttonLabel}</b>
            </a>
          </div>
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
