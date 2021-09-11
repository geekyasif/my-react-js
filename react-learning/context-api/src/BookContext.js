import React, { useState, createContext } from 'react'
import Navbar from './Navbar';
import BookList from './BookList';

export const BookContext = createContext();

export const BookProvider = (props) => {

    const [books, setBooks] = useState([
        {
            id: 1,
            name: 'Harry Potter',
            price: "$10"
        },
        {
            id: 1,
            name: 'Avengers',
            price: "$20"
        },
        {
            id: 1,
            name: 'Daredevil',
            price: "$15"
        },
        {
            id: 1,
            name: 'Wolvarine',
            price: "$30"
        },
    ])

    return (
        
        <BookContext.Provider value={[books, setBooks]}>
          {props.children}
            {/* // <Navbar/>
            // <BookList/> */}
        </BookContext.Provider>
    )
}