import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    console.log(this.props.setStateModal);

    let { prod } = this.props;
    return (
      <div className="card text-white  mt-3">
        <img className="card-img-top" src={prod.image} alt="Title" />
        <div className="card-body">
          <h4 className="card-title text-dark">{prod.name}</h4>
          <h5 className="card-title text-dark">{prod.price}$</h5>
          <button
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#modalId"
            onClick={() => {
              this.props.setStateModal(prod);
            }}
          >
            Chi Tiết <i className="bx bx-search-alt-2"></i>
          </button>
        </div>
      </div>
    );
  }
}
