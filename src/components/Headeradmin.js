import React from 'react'

import {
  BrowserRouter as Router,
  Switch,

} from "react-router-dom";
import { Navbar, Nav,  Form  } from 'react-bootstrap'

import AuthService from "../services/auth.service";

class Headeradmin extends React.Component {
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
      this.setState({
        currentUser: user,
        showAdminBoard: user.role.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }
  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Router>
              <Navbar  variant="info " expand="lg" sticky="top" style={{backgroundColor: "#307DBD"}}>
                <Navbar.Brand className="text-white" href="/home" style={{marginLeft:20}}><h4>FBC Livestream</h4></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"> 
                  <Nav className="mr-auto"></Nav>
                  <React.Fragment>
                    <Form >
                      {currentUser ? (
                        <React.Fragment>
                          <div className="dropdown" style={{marginRight:10}}>
                            
                          <div className="btn btn-info btn-lg dropdown-toggle"  style={{backgroundColor: "#3070A6"}}  href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"aria-expanded="false">
                          <a>Chào, {currentUser.fullname}</a>
                        </div>
                        
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <a className="dropdown-item" refresh="true"  href="home">Quay lại trang chủ</a>

                          <a className="dropdown-item" href="/home" refresh="true" onClick={this.logOut}>Đăng xuất</a>
                          
                        </div>
                          </div>
                          

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
                    </Form>
                  </React.Fragment>
                </Navbar.Collapse>
              </Navbar>
              <br />
              <Switch>
              </Switch>
            </Router>
          </div>
        </div>

      </div>
    )
  }
}

export default Headeradmin;