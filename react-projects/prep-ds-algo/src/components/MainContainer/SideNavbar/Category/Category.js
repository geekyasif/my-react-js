import React, { useState } from 'react'

export default function Category() {
    const [input, setInput] = useState(['Array', 'Linked List', 'Stack', 'Queue', 'Tree', 'Graph', 'Hash Table'])
    return (
        <div className="categoryContainer">
            <h4>All Data Structures</h4>
                {input.map((item)=>(
                     <>
                     <p className="subHeadingText">{item}</p>
                        <hr></hr>
                     </>
                ))}
        </div>
    )


}
