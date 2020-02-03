import React from 'react'

const Book = ({book,authors,title,thumbnail,shelf,updateShelf}) => {

  return(
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${thumbnail})` }}></div>
        <div className="book-shelf-changer">
          <select
						onChange={e => updateShelf(book,e.target.value)}
						value={shelf || 'none'}
					>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  )

}

export default Book
