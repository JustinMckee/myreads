import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import Shelves from './components/Shelves.js';
import Search from './components/Search.js';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  };

	componentDidMount() {
    BooksAPI.getAll()
			.then((books) => {
	      this.setState(()=>({
					books
				}))
	    })
  };

	updateShelf = (book,newShelf) => {
		BooksAPI.update(book,newShelf)
			.then(
				this.setState((prevState) => ({
					books: prevState.books
						.map(myBook => {
							if (myBook.id === book.id) {
								myBook.shelf = newShelf
							}
							return myBook
						})
				}))
			)
	}

  render() {
    return (
      <div className="app">
				<Route
					exact
					path = '/'
					render = {() =>
						<Shelves
							books={this.state.books}
							updateShelf={this.updateShelf}
						/>
					}
				/>

				<Route
					exact
					path = '/search'
					render={() => (
							<Search
								updateShelf={this.updateShelf}
							/>
						)
					}
				/>

      </div>
    )
  }
}

export default BooksApp
