import React from 'react';



function Hero() {
    return (
        <div>
            <section id="hero">

                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className=" col-lg-6 py-5 py-lg-0 order-2 order-lg-1" data-aos="fade-right">
                            <h1>Phần mềm chốt đơn livestream</h1>
                            <h2>Hỗ trợ người dùng có thể quản lý cửa hàng và bán hàng trên livestream một cách dễ dàng </h2>
                            <a href="#about" className="btn-get-started scrollto">Dùng thử miễn phí </a>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left">
                            <img src="assets/img/hero-img.png" className="img-fluid" alt=""></img>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Hero;