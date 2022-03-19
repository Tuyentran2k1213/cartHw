import React, { Component } from 'react'
import ItemDienThoai from './ItemDienThoai'

export default class Danhsachdienthoai extends Component {
  render() {
    return (
      <div className='row'>
          {
              this.props.dsdt.map((dt, index) => {
                    return (
                        <ItemDienThoai 
                        key={index} 
                        data={dt}
                        handleShow={this.props.handleShow}
                        handleAdd={this.props.handleAdd}
                        />
                    )
              })
          }
      </div>
    )
  }
}
