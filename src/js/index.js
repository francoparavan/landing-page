import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

//import your own components
import { Navbar } from "./component/navbar";
import { App } from "./component/cards";
import { Foot } from "./component/footer";
import { JumboApp } from "./component/jumbo";

//render your react application
ReactDOM.render(
    <>
        <Navbar />
        <JumboApp />
        <App />
        <Foot />
    </>,
    document.querySelector('#app')
);
    
