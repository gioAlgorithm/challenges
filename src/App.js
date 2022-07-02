import React from "react"
import "./App.css"
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function App(){
    return(
        
        <div className="container">
            <img className="product" alt="product" src="./image/first.jpg" width="375px" />
            <img className="product-mobile" alt="product" src="./image/second.jpg" width="375px" />
            <div className="content">
                <p className="perfume">PERFUME</p>
                <h1 className="name">Gabrielle Essence Eay De Parfum</h1>
                <div className="text-container">
                    <p className="text">A floral, solar and voluptuous</p>
                    <p className="text">interpretation composed By</p>
                    <p className="text">Olivier Polge, Perfumer-Creator</p>
                    <p className="text">for the House of CHANEL</p>
                </div>
                <span className="price-full">
                    <h1 className="price">$149.99</h1>
                    <p className="last-price">$169.99</p>
                </span>        
                <button className="btn"><AiOutlineShoppingCart fontWeight={"bold"} size={"20px"} /><span>Add to Cart</span> </button>                
            </div>
        </div>
    )
}
