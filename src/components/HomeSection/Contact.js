import React from 'react';

function Contact() {
    return (
        <div>
            <section id="contact" className="contact section-bg">
        <div className="container">

          <div className="section-title">
            <h2 data-aos="fade-in">Liên hệ</h2>
            <p data-aos="fade-in">Liên hệ với chúng tôi hỗ trợ</p>
          </div>

          <div className="row">

            <div className="col-lg-12">

              <div className="row">
                <div className="col-md-12">
                  <div className="info-box" data-aos="fade-up">
                    <i className="bx bx-facebook"></i>
                    <h3>Facebook</h3>
                    <p>fbc.livestream</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4" data-aos="fade-up" data-aos-delay="100">
                    <i className="bx bx-envelope"></i>
                    <h3>Email </h3>
                    <p>fbclivestream@gmail.com</p>

                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4" data-aos="fade-up" data-aos-delay="100">
                    <i className="bx bx-phone-call"></i>
                    <h3>SĐT</h3>
                    <p>+1 5589 55488 55</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
}

export default Contact;