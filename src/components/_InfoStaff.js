import React from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import VisibilityIcon from '@material-ui/icons/Visibility';

import Moment from 'moment'

function MyVerticallyCenteredModal(props) {

  let user = { existUser: undefined }
  if (props.staffs.length > 0) {
    user =  { existUser: true }
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Thông tin nhân viên : {props.username}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        {user.existUser ? (
          <table className="table table-hover">
            <thead className="table-active">
              <tr>
                <th scope="col">Tài khoản</th>
                <th scope="col">Mật khẩu</th>
                <th scope="col">Email</th>
                <th scope="col">Quyền</th>
                <th scope="col">Ngày thêm</th>
              </tr>
            </thead>
            <tbody>
              <LoadDataTable staffs={props.staffs} />
            </tbody>
          </table>
        ) : (
            <p>Tài khoản này chưa có nhân viên</p>
          )}


      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Đóng</Button>
      </Modal.Footer>
    </Modal>
  );
}

function LoadDataTable(props) {
  return props.staffs.map((data) => {
    return (
      <tr>
        <td>{data.username}</td>
        <td>{data.password}</td>
        <td>{data.email}</td>
        <td>{data.role}</td>
        <td>{Moment(data.createdAt).format('D/M/yyyy')}</td>
      </tr>
    )
  })
};


function App(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <button className="btn btn-outline" onClick={() => setModalShow(true)}><VisibilityIcon/></button>


      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        staffs={props.staffs}
        username={props.username}
      />
    </>
  );
}

export default App