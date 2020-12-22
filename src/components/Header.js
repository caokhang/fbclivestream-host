import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import { Component } from "react";



import Login from './login.component'
import Register from "./register.component";
import Profile from "./profile.component";

import BoardUser from "./board-user.component";
import BoardModerator from "./board-moderator.component";
import BoardAdmin from "./board-admin.component";

import AuthService from "../services/auth.service";

export default class Header extends Component {

  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {

      var isShow = false
      if (user.role.includes("ADMIN")) {
        isShow = true
      } else if (user.role.includes("MOD")) {
        isShow = true
      }

      this.setState({
        currentUser: user,
        showAdminBoard: isShow,
      });
    } 
  }

  logOut() {
    AuthService.logout();
    window.location.reload(false);

  }

  render() {
    const { currentUser, showAdminBoard } = this.state;

    return (

      <div>
        <header id="header">
          <div className="container d-flex align-items-center">

            <div className="logo mr-auto">
              <Link to={"/"} className="navbar-brand">
                <h1 className="text-light">FBC<span>.</span></h1>
              </Link>
            </div>

            <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li className="active"> <Link to={"/home"} className="nav-link"> Trang chủ </Link> </li>
                <li><a href="#about">Giới thiệu</a></li>
                <li><a href="#services">Sản phẩm</a></li>
                <li><a href="#pricing">Bảng giá </a></li>
                <li><a href="#contact">Liên hệ </a></li>
                {/* {showAdminBoard && (
                  
                  <li className="active" >
                    <Link to={"/admin"} className="nav-link">
                      Admin Board
                </Link>
                  </li>
                )} */}


                {currentUser ? (
                  <React.Fragment>
                    <li>
                      <div class="dropdown show" >
                        <a class=" dropdown-toggle" href="#" role="button" style={{textTransform:"capitalize"}} id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                          {currentUser.username}
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          {showAdminBoard && (

                            <a class="dropdown-item" style={{ color: "#000000" }}>
                              <Link to={"/admin"} className="nav-link" style={{ color: "#000000" }}>
                                <label>    Quản lý người dùng</label>
                              </Link>

                            </a>

                          )}
                          <a class="dropdown-item" style={{ color: "#000000" }}>

                            <Link to={"/profile"} className="nav-link" style={{ color: "#000000" }}>
                              <label> Trang cá nhân </label>
                            </Link>
                          </a>
                          <a class="dropdown-item " style={{ color: "#000000" }} onClick={this.logOut} href="#">
                            <a className="nav-link" style={{ color: "#000000" }}>
                            <label>Đăng xuất</label>
                            </a>

                          </a>
                        </div>


                      </div>
                    </li>
                  </React.Fragment>
                ) : (

                    <React.Fragment>
                      <li className="nav-item" data-toggle="modal" data-target="#eleLogin">
                        <a href="" className="nav-link">Đăng nhập</a>
                      </li>

                      <li className="get-started" data-toggle="modal" data-target="#eleRegister">
                        <a href="" className="nav-link">Đăng ký</a>
                      </li>
                    </React.Fragment>

                  )}
              </ul>
            </nav>
          </div>

          <div>
            <Switch>
              <Route exact path="/profile" component={Profile} />
              <Route path="/user" component={BoardUser} />
              <Route path="/mod" component={BoardAdmin} />
              <Route path="/admin" component={BoardAdmin} />
            </Switch>
          </div>
        </header>

        <div className="modal fade" id="eleLogin" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <Login />
        </div>

        <div className="modal fade" id="eleRegister" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <Register />
        </div>

      </div>

    );
  }
}
