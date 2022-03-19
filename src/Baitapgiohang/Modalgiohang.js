import React, { Component } from 'react';
import { Modal, Button } from 'antd';

export default class Modalgiohang extends Component {
    state = {
        isModalVisible: false,
    }

    showModal = () => {
        // setIsModalVisible(true);
        this.setState({isModalVisible: true});
      };
    
    handleOk = () => {
        // setIsModalVisible(false);
        this.setState({isModalVisible: false});
      };
    
    handleCancel = () => {
        // setIsModalVisible(false);
        this.setState({isModalVisible: false});
      };

    handleInModal = () => {
      if(this.props.gioHang){
        return this.props.gioHang.map((dt, index) => {
          return (
            <tr key={index}>
              <td>{(() => {
                return dt.id
              })()}</td>
              <td><img
              style={{width: 50}}
               src={dt.thumbnail_url} alt='nothing'/></td>
              <td>{dt.name}</td>
              <td className='d-flex align-items-center justify-content-between flex-column flex-sm-row' style={{textAlign: 'center'}}>
                <button onClick={() => this.props.deleHandle(dt)} className='btn btn-danger'>&minus;</button><span> {dt.SoLuong} </span>
                <button onClick={() => this.props.addHandle(dt)} className='btn btn-success'>&#x0002B;</button></td>
                <td>
                  {(dt.price * dt.SoLuong).toLocaleString()}VNĐ
                </td>
                {(() => {
                  if(index === 0)
                    return (
                      <td style={{verticalAlign: 'middle'}} rowSpan={this.props.gioHang.length}>
                  {this.props.total.toLocaleString()}
                      <p>VNĐ</p>
                </td>
                    )
                })()}
            </tr>
          )
        })
      }
    }

  render() {
    const handlecart = () => {
      if(this.props.number <= 0){
        return '';
      } else {
        return `(${this.props.number})`
      }
    }

    return (
      <>
      <div className='position-fixed w-100 bg-light' style={{top: '0rem',left: '0rem' , zIndex: 10,}}>
      <div className='container d-flex justify-content-end' style={{top: '0rem',left: '0rem' , zIndex: 10, padding: '8px 0px'}}>
      <Button style={{borderRadius: '5px'}} type="primary" onClick={this.showModal}>
        Giỏ Hàng {handlecart()}
      </Button>
      </div>
      </div>
      <Modal title="Giỏ hàng của bạn" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}
      width={1000}
      >
        <div>
          <table className='table'>
          <thead>
            <tr>
              <th>Mã</th>
              <th>Hình</th>
              <th>Tên</th>
              <th>Số lượng</th>
              <th>Đơn giá</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            {this.handleInModal()}
          </tbody>
          </table>
        </div>
      </Modal>
      </>
    )
  }
}
