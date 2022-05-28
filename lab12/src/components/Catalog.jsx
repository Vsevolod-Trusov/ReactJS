import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal } from "./Modal.jsx";
import { addToCart } from "../redux/actions";
import "../index.css";
import ReactDOM from "react-dom"
import classnames from "classnames";

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.sorted = { name: true, price: true, inStock: true, discount: true };
    this.state = { array: this.array, isModalOpen: false };
  }
  array = [
    {
      name: "Aist Turbo",
      price: 155,
      inStock: 4,
      img: "/images/Aist Turbo.PNG",
      new: true,
      discount: 65,
    },
    {
      name: "Cube Acid 19''",
      price: 130.50,
      inStock: 13,
      img: "/images/Cube Acid 19''.PNG",
      new: true,
      discount: 10,
    },
    {
      name: "Krakken Molly",
      price: 120,
      inStock: 23,
      img: "/images/Krakken Molly.PNG",
      new: false,
      discount: 40,
    },
    {
      name: "Racer Bruno 16''",
      price: 130,
      inStock: 2,
      img: "/images/Racer Bruno 16''.PNG",
      new: false,
      discount: 15,
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
  onClickHandler(item) {
    this.props.addToCart(item);
    let newItem = item;
    newItem.inStock-=1;
    for (let i = 0; i < this.state.array.length; i++) {
      if (this.state.array[i] === item)
    this.setState({array: [...this.state.array.slice(0, i), newItem, ...this.state.array.slice(i+1)]})      
    }
    this.setState({isModalOpen: true});
  }


  goods() {

    let imgNewMarckStyle={
      height:"30px",
      width:"30px"}

    return this.state.array.map((item,id) => {
      return (
        <div className="one_good" key={id}>
          <div
              className={classnames({
                'new': item.new,
                'defaultNew': !item.new,
              })}><img src='images/new.png' /></div>
          <img src={item.img} alt="" />
          <div className="text">
            <div className="discount">

              <div
                  className={classnames({
                    'redDiscount': item.discount>=60,
                    'yelDiscount': item.discount>=30 && item.discount<60,
                    'greenDiscount': item.discount<30 && item.discount>0,
                    'default': item.discount===0,
                  })}>{item.discount}%</div>
              <button
                className="cart"
                onClick={() => this.onClickHandler(item)}
                disabled={!item.inStock}
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
  render() {
    return (
      <>
        {this.sorts()}
        {this.goods()}
        {this.state.isModalOpen && ReactDOM.createPortal(
          <Modal toCatalog={this.closeModal}/>,
          document.getElementById("portal")
        )}
      </>
    );
  }
}

const mapDispatchToProps = {
  addToCart,
};
export default connect(null, mapDispatchToProps)(Catalog);
