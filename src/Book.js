import React from 'react';

const Book = (props) => {
  //attribute,event handler
  //onClick and on mouse Hover

  const clickHandler=()=>{
    alert('Hello World');
  }
  const complexExample=(author)=>{
     console.log(author);
  }

  console.log(props)
  const { img, title, author } = props;
  return (
    <article className="book" onMouseOver={()=>console.log(title)}>
      <img src={img} alt=""/>
      <h1 onClick={()=>console.log({title})}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>Reference</button>
      <button type="button" onClick={()=>complexExample(author)}>more complex examplee</button>

    </article>
  );
};

export default Book