import React from "react";
import Cart from "./Cart";
import Navbar from './Navbar';

class App extends React.Component {
  constructor(){
    super();
        this.state={
        products:[{
            price:99,
            title:'Watch',
            qty:10,
            img:'',
            id:1
        },
        {
            price:999,
            title:'Mobile Phone',
            qty:1,
            img:'',
            id:2
        },
        {
            price:999,
            title:'Laptop',
            qty:1,
            img:'',
            id:3
        }
      ]
    }
    //this.increaseQuantity=this.increaseQuantity.bind(this);
  }
handleIncreaseQuantity = (product) => {
    //console.log('hey Please inc quantiyt of product',product);
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;

    this.setState({
        products:products
    })
}
handleDecreaseQuantity = (product) => {
    //console.log('hey Please dec quantiyt of product',product);
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty === 0){
        return;
    }
    products[index].qty -= 1;

    this.setState({
        products:products
    })
}
handleDeleteProduct = (id) => {
    const {products} = this.state;
    const items = products.filter((item) => item.id !== id)
    
    this.setState({
        products:items
    })
}
getCartCount = () => {
  const {products} = this.state;
  let count =0;
  products.forEach((product)=>{
    count +=product.qty;
  })
  return count;
}
getCartTotal = () => {
  const {products} = this.state;
  let Total =0;
  products.forEach((product)=>{
    Total =Total + product.qty*product.price;
  })
  return Total;
}
  render(){
    const {products} = this.state
  return (
    <div className="App">
      <Navbar count = {this.getCartCount()}/>
      <Cart
      products = {products}
      onIncreaseQuantity= {this.handleIncreaseQuantity}
      onDecreaseQuantity= {this.handleDecreaseQuantity} 
      onDeleteProduct = {this.handleDeleteProduct}
      />
      <div>TOTAL : {this.getCartTotal()}</div>
    </div>
  );
  }
}

export default App;
