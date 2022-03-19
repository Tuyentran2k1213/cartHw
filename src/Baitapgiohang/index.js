import React, { Component } from 'react'
import Danhsachdienthoai from './Danhsachdienthoai'
import Modalgiohang from './Modalgiohang'
import Sanphamchitiet from './Sanphamchitiet'
import data from './data'

export default class index extends Component {
    state={
        dsdt: data,
        dataDt: data[0],
        gioHang: [],
        number: 0,
        total: 0
    };

    handleShow = value => {
        this.setState({dataDt: value})
    };

    handleAdd = value => {
        let cloneGioHang = [...this.state.gioHang];

        let index=cloneGioHang.findIndex(item => {
            return item.id == value.id
        })

        if(index == -1) {
          let newValue = {...value, SoLuong: 1}
          cloneGioHang.push(newValue);
          // this.setState({number: 1})
        } else {
          cloneGioHang[index].SoLuong++;
        }
        
        this.setState({total: this.state.total + value.price});
        this.setState({number: ++this.state.number})
        this.setState({gioHang: [...cloneGioHang]});
    }

    handleDele = value => {
      let cloneGioHang = [...this.state.gioHang];
      let index=cloneGioHang.findIndex(item => {
        return item.id == value.id
    })

    if(cloneGioHang[index].SoLuong == 1) {
      // let newValue = {...value, SoLuong: 1}
      // cloneGioHang.push(newValue);
      cloneGioHang.splice(index, 1);
      // this.setState({number: 0});
    } else {
      cloneGioHang[index].SoLuong--;
    }

    this.setState({total: this.state.total - value.price});
    this.setState({number: --this.state.number});
    this.setState({gioHang: [...cloneGioHang]});

    }

  render() {
    return (
      <div className='container p-5'>
          <Modalgiohang
          total={this.state.total}
          number={this.state.number}
          gioHang={this.state.gioHang}
          addHandle={this.handleAdd}
          deleHandle={this.handleDele}
          />
          <Sanphamchitiet detail={this.state.dataDt}/>
          <Danhsachdienthoai 
          dsdt={this.state.dsdt}
          handleShow={this.handleShow}
          handleAdd={this.handleAdd}
          />
      </div>
    )
  }
}
