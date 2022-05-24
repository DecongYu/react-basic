import React from 'react'

const Book = ({ img, title, author, footing}) => {
  
  // attribute, eventHandler
  // onClick, onMouseOver

  // enventHandler
  const clickHandler = (e) =>{
    console.log(e);
    console.log(e.target);
    alert('Hello World!');
  };

  // can be in-line onClick.
  const buyTheBook = (title) => {
    let lll = title
    alert(lll)
    console.log(lll)
  };

  // onMouseOver
  return (
    <article className="book" onMouseOver={() =>{
      console.log(title);
    }} >
      <img src={img} alt={footing} />
      <h6 onClick={()=>console.log(title)}>{title}</h6>
      <h4>{author.toUpperCase()}</h4>
      <button type='button' onClick={clickHandler}>
        Button Reference
      </button>
      <button type="button" onClick={()=>buyTheBook(title)}>Add to Shopping Cart</button>
    </article>
  );
};



export default Book