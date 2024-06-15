import React from 'react';
import PropTypes from 'prop-types';

export const Card = (props) => {
    return (
        <div className="card h-100 text-center border-0">
            <img src={props.url} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
            </div>
            <div class="card-footer">
                <a href={props.buttonURL} className="btn btn-danger">{props.buttonLabel}</a>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    buttonURL: PropTypes.string,
    buttonLabel: PropTypes.string,
};
