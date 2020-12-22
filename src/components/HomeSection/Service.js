import React from 'react';

function Server() {
  return (
    <div>
      <section id="services" className="services section-bg">
        <div className="container">
          <div className="section-title">
            <h2 data-aos="fade-in">Tính năng</h2>
          </div>
          <div className="row content">
            <div className="col-md-5" data-aos="fade-right">
              <img src="assets/img/14.png" className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 pt-4" data-aos="fade-left">
              <h3>Chốt đơn hàng tự động trong lúc livestream</h3>
              <p className="font-italic">
      </p>
              <ul>
                <li> Tự động lấy bình luận từ luồng livestream để lấy thông tin chốt đơn hàng.</li>
                <li> Tự động gửi tin nhắn chốt đơn hàng loạt.</li>
                <li> Tự động nhận biết khách hàng đã boom hàng. </li>
              </ul>
            </div>
          </div>
          <div className="row content">
            <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
              <img src="assets/img/12.png" className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
              <h3>Quản lý bán hàng</h3>
              <ul>
                <li> Quản lý hàng hóa xuất nhập tồn kho.</li>
                <li> Kết nối với đợn vị vận chuyển</li>
                <li> Hỗ trợ phần mềm quản lý kho và telesale </li>
              </ul>
            </div>
          </div>
          <div className="row content">
            <div className="col-md-5" data-aos="fade-right">
              <img src="assets/img/16.png" className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 pt-5" data-aos="fade-left">
              <h3>Quản lý nhân viên</h3>
              <ul>
                <li> Quản lý thông tin nhân viên trên hệ thống phần mềm.</li>
                <li> Phân quyền cho từng người Quản lý, Nhân viên, Kho, Telesale</li>
              </ul>
            </div>
          </div>
          <div className="row content">
            <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
              <img src="assets/img/17.png" className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
              <h3>Thống kê báo cáo</h3>
              <ul>
                <li> Thống kê doanh thu theo ngày, tháng, năm</li>
                <li> Thống kê sản phẩm được bán chạy nhất trong ngày, tháng, năm</li>
                <li> Vẽ biểu đồ doanh thu và sản phẩm bán chạy </li>
              </ul>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Server;