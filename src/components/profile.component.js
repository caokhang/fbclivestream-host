import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import UserService from '../services/user.service';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headeradmin from './Headeradmin';
import moment from 'moment'


export default class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: null,
            userReady: false,
            currentUser: { username: "", name: "", role: "", email: "", telesale: "", khohang: "", expired: "", createdAt: "", staffs: [] },
            listStaff: [],
            existUser: false
        };
    }

    componentDidMount() {
        UserService.getInfoUser().then(
            response => {
                const data = response.data;
                this.setState({ currentUser: data, userReady: true })
            },
            error => {
                alert("Lỗi, Máy chủ Server")
            }

        ).catch(error => {
            alert("Lỗi Server " + error)
        })

    }



    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        const { currentUser } = this.state;
        if (currentUser.length > 0) {
            this.setState({
                existUser: true
            })
        }


        return (
            <div>
                {(this.state.userReady) ?
                    <div>
                        <Headeradmin />

                        <div className="container" style={{ color: '#332200' }}>
                            <div className="col-12">

                                <div>

                                    <div className="card-title mb-4" style={{ marginTop: 20 }}>
                                        <div className="d-flex justify-content-start">
                                            <div className="image-container" style={{ paddingRight: 30, paddingBottom: 30 }}>
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_VnUVPYd2yW8dEYfNqqkYEehqC0uJ-dGwjA&usqp=CAU" style={{ width: '150px', height: '150px' }} />
                                                <div className="middle">

                                                    <input type="file" style={{ display: 'none' }} id="profilePicture" name="file" />
                                                </div>
                                            </div>
                                            <div className="userData ml-3" style={{ marginTop: 20 }}>
                                                <label> <h2 className="d-block" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{currentUser.name}</h2></label>
                                                <h6 class="d-block text-center" > Hạn sử dụng : {moment(currentUser.expired).format('D/M/yyyy')}</h6>
                                            </div>
                                            <div className="ml-auto">
                                                <input type="button" className="btn btn-primary d-none" id="btnDiscard" defaultValue="Discard Changes" />
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="nav nav-tabs mb-4" id="basicInfo-tab" role="tablist" >
                                        <li className="nav-item">
                                            <a className="nav-link active" id="basicInfo-tab" data-toggle="tab" href="#menu1" role="tab" aria-controls="basicInfo" aria-selected="true">Thông tin tài khoản</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="basicInfo-tab" data-toggle="tab" href="#menu2" role="tab" aria-controls="basicInfo" aria-selected="true">Thông tin nhân viên</a>
                                        </li>

                                    </ul>
                                    <div className="tab-content">

                                        <div id="menu1" className="tab-pane show active">
                                            <div className="tab-content ml-1" style={{ marginTop: 20 }} id="myTabContent" >
                                                <div className="tab-pane show active" id="basicInfo" role="tabpanel" aria-labelledby="basicInfo-tab">
                                                    <div className="row">
                                                        <div className="col-sm-3 col-md-2 col-5" >
                                                            <label style={{ fontWeight: 'bold' }}>Tên đăng nhập</label>
                                                        </div>
                                                        <div className="col-md-8 col-6">
                                                            <label>{currentUser.username}</label>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-sm-3 col-md-2 col-5">
                                                            <label style={{ fontWeight: 'bold' }}>Họ và tên</label>
                                                        </div>
                                                        <div className="col-md-8 col-6">
                                                            <label>{currentUser.name}</label>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-sm-3 col-md-2 col-5">
                                                            <label style={{ fontWeight: 'bold' }}>Email</label>
                                                        </div>
                                                        <div className="col-md-8 col-6">
                                                            <label> {currentUser.email}</label>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-sm-3 col-md-2 col-5">
                                                            <label style={{ fontWeight: 'bold' }}>Tối đa telesale</label>
                                                        </div>
                                                        <div className="col-md-8 col-6">
                                                            <label> {currentUser.telesale}</label>

                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-sm-3 col-md-2 col-5">
                                                            <label style={{ fontWeight: 'bold' }}> Tối đa kho hàng</label>
                                                        </div>
                                                        <div className="col-md-8 col-6">
                                                            <label>{currentUser.khohang}</label>
                                                        </div>

                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-sm-3 col-md-2 col-5">
                                                            <label style={{ fontWeight: 'bold' }}>Ngày đăng kí</label>
                                                        </div>
                                                        <div className="col-md-8 col-6">
                                                            <label>{moment(currentUser.createdAt).format('D/M/yyyy')} ( {moment(currentUser.createdAt).fromNow()} )</label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-3 col-md-2 col-5">
                                                            <label style={{ fontWeight: 'bold' }}>Hạn sử dụng</label>
                                                        </div>
                                                        <div className="col-md-8 col-6">

                                                            <label> {moment(currentUser.expired).format('D/M/yyyy')}</label>

                                                        </div>
                                                    </div>
                                                    <hr />
                                                </div>
                                            </div>
                                        </div>
                                        <div id="menu2" className="tab-pane fade">
                                            <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                                                <div className="table-responsive">
                                                    {/*Table*/}
                                                    <table className="table">
                                                        {/*Table head*/}
                                                        <thead>
                                                            <tr>
                                                                <th className="th-sm">Họ và tên</th>
                                                                <th className="th-sm">Tên đăng nhập</th>
                                                                <th className="th-sm">Email</th>
                                                                <th className="th-sm">Quyền</th>
                                                                <th className="th-sm">Ngày tạo</th>
                                                            </tr>
                                                        </thead>

                                                        <tbody>
                                                            {this.loadFillData()}
                                                        </tbody>
                                                    </table>


                                                </div>
                                                {/* {this.state.existUser ? (
                                                    <table className="table table-hover">
                                                        <thead className="table-active">
                                                            <tr>
                                                                <th className="th-sm">Họ và tên</th>
                                                                <th className="th-sm">Tên đăng nhập</th>
                                                                <th className="th-sm">Email</th>
                                                                <th className="th-sm">Quyền</th>
                                                                <th className="th-sm">Ngày tạo</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {this.loadFillData()}
                                                        </tbody>
                                                    </table>
                                                ) : (
                                                        <p>Tài khoản này chưa có nhân viên</p>
                                                    )} */}


                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div> : null}

            </div>

        );
    }



    loadFillData() {


        return this.state.currentUser.staffs.map((data) => {
            return (
                <tr>
                    <td>{data.name}</td>
                    <td>{data.username}</td>
                    <td>{data.email}</td>
                    <td>{data.role}</td>
                    <td>{moment(data.createdAt).format('D/M/yyyy')} ( {moment(data.createdAt).fromNow()} )</td>
                </tr>
            )
        })
    };


}
