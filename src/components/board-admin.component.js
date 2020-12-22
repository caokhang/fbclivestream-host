import React, { Component, useState } from 'react';

import UserService from '../services/user.service';
import 'bootstrap/dist/css/bootstrap.min.css';

//library sweetalert
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';

import Headeradmin from './Headeradmin';
import Themuser from "./themuser";
import moment from 'moment'
import Inforuser from "./inforuser";


import { Form } from 'react-bootstrap'

import Footeradmin from './Footeradmin.js'
import InfoStaff from './_InfoStaff'
import EditUser from './_EditUser'
import Expired from './_Expired'

export default class BoardAdmin extends Component {

  constructor(props) {
    super(props);

    this.state = {
      listEmployee: [],
      isClicked: true,
      message: "",

      modalShow: true
    };
  }

  componentDidMount() {
    UserService.getAllUser().then(
      response => {
        const data = response.data.user;
        console.log(data)
        this.setState({ listEmployee: data });
      },
      error => {
        alert("Lỗi, Máy chủ Server")
      }

    )
      .catch(error => {
        alert("Lỗi Server " + error)
      })
  }


  render() {

    return (
      <div>
        <Headeradmin />


      

        <div className="card-body" style={{marginTop:-20}}>
          <div className="modal fade" id="adduser" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <Themuser/>

          </div>
        <div style={{marginTop:20}}>
          <h4 className="font-weight-bold text-uppercase" style={{float:"left", margin:"5px 0px 0px 5px" }}> Quản lí người dùng</h4>
          
          <button className="btn btn-primary" data-toggle="modal" data-target="#adduser" style={{ marginLeft:10,marginBottom:10 ,backgroundColor:"#307DBD",float:"right" }} >
            <AddIcon style={{paddingBottom:5}}/>Thêm người dùng
          </button>

          <Form inline style={{ float: "right", marginBottom: 10 }}>

            <input className="form-control" id="myInput" type="text" placeholder="Tìm kiếm.."></input>
            
            {/* <Popupinsert class="btn btn-info" username={this.state.username}></Popupinsert> */}
          </Form>
          </div>

          

          <div id="table" className="table-editable">
            <table className="table table-bordered table-responsive-md" style={{fontSize:"15px"}}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Họ và tên</th>
                  <th>Quyền</th>
                  <th>TeleSale</th>
                  <th>Kho hàng</th>
                  <th>Lan IP </th>
                  <th>Ngày đăng kí</th>
                  <th>Ngày hết hạn</th>
                  <th>Xem</th>
                  <th>Sửa</th>
                  <th>Gia hạn</th>
                  <th>Xoá</th>
                </tr>
              </thead>
              <tbody id="myTable">
                {this.loadFillData()}
              </tbody>
            </table>
          </div>
        </div>


        <Inforuser isClickedParent={this.state.isClicked} />
        <Footeradmin />

      </div>



    );
  };

  loadFillData() {

    return this.state.listEmployee.map((data) => {
      return (
        <tr>
          <th>{data.id}</th>
          <td>{data.username}</td>
          <td>{data.email}</td>
          <td>{data.name}</td>
          <td>{data.role}</td>
          <td>{data.telesale}</td>
          <td>{data.khohang}</td>
          <td>{data.lanip}</td>
          <td> {moment(data.createdAt).format('D/M/yyyy')}</td>
          <td> {moment(data.expired).format('D/M/yyyy')}</td>

          <td><InfoStaff staffs={data.staffs} username={data.username}>Xem</InfoStaff> </td>

          <td><EditUser data={data}/></td>
          <td>  <Expired data={data}/> </td>
         
 
          <td>
            <button className="btn btn-outline" onClick={() => this.onDelete(data.id)} >
              <CloseIcon style={{ color: "#B61927" }} />
            </button>

          </td>
        </tr>


      )
    })
  };

  onDelete(id) {
    Swal.fire({
      title: 'Xác nhận',
      text: 'Bạn có chắc chắn muốn xóa tài khoản này ?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Có',
      cancelButtonText: 'Không'
    }).then((result) => {
      if (result.value) {
        this.sendDelete(id)
       
      }
    })
  }

  sendDelete(id) {

    UserService.deleteUser(id).then(
      response => {
        if (response.data.success) {
          Swal.fire({
            title: 'Thông báo',
            text: 'Xoá thành công',
            type: 'message',
          })
          this.loadFillData()
        }
        window.location.reload(false)
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

}
