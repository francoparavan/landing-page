import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

export const Jumbotron = (props) => {
  return (
    <div className="container">
      <div class="p-5 mb-4 mt-4 bg-body-tertiary rounded-3" style={{
        backgroundImage: `url(${props.backgroundURL})`,
        backgroundSize: 'cover',
        height: '300px',
      }}>
        <div class="container-fluid py-5">
          <h1 class="display-3 fw-semibold">{props.title}</h1>
          <p class="col-md-12 fs-6" style={{
            color: 'white'
          }}>
            {props.description}
          </p>
          <button class="btn btn-warning btn-lg mt-5" type="button">
            <a href={props.buttonURL} className="btn btn-warning btn-lg"><b>{props.buttonLabel}</b></a>
          </button>
        </div>
      </div>
    </div>
  )
}

Jumbotron.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  buttonURL: PropTypes.string,
  buttonLabel: PropTypes.string,
  backgroundURL: PropTypes.string,
};




// export const Jumbotron = () => {
//   return (
//     <div className="container">
//       <div class="p-5 mb-4 mt-4 bg-body-tertiary rounded-3" style={{ 
//         backgroundImage: 'url("https://www.bates.edu/wordpress/files/2016/07/gradient4.jpg")',
//         backgroundSize: 'cover',
//       }}>
//         <div class="container-fluid py-5">
//           <h1 class="display-3 fw-semibold">Custom jumbotron</h1>
//           <p class="col-md-12 fs-6">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
//           <button class="btn btn-warning btn-lg" type="button">Example button</button>
//         </div>
//       </div>
//     </div>
//   )
// }