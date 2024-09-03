import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({url, title, description, buttonURL, buttonLabel}) => {
    return (
        <div className="card h-100 text-center border-0">
            <img src={url} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
            <div className="card-footer">
                <a href={buttonURL} className="btn btn-danger">{buttonLabel}</a>
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
