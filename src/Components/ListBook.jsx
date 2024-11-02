import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreReadList } from './addToItem';
import Book from './Book';


const ListBook = () => {
    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState([]);

    const readBook = useLoaderData();
    useEffect(() => {
        const readBookList = getStoreReadList();
        const readBookListInt = readBookList.map(id => parseInt(id));
        console.log(readBook, readBookList)
        const displayBookList = readBook.filter(book => readBookListInt.includes(book.bookId))

        setReadList(displayBookList)
    }, [])
    const handleSort = sortTypes => {
        setSort(sortTypes)
        // const sortedList = [...readList].sort()
        if(sortTypes === "No of pages"){
            const sortedList = [...readList].sort((a,b)=>a.totalPages - b.totalPages)
            setReadList(sortedList)
            
        }
        if(sortTypes === "Ratings"){
            const sortedList = [...readList].sort((a,b)=>a.rating - b.rating)
            setReadList(sortedList)
            
        }
    }
    return (
        <div>
            <div className="dropdown flex  justify-center flex-row ">
                <div tabIndex={0} role="button" className="btn btn-primary m-1"> {sort ? ` Sort By : ${sort}`:'Sort By'}

                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow mt-14">
                    <li onClick={()=>handleSort('Ratings')}><a>Ratings</a></li>
                    <li onClick={()=>handleSort('No of pages')}><a>No of Page</a></li>
                </ul>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl font-bold'>Book I Read :( {readList.length} )</h2>
                    <div className='grid grid-cols-3 py-12 gap-8'>
                        {
                            readList.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl font-bold'>My Wish List</h2>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default ListBook;