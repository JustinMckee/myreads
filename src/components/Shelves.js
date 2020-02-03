import React from 'react'
import {Link} from 'react-router-dom'
import Shelf from './Shelf.js'

const Shelves = ({books,updateShelf}) => {

	const filterBooksOnShelf = shelfName => {
		let booksOnShelf = books.filter(book => {
			return book.shelf === shelfName
		})
		return booksOnShelf
	};

	return (
		<div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <Shelf
					title="Currently Reading"
					books={filterBooksOnShelf('currentlyReading')}
					updateShelf={updateShelf}
				/>
        <Shelf
					title="Want to Read"
					books={filterBooksOnShelf('wantToRead')}
					updateShelf={updateShelf}
				/>
        <Shelf
					title="Read"
					books={filterBooksOnShelf('read')}
					updateShelf={updateShelf}
				/>
      </div>

      <div className="open-search">
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
	);

}

export default Shelves
