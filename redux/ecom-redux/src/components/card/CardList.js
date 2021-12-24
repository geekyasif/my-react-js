import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./CardList.css"

export default function CardList() {

    const products = useSelector(state => state.products.products);
    console.log(products)



    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
            products === [] 
            ? <p>Loading...</p>
            : products[0].map((product) => {
                return (
                    <div className="col text-center" >
                        <Link to={`/product-details/${product['id']}`}>
                            <div className="card">
                                <img src={product["image"]} className="card-img-top mx-auto" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{product['title']}</h5>
                                    <p className="card-text"><b>Price : </b>{product["price"]}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}
