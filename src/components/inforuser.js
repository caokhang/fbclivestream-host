import React, { Component } from 'react';

import CloseIcon from '@material-ui/icons/Close';
import UserService from '../services/user.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
class inforuser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClickedChild: this.props.isClickedParent,
      listEmployee: []
    };
  }

  componentDidMount() {
    UserService.getUserById(this.state.userId).then(
      response => {
        const data = response.data.user
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
        <div>
          <div className="modal fade" id="modalLoginAvatar" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-fluid" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalPreviewLabel" >Xem thông tin</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                
                <div>{this.props.isClickedChild}</div>

                <div id="table" className="table-editable">

                  <table className="table table-bordered table-responsive-md table-striped" >
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Tên tài khoản</th>
                        <th>Email</th>
                        <th>Họ và tên</th>
                        <th>Quyền</th>
                        <th>Sửa</th>
                        <th>Xoá</th>
                      </tr>
                    </thead>
                    <tbody id="myTable">
                      {/* {this.loadFillData()} */}
                    </tbody>
                  </table>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-dismiss="modal">Đóng</button>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }

  loadFillData() {


    return this.state.listEmployee.map((data) => {
      return (
        <tr>
          <th>{data.id}</th>
          <td>{data.username}</td>
          <td>{data.email}</td>
          <td>{data.name}</td>
          <td>{data.role}</td>
          <td>
            <button className="btn btn-outline btn-sm" onClick={() => this.onDelete(data.id)} >

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
        window.location.reload(false)
      }
    })
  }

  sendDelete(userId) {

    UserService.deleteAllUser(userId).then(
      response => {
        if (response.data.success) {
          Swal.fire({
            title: 'Thông báo',
            text: 'Bạn sẽ không thể khôi phục lại dữ liệu này',
            type: 'message',
          })
          this.loadFillData()
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
}

export default inforuser;