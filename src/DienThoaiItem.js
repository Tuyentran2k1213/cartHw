import React, { Component } from "react";

export default class DienThoaiItem extends Component {
  render() {
    let { thumbnail_url, name, price } = this.props.dienThoai;
    return (
      <div className="col-3 p-3">
        <div className="card p-3">
          <img className="card-img-top" src={thumbnail_url} alt />
          <div className="card-body">
            <p className="card-title">{name}</p>
            <p className="card-text">
              <p className="text-danger">Giá :{price.toLocaleString()} đồng</p>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
