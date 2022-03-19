import React, { Component } from 'react'

export default class Sanphamchitiet extends Component {
  render() {
    // return (
    //   <div className='title'>Sanphamchitiet</div>
    // )
    let {thumbnail_url, name, short_description, price} = this.props.detail;
    return (
      <div className='container'>
        <div className='row'>
        <div className="col-12 col-md-6 col-lg-4">
        <img src={thumbnail_url} style={{width: '100%'}}/>
    </div>
      <div className="col-12 col-md-6 col-lg-8">
      <h5>{name}</h5>
      <p className="text-secondary">{short_description}</p>
      <p className="card-text text-danger">Price: {price.toLocaleString()} VNĐ</p>
    </div>
        </div>
      </div>
    )
  }
}
