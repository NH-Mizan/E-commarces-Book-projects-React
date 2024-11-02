import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {

    const { bookId, tags, bookName, image, author, category, rating } = book
    return (
      <Link to={`/products/${bookId}`}>
        <div>
            <div className="card bg-base-100 w-96 shadow-xl border-2 ">
                <figure className='bg-lime-100 py-4 m-4'>
                    <img
                        src={image}
                        alt="Shoes" className='h-64 ' />
                </figure>
                <div className="card-body">
                    <div className='grid grid-cols-2 my-4'>
                        {
                            tags.map((tag, index) => <button key={index} className="border-2 rounded-2xl btn-outline btn-accent w-28">{tag}</button>)
                        }

                    </div>
                    <div className='h-20'>
                    <h2 className="card-title text-2xl font-bold">{bookName}</h2>
                    </div>
                    <p className=' text-xl'>By: {author}</p>
                    <div className="card-actions justify-between mt-4 border-t-4 border-dashed p-2">
                        <h2 className="font-bold">{category}</h2>
                        <div className='flex gap-2'>
                            <h2 className="font-bold">{rating}</h2>
                            <div className="rating">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
      </Link>
    );
};

export default Book;