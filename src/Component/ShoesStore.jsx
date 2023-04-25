import React, { Component } from "react";
import ProductList from "./ProductList";
import Modal from "./Modal";
import data from "./data.json";
import ProductItem from "./ProductItem";

export default class ShoesStore extends Component {
  state = {
    productDetail: {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
  };
  setStateModal = (item) => {
    this.setState({
      productDetail: item,
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-success ">Shop Shoes</h1>
        <ProductList listProduct={data} setStateModal={this.setStateModal} />
        <Modal content={this.state.productDetail} />
      </div>
    );
  }
}
