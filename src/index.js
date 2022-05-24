import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS
import './index.css';
import {books} from './books';
import Book from './Book';
import {greeting} from './testing/testing'


// JSX Rules:
// 1. return sigle element - every thing wrapped in one element.
// 2. divarsify your elements using div / section / article or React.Fragment.
// 3. use camelCase (onClick) for html attribute.
// 4. also use camelCase (className) for css class.
// 5. close every element
// 6. firmatting


// A good way - to create a stateless functional component
// always return JSX (capitalize first latter of the function)
// -- Nested Components, React Tools

  function BookList() {
    console.log(greeting);
    return (
      <section className="booklist">
        {books.map((book) => {
          // console.log(book);
          // const { img, title, author, footing } = book;
          return (
            <Book key={book.id} {...book}></Book>
          );
        })}
      </section>
    );
}


// ReactDom.render(<BookList />, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);
