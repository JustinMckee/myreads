import React from 'react'
import Book from './Book.js'

const Shelf = ({title,books,updateShelf}) => {

  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
					{books.map(book => (
						<li key={book.id}>
							<Book
								thumbnail={book.imageLinks.thumbnail}
								title={book.title}
								authors={book.authors}
								shelf={book.shelf}
								book={book}
								updateShelf={updateShelf}
							/>
						</li>
					))}
        </ol>
      </div>
    </div>
  )

}

export default Shelf
