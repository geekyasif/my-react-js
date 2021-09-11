import React, { useState } from 'react'

export default function SingleCategory() {
    const [cat, setCat] = useState([
        // {catName: 'Array', subCat: ['Searching in Arrays', 'Sorting in Arrays' ,'Sparse Matrices']}, 
        // {catName: 'Linked List' ,subCat: ['Searching in Arrays', 'Sorting in Arrays' ,'Sparse Matrices'] }, 
        // {catName: 'Stack', subCat: ['Searching in Arrays', 'Sorting in Arrays' ,'Sparse Matrices'] }, 
        // {catName: 'Queue', subCat: ['Searching in Arrays', 'Sorting in Arrays' ,'Sparse Matrices'] }, 
        // {catName: 'Tree', subCat: ['Searching in Arrays', 'Sorting in Arrays' ,'Sparse Matrices'] }, 
        // {catName: 'Graph', subCat: ['Searching in Arrays', 'Sorting in Arrays' ,'Sparse Matrices'] }, 
        // {catName: 'Hash Table', subCat: ['Searching in Arrays', 'Sorting in Arrays' ,'Sparse Matrices'] }
    ])

    return (
        <div>
            {cat.map((catName) =>(
                <>
                    <h3>{catName}</h3>
                    
                </>
            ))}
        </div>
    )
}
