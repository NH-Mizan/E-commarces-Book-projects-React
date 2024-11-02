import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoreList } from './addToItem';


const BookDetail = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();

    const book = data.find(book => book.bookId === id)
    const { bookId: detBookId, image, rating, totalPages, review, author, bookName, yearOfPublishing, publisher, tags, category } = book;


    const handleMarkAsRead =(id)=>{
     addToStoreList(id)
    }
    const handleAddToLisr =() =>{

    }
    return (
        <div>
            
            <div className="hero bg-red-100 rounded-lg min-h-screen mb-12">
                <div className="hero-content flex-col lg:flex-row gap-8">
                    <img
                        src={image}
                        className="max-w-80 rounded-lg shadow-2xl" />
                    <div >
                        <h1 className="text-5xl font-bold">{bookName}</h1>
                        <p className='m-2 text-xl'>By : {author}</p>
                        <p className='m-2 font-bold text-xl'>{category}</p>
                        <p className='m-2 text-md'>{review}</p>

                        <div className='flex gap-4 my-4'> <h2>Tags :</h2>
                            {
                                tags.map((tag, index) => <button key={index} className="border-2 rounded-2xl btn-outline btn-accent w-28">{tag}</button>)
                            }

                        </div>
                        <div className='border-t-2 border-green-400 '>
                            <p className='mt-8'>Number of page : {totalPages}</p>
                            <p>Publisher: {publisher}</p>
                            <p>Year of Publish : {yearOfPublishing}</p>
                            <div className='flex items-center gap-2'><h2 className='font-bold text-xl'>Rating :</h2>
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
                        <div  className='mt-4'>

                            <button onClick={()=>handleMarkAsRead(bookId)} className="btn btn-outline btn-accent mr-4">Mark as Book </button>
                            <button className="btn  btn-accent">Ad to Whish List</button>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default BookDetail;