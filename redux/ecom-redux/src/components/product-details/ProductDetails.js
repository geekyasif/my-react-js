import React, {useEffect}  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { ADD_PRODUCT_DETAILS } from '../../redux/actions/products-actions';

export default function ProductDetails() {

    const {id} = useParams();

    const product = useSelector(state => state.products.productDetails)
    // console.log(product[0]);
    // const {image, title, description, price, category } = product[0];

    const dispatch = useDispatch();

    const fetchProductDetails = async ()=> {
        await fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => dispatch(ADD_PRODUCT_DETAILS(data)))
      
    }
    
    useEffect(() => {
        fetchProductDetails();
    }, [])



    return (
        <div className='container my-4'>
            <div className='row'>
                <div className='col'>
                    <img scr={product["image"]} alt={product["title"]}/>
                </div>

                <div className='col'>
                    <h2>{product['title']}</h2>
                    <p><b>Price : </b>{product["price"]}</p>
                    <i>{product['category']}</i>
                    <p>{product['description']}</p>
                    <button className='btn btn-primary '>Buy Now</button>
                    <button className='btn btn-danger mx-2'>Add to cart</button>
                </div>

            </div>
        </div>
    )
}
