import React , { useState } from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import TimerIcon from '@material-ui/icons/Timer';

//library sweetalert
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

import UserService from '../services/user.service';


import Moment from 'moment'

import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

function MyVertically2(props) {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Gia hạn nhân viên : {props.data.username}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form>
                    <div className="form-group">
                    <label for="inputEmail4">Ngày hết hạn</label>
                    {/* <DatePicker
                     className="form-control"
                     name="expired"
                      selected={startDate}
                      value={Moment(props.data.expired).format('D/M/yyyy')} 
                      onChange={date => setStartDate(date)} 
                      placeholder="Ngày hết hạn"/> */}

                        <Input
                        //  type="datetime-local" id="birthdaytime" name="birthdaytime"
                            type="text"
                            className="form-control"
                            name="expired"
                            onChange={props.changeExpired}
                            value={Moment(props.data.expired).format('D/M/yyyy')}
                            placeholder="Ngày hết hạn"
                            
                            
                        />
                    </div>
                    
                    {/* <div className="form-group">
                    <label for="inputEmail4">Email</label>
                        <Input
                            type="text"
                            className="form-control"
                            name="email"
                            onChange={props.changeEmail}
                            value={props.data.email}
                            placeholder="Email"
                        />
                    </div> */}

                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Đóng</Button>
                <Button variant="primary" onClick={() => props.submitEdit()}>Gia hạn</Button>
            </Modal.Footer>
        </Modal>
    );
}



class Child3 extends React.Component {
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



    onChangeExpired = (e) => {
        this.setState({
            user: {
                  ...this.state.user,
                  expired: e.target.value 
            }
        })
    }


   
    sendEditUser= () => {
        UserService.editUser(this.state.user).then(
            response => {
                if (response.data.success) {
                    Swal.fire({

                        title: 'Thông báo',
                        text: 'Gia hạn thành công',
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
                <button className="btn btn-outline" onClick={() => this.setModalShow(true)}><TimerIcon/></button>
                <MyVertically2
                    changeExpired={this.onChangeExpired}
                   
                    submitEdit={this.sendEditUser}

                    data={this.props.data}
                    show={this.state.modalShow}
                    onHide={() => this.setModalShow(false)} />
            </div>
        )
    }

};

export default Child3