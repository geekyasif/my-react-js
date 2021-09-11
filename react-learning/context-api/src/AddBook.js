import React, { useContext, useState } from 'react'
import { BookContext } from './BookContext'

export default function AddBook() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [books, setBooks] = useContext(BookContext)

    const addBook = (e) => {
        e.preventDefault()
        setBooks( prevBooks => [...prevBooks, {name: name, price: price}])
        setName('')
        setPrice('')

    }
    return (
        <div>
            <form onSubmit={addBook}>
                <input type="text" placeholder="Enter Book Name" value={name} onChange={ text => setName(text.target.value)}/>
                <input type="text" placeholder="Enter Book Price" value={price} onChange={ text => setPrice(text.target.value)}/>
                <button type="submit">Add</button>                
            </form>
        </div>
    )
}
