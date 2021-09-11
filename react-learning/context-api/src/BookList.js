import React from 'react'

export default function BookList({name, price}) {
    return (
        <div>
            <h3>{name}</h3>
            <h6>{price}</h6>
        </div>
    )
}
