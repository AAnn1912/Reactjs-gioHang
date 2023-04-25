import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { prod } = this.props;
    return (
      <div className="card text-white  mt-3">
        <img className="card-img-top" src={prod.image} alt="Title" />
        <div className="card-body">
          <h4 className="card-title text-dark">{prod.name}</h4>
          <h5 className="card-title text-dark">{prod.price}</h5>
          <button className="btn btn-primary">
            Thêm Sản Phẩm <i className="bx bx-cart"></i>
          </button>
        </div>
      </div>
    );
  }
}
