import React, { useEffect, useState } from 'react';
import Book from './Book';

const Products = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('../../public/booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div>
            <h2 className="text-4xl text-center font-bold py-4mc">Books : ( {books.length} )</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-12">
        {books.map( p => <Book book = {p} key={books.id }></Book> )}
        </div>

            
        </div>


    );
};

export default Products;