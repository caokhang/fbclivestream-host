import React from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import EditIcon from '@material-ui/icons/Edit';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

//library sweetalert
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';


import UserService from '../services/user.service';

function MyVertically(props) {
    // sendData = () => {
    //     props.parentCallback("Message from Child");
    // };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Thông tin nhân viên : {props.data.username}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form>
                    <div className="form-group">
                    <label for="inputEmail4">Tài khoản</label>

                        <Input
                            type="text"
                            className="form-control"
                            name="username"
                            onChange={props.changeUsername}
                            value={props.data.username}
                            placeholder="Tài khoản"
                        />
                    </div>
                    <div className="form-group">
                    <label for="inputEmail4">Email</label>
                        <Input
                            type="text"
                            className="form-control"
                            name="email"
                            onChange={props.changeEmail}
                            value={props.data.email}
                            placeholder="Email"
                        />
                    </div>
                    {/* <div className="form-group">
                    <label for="inputEmail4">Mật khẩu</label>
                        <Input
                            type="text"
                            className="form-control"
                            name="password"
                            onChange={props.changePassword}
                            value={props.data.password}
                            placeholder="Mật khẩu"
                        />
                    </div> */}
                    
                    <div className="form-group">
                    <label for="inputEmail4">Telesale</label>
                        <Input
                            type="number"
                            className="form-control"
                            name="telesale"
                            onChange={props.changeTelesale}
                            value={props.data.telesale}
                            placeholder="Telesale"
                        />
                    </div>
                    <div className="form-group">
                    <label for="inputEmail4">Kho hàng</label>
                        <Input
                            type="number"
                            className="form-control"
                            name="khohang"
                            onChange={props.changeKhohang}
                            value={props.data.khohang}
                            placeholder="Khohang"
                        />
                    </div>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Đóng</Button>
                <Button variant="primary" onClick={() => props.submitEdit()}>Lưu lại</Button>
            </Modal.Footer>
        </Modal>
    );
}



class Child extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalShow: false,

            user: this.props.data
        };
    }

    setModalShow = (e) => {
        this.setState({ modalShow: e });
    }



    onChangeUsername = (e) => {
        this.setState({
            user: {
                  ...this.state.user,
                  username: e.target.value 
            }
        })
    }

    onChangeEmail = (e) => {
        this.setState({
            user: {
                  ...this.state.user,
                  email: e.target.value 
            }
        })
    }
    // onChangePassword = (e) => {
    //     this.setState({
    //         user: {
    //               ...this.state.user,
    //               password: e.target.value 
    //         }
    //     })
    // }
    onChangeTelesale = (e) => {
        this.setState({
            user: {
                  ...this.state.user,
                  telesale: e.target.value 
            }
        })
    }
    onChangeKhohang = (e) => {
        this.setState({
            user: {
                  ...this.state.user,
                  khohang: e.target.value 
            }
        })
    }

   
    sendEditUser= () => {
        UserService.editUser(this.state.user).then(
            response => {
                if (response.data.success) {
                    Swal.fire({
                        title: 'Thông báo',
                        text: 'Sửa thành công',
                        type: 'message',
                        confirmButtonText: 'OK'
                    }).then((result) => {
                        if (result.value) {
                          window.location.reload(false)
                        }
                    })  
                }
            },
            error => {
                Swal.fire(
                    'Đã xảy ra lỗi',
                    error.message,
                    'error'
                )
            }

        )
            .catch(error => {
                alert("Lỗi Server " + error)
            })
    }

    
    render() {
        return (

            <div>
                <button className="btn btn-outline" onClick={() => this.setModalShow(true)}> <EditIcon  style={{ color: "#296CCC" }} />  </button>
                
                <MyVertically
                    changeUsername={this.onChangeUsername}
                    changeEmail={this.onChangeEmail}
                  
                    changeTelesale={this.onChangeTelesale}
                    changeKhohang={this.onChangeKhohang}
                    submitEdit={this.sendEditUser}

                    data={this.props.data}
                    show={this.state.modalShow}
                    onHide={() => this.setModalShow(false)} />
            </div>
        )
    }

};

export default Child