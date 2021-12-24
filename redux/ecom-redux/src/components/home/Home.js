import React, {useEffect}  from 'react'
import { useDispatch } from 'react-redux'
import { ADD_PRODUCTS } from '../../redux/actions/products-actions';
import CardList from '../card/CardList';

export default function Home() {

    const dispatch = useDispatch();

    const fetchProducts = async ()=> {
        await fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then((data) => {
            dispatch(ADD_PRODUCTS(data))
        })
      
    }
    
    useEffect(() => {
        fetchProducts();
    }, [])
    return (
        <div>
            <CardList/>
        </div>
    )
}
