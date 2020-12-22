import React from 'react';

function Pricing() {
    return (
        <div>
            <section id="pricing" className="pricing section-bg">
          <div className="container">
  
            <div className="section-title">
              <h2 data-aos="fade-in">Bảng giá</h2>
              <p data-aos="fade-in">Dùng thử miễn phí trong vòng 7 ngày</p>
            </div>
  
            <div className="row no-gutters">
  
              <div className="col-lg-4 box" data-aos="zoom-in">
                <h3>FBC. Livestream</h3>
                <h4>300.000đ<span>1 Tháng/ 1 Cửa hàng</span></h4>
                <ul>
                  <li><i className="bx bx-check"></i> Bán hàng trên Livestream</li>
                  <li><i className="bx bx-check"></i> Quản lý bán hàng</li>
                  <li><i className="bx bx-check"></i> Quản lý nhân viên</li>
                  <li className="na"><i className="bx bx-x"></i> <span>Hỗ trợ phần mềm cho kho</span></li>
                  <li className="na"><i className="bx bx-x"></i> <span>Tính năng Phân quyền</span></li>
                </ul>
                <a href="getstarted" className="get-started-btn">Mua ngay</a>
              </div>
  
              <div className="col-lg-4 box featured" data-aos="zoom-in">
                <span className="featured-badge">Bonnus</span>
                <h3>FBC. Livestream</h3>
                <h4>3.000.000đ<span>1 Năm/ 2 Cửa hàng</span></h4>
                <ul>
                  <li><i className="bx bx-check"></i> Bán hàng trên Livestream</li>
                  <li><i className="bx bx-check"></i> Quản lý bán hàng</li>
                  <li><i className="bx bx-check"></i> Quản lý nhân viên</li>
                  <li><i className="bx bx-check"></i> Hỗ trợ phần mềm cho kho</li>
                  <li><i className="bx bx-check"></i> Tính năng Phân quyền</li>
                </ul>
                <a href="niln" className="get-started-btn">Mua ngay</a>
              </div>
  
              <div className="col-lg-4 box" data-aos="zoom-in">
                <h3>FBC. Livestream</h3>
                <h4>8.000.000đ<span>3 Năm/ 2 Cửa hàng</span></h4>
                <ul>
                  <li><i className="bx bx-check"></i> Bán hàng trên Livestream</li>
                  <li><i className="bx bx-check"></i> Quản lý bán hàng</li>
                  <li><i className="bx bx-check"></i> Quản lý nhân viên</li>
                  <li><i className="bx bx-check"></i> Hỗ trợ phần mềm cho kho</li>
                  <li><i className="bx bx-check"></i> Tính năng Phân quyền</li>
                </ul>
                <a href="uyui" className="get-started-btn">Mua ngay</a>
              </div>
  
            </div>
  
          </div>
        </section>
        </div>
    );
}

export default Pricing;