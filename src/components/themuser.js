
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import React, { Component } from "react";

import "react-datepicker/dist/react-datepicker.css";

import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

import UserService from "../services/user.service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Vui lòng nhập.
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        Email không hợp lệ.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        Tên người dùng phải có từ 3 đến 20 ký tự.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        Mật khẩu phải có ít nhất 6 ký tự.
      </div>
    );
  }
};

export default class Themuser extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangekhohang = this.onChangekhohang.bind(this);
    this.onChangetelesale = this.onChangetelesale.bind(this);
    this.onChangeexpired = this.onChangeexpired.bind(this);
    this.onChangename = this.onChangename.bind(this);
    this.onChangerole = this.onChangerole.bind(this);
    this.state = {
      username: "",
      email: "",
      password: "",
      khohang: 0,
      telesale: 0,
      expired: "",
      name: "",
      role: "",
      successful: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  onChangeexpired(e) {
    this.setState({
      expired: e.target.value
    });
  }
  onChangetelesale(e) {
    this.setState({
      telesale: e.target.value
    });
  }
  onChangekhohang(e) {
    this.setState({
      khohang: e.target.value
    });
  }
  onChangename(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangerole(e) {
    this.setState({
      role: e.target.value
    });
  }
  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      UserService.insertUser(this.state).then(
        response => {

          if (response.data.success) {
            Swal.fire({
              title: 'Thông báo',
              text: 'Thêm thành công',
              type: 'message',
              confirmButtonText: 'OK'
          }).then((result) => {
              if (result.value) {
                window.location.reload(false)
              }
          })
         
      }
          this.setState({
            message: response.data.message,
            successful: response.data.successful
          });
          window.location.reload(false)
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
           

          this.setState({
            successful: false,
            message: resMessage
            
          });
        }

      );
    }
  }

  render() {
    return (
      <div className="modal-dialog" role="document">
        <div className="modal-content1 form-elegant ">
          <div className="modal-header text-center">
            <h3 className="modal-title w-100 dark-grey-text font-weight-bold my-3" id="myModalLabel"><strong>Thêm nhân viên</strong></h3>

            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body mx-4">
            <Form
              onSubmit={this.handleRegister}
              ref={c => {
                this.form = c;
              }}
            >
              {!this.state.successful && (
                <div>
                  <div className="form-group">
                    <Input
                      type="text"
                      className="form-control"
                      name="username"
                      value={this.state.username}
                      onChange={this.onChangeUsername}
                      validations={[required, vusername]}
                      placeholder="Username"
                    />
                  </div>
                  <div className="form-group">
                    <Input
                      type="text"
                      className="form-control"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      validations={[required, email]}
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <Input
                      type="password"
                      className="form-control"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChangePassword}
                      validations={[required, vpassword]}
                      placeholder="Mật khẩu"
                    />
                  </div>
                  <div className="form-group">
                    <Input
                      type="name"
                      className="form-control"
                      name="name"
                      value={this.state.fullname}
                      onChange={this.onChangename}
                      validations={[required]}
                      placeholder="Họ và tên"
                    />
                  </div>
                  <div className="form-row mb-4">
                    <div className="col">

                      <Input
                        type="number"
                        className="form-control"
                        name="telesale"
                        value={this.state.telesale}
                        onChange={this.onChangetelesale}
                        validations={[required]}
                        placeholder="Telesale"
                      />
                    </div>
                    <div className="col">
                      <Input
                        type="number"
                        className="form-control"
                        name="khohang"
                        value={this.state.khohang}
                        onChange={this.onChangekhohang}
                        validations={[required]}
                        placeholder="Khohang"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <Input
                      type="expired"
                      className="form-control"
                      name="expired"
                      value={this.state.expired}
                      onChange={this.onChangeexpired}
                      validations={[required]}
                      placeholder="Ngày hết hạn"
                    />
                  </div>



                  <div className="form-group">
                    <select className="browser-default custom-select"
                      type="role"
                      name="role"
                      validations={[required]}
                      onChange={this.onChangerole}
                      value={this.state.role}
                      >
                      <option value="" disabled defaultValue>Vui lòng chọn quyền</option>
                      <option value="ADMIN">Admin</option>
                      <option value="MOD">Mod</option>
                      <option value="USER">User</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <button className="btn btn btn-block" style={{backgroundColor:"#2B6EA6",color:"#fff"}} >Thêm</button>
                  </div>
                </div>
              )}

              {this.state.message && (
                <div className="form-group">
                  <div
                    className={
                      this.state.successful
                        ? "alert alert-danger"
                        : "alert alert-success"
                    }
                    role="alert"
                    
                  >
                    
                    {this.state.message}
                  </div>
                </div>
              )}
              <CheckButton
                style={{ display: "none" }}
                ref={c => {
                  this.checkBtn = c;
                }}
              />
            </Form>
          </div>
        </div>
      </div>

    );
  }
}
