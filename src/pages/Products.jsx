import React, { Component } from "react";
// import './App.css';
// import ProductDetail from './ProductDetail'

// newer version of "create-react-app" you cant force process.env.NODE_ENV so we will just hard code this
let baseURL = process.env.REACT_APP_BACKEND_URL;
// console.log('current base URL:', baseURL)

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    fetch(baseURL + "/products")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return [];
        }
      })
      .then((data) => {
        console.log(data);
        this.setState({ products: data.products });
      });
  };

  render() {
    return (
      <div className="container">
        <h1>Products</h1>

        {this.state.products.map((product) => {
          return (
            
            <div key={product._id}>
              <img src={product.imgURL}/>
            </div>
            
          );
        })}
      </div>
    );
  }
}

export default Products;
