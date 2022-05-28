import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "./Modal.jsx";
import { addToCart } from "../redux/actions";
import "../index.css";
import ReactDOM from "react-dom"
import OrderForm from "./OrderForm.jsx";

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.sorted = { name: true, price: true, inStock: true, discount: true };
    this.state = { array: this.array, isModalOpen: false, toOrder: false };
  }
  array = [
    {
      name: "Aist Turbo",
      price: 120,
      inStock: 4,
      img: "/imgs/Aist Turbo.png",
      new: true,
      discount: 20,
      weight: 15,
      added: 0
    },
    {
      name: "Cube Acid",
      price: 130,
      inStock: 13,
      img: "/imgs/Cube Acid 19''.png",
      new: true,
      discount: 10,
      weight: 15,
      added: 0
    },
    {
      name: "Krakken Molly",
      price: 120,
      inStock: 23,
      img: "/imgs/Krakken Molly.png",
      new: false,
      discount: 40,
      weight: 7,
      added: 0
    },
    {
      name: "Racer Bruno",
      price: 130,
      inStock: 2,
      img: "/imgs/Racer Bruno 16''.png",
      new: false,
      discount: 15,
      weight: 16,
      added: 0
    }
  ];
  sort(byWhat) {
    let direction = this.sorted[byWhat] ? 1 : -1,
      arrayCopy = [...this.state.array].sort(function (a, b) {
        if (a.new || b.new) return 0;
        if (a[byWhat] > b[byWhat]) {
          return direction;
        }
        if (a[byWhat] < b[byWhat]) {
          return direction * -1;
        }
        return 0;
      });
    this.sorted[byWhat] = !this.sorted[byWhat];
    this.setState({ array: arrayCopy });
  }
  sorts() {
    return (
      <div className="sorts">
        <button onClick={() => this.sort("name")}>Name</button>
        <button onClick={() => this.sort("price")}>Price</button>
        <button onClick={() => this.sort("inStock")}>In Stock</button>
        <button onClick={() => this.sort("discount")}>Discount</button>
      </div>
    );
  }
  onClickHandler(item, e) {

   //
    let newItem = item;
    if(newItem.inStock!==0)
    { this.props.addToCart(item);
      newItem.inStock--;
      this.setState({isModalOpen: true});
    }
    else{
      e.target.disabled = true;
    }
  }
  goods() {
    return this.state.array.map((item, id) => {
      return (
        <div className="one_good" key={id}>
          <img src={item.img} alt="" />
          <div className="text">
            <div className="discount">
              {item.new && <h2>New</h2>}
              <h2>{item.discount}%</h2>
              <button
                className="cart"
                onClick={(e) => this.onClickHandler(item, e)}
              >
                add to cart
              </button>
            </div>
            <h2>{item.name}</h2>
            <div className="prices">
              {item.discount && (
                <h2>{(item.price * (100 - item.discount)) / 100}$</h2>
              )}
              <h3>{item.price}$</h3>
            </div>
            <h4>Available: {item.inStock} items</h4>
          </div>
        </div>
      );
    });
  }
  closeModal = () => {
    this.setState({isModalOpen: false})
  }
  toOrder = () => {
    this.setState({toOrder:true})
  }
  render() {
    return (
      !this.state.toOrder ?
      <>
        {this.sorts()}
        {this.goods()}
        {this.state.isModalOpen && ReactDOM.createPortal(
          <Modal toCatalog={this.closeModal} toOrder={this.toOrder}/>,
          document.getElementById("portal")
        )}

      </>
      : <OrderForm />
    );
  }
}

const mapDispatchToProps = {
  addToCart,
};
export default connect(null, mapDispatchToProps)(Catalog);
