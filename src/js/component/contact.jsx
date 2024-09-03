import React from "react";

const Contact = () => {
    return (
        <div className="container py-3 mt-4">
            <form className="bg-dark text-white p-4 rounded-3" id="contact">
                <div className="mb-3">
                    <h3>Contact us here!</h3>
                </div>
                <div className="mb-3 mt-4">
                    <label className="form-label">Full name:</label>
                    <input type="text" className="form-control" />
                    <div className="form-text" style={{ color: "#6c757d" }}>Insert your full name in the field above</div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Email address:</label>
                    <input type="email" className="form-control" />
                    <div className="form-text" style={{ color: "#6c757d" }}>Insert your email in the field above</div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Message:</label>
                    <textarea className="form-control" rows="4"></textarea>
                    <div className="form-text" style={{ color: "#6c757d" }}>Write your message here</div>
                </div>

                <button type="submit" className="btn btn-secondary">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
