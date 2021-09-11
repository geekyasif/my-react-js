import React, { useState } from 'react'
import './SubHeader.css'

export default function SubHeader() {

    const [input, setInput] = useState(['Array', 'Linked List', 'Stack', 'Queue', 'Tree', 'Graph', 'Hash Table'])

    return (
            <div className="subHeadingContainer">

                {input.map((item)=>(
                     <p className="subHeadingText">{item}</p>
                ))}
               
            </div>
    )
}
