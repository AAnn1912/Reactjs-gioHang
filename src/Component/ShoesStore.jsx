import React, { Component } from "react";
import ProductList from "./ProductList";
import Modal from "./Modal";
import data from "./data.json";

export default class ShoesStore extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-success ">Shop Shoes</h1>
        <button
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#modalId"
        >
          <i className="bx bx-cart fs-1"></i>
          <span className="fs-5">0</span>
        </button>
        <ProductList listProduct={data} />
        <Modal />
      </div>
    );
  }
}
