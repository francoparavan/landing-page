import React from 'react';
import { Jumbotron } from "./jumbotron";
import 'bootstrap/dist/css/bootstrap.min.css';

export const JumboApp = () => {
    return (
        <div>
            <Jumbotron
                title="Welcome to Our Website"
                description="Creating unforgettable moments, together."
                buttonURL=""
                buttonLabel="Discover More!"
                backgroundURL="https://www.bates.edu/wordpress/files/2016/07/gradient4.jpg"
            />
        </div>
    )
}