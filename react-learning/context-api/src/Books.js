import React, { useContext} from 'react'
import BookList from './BookList'
import { BookContext } from './BookContext'

export default function Books() {

    const [books, setBooks] = useContext(BookContext)

    return (
        <div>
            {books.map( (book) => (
                <BookList name={book.name} price={book.price} key={book.id} />
            ))}
        </div>
    )
}
