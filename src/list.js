import React from 'react';

const List = ({items, removeTodo}) => {
  return (
    <div>
        
      {items.map((item)=>{
        const {id, title} = item;

        return (

          <article key={id} className="article-list">
            <p>{title}</p>
            <button type='button' className='btn-remove' onClick={()=>removeTodo(id)}>delete</button>
        </article>
        )
      })}

    </div>
  )
}

export default List;
