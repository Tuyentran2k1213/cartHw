import React, { Component } from 'react'

export default class ItemDienThoai extends Component {
  render() {
      let {thumbnail_url, name, price} = this.props.data;
    return (
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 p-3">
            <div className="card p-2">
          <img className="card-img-top" src={thumbnail_url}/>
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text text-danger">Price: {price.toLocaleString()} VNĐ</p>
            <div className='d-flex'>
            <a href='#'>
            <button type="button" href='#' className="btn btn-success"
            onClick={() => this.props.handleShow(this.props.data)}
            >Xem chi tiết</button>
            </a>
            <button type="button" className="btn btn-danger"
            onClick={() => this.props.handleAdd(this.props.data)}
            >Thêm vào giỏ hàng</button>
            </div>
          </div>
        </div>
        </div>
    )
  }
}
