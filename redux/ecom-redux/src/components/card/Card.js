import React from 'react'

export default function Card() {

    const cardStyle = {
        width: "18rem"
    }
    return (
        <div>
            <div className="card" style={cardStyle}>
                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h6 className="card-title">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h6>
                    <p className="card-text"><b>Price : </b> 109.95</p>
                </div>
            </div>
        </div>
    )
}
