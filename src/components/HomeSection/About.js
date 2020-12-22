import React from 'react';



function About() {
    return (
        <div>
            <section id="about" className="about section-bg">
        <div className="container">

          <div className="row">
            <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
            <div className="col-xl-7 pl-0 pl-lg-5 pr-lg-1 d-flex align-items-stretch">
              <div className="content d-flex flex-column justify-content-center">
                <h3 data-aos="fade-in" data-aos-delay="100">FBC. Livestream</h3>
                
                <div className="row">
                  <div className="col-md-6 icon-box" data-aos="fade-up">
                    <i className="bx bx-store"></i>
                    <h4><a href="bh">Quản lý bán hàng</a></h4>
                    <p>Quản lý đơn hàng và liên kết với đơn vị vận chuyển một cách dễ dàng</p>
                  </div>
                  <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                  <i className="bx bx-video"></i>
                    <h4><a href="bhls">Bán hàng Livestream</a></h4>
                    <p>Hỗ trợ chốt đơn hàng ngay trên livestream, có thể livestream nhiều luồng</p>
                  </div>
                  <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                    <i className="bx bx-user"></i>
                    <h4><a href="nv">Quản lý nhân viên</a></h4>
                    <p>Quản lý thông tin nhân viên, phân quyền cho từng người, quản lý lương nhân viên</p>
                  </div>
                  <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                    
                    <i className="bx bx-line-chart-down"></i>
                    <h4><a href="bc">Báo cáo thống kê</a></h4>
                    <p>Thống kê tổng doanh thu, lợi nhuận theo ngày, tháng, năm, và hiễn thị biểu đồ</p>
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

export default About;