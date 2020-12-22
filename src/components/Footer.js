import { Component } from "react";
import React from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer id="footer">
                    <div className="footer-top">
                        <div className="container" data-aos="fade-up">
                            <div className="row  justify-content-center">
                                <div className="col-lg-6">
                                    <h3>FBC.</h3>
                                    <p></p>
                                </div>
                            </div>
                            <div className="row footer-newsletter justify-content-center">
                            </div>
                            <div className="social-links">
                                <a href="twitter" className="twitter"><i className="bx bxl-twitter"></i></a>
                                <a href="facebook" className="facebook"><i className="bx bxl-facebook"></i></a>
                                <a href="instagram" className="instagram"><i className="bx bxl-instagram"></i></a>
                                <a href="google-plus" className="google-plus"><i className="bx bxl-skype"></i></a>
                                <a href="linkedin" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                            </div>

                        </div>
                    </div>
                    <div className="container footer-bottom clearfix">
                        <div className="copyright">
                            &copy; Copyright <strong><span>FBC</span></strong>. All Rights Reserved </div>
                        <div className="credits">

                        </div>
                    </div>
                </footer>
            </div >
        );
    }
}

export default Footer;
