import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  render() {
    let { listProduct } = this.props;
    return (
      <div className="container">
        <div className="row">
          {listProduct.map((prod, index) => {
            return (
              <div className="col-4" key={index}>
                {" "}
                <ProductItem prod={prod} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
