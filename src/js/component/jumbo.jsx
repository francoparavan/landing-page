import React from 'react';
import { Jumbotron } from "./jumbotron";
import gradient from '../../img/gradient4.png';

const JumboApp = () => {
    return (
        <div>
            <Jumbotron
                title="Welcome to Your Next Adventure"
                description="Creating unforgettable moments, together."
                buttonURL="#destinations"
                buttonLabel="Discover More!"
                backgroundURL={gradient}
            />
        </div>
    )
}
export default JumboApp;