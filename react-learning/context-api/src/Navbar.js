import React, { useContext } from 'react'
import './Navbar.css'
import { BookContext } from './BookContext'

function Navbar (){

    const [books, setBooks] =  useContext(BookContext)

    return (
        <div className="navbar">
            <h3 className="brandName">Books World</h3>
            <p className="totalBooks">Total Books : {books.length} </p>
        </div>
    )
}

export default Navbar