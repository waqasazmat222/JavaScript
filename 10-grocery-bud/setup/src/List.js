import React from 'react'
//import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items}) => {
  return <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item;
         return<article key={id} className="grocery-item">
             <p className="title">{title}</p>
              <div className="btn-container">
                <button type="button" className="edit-btn">
                  edit
                </button>
                <button type="button" className="edit-btn">
                  delete
                </button>
              </div>
           </article>
       })} 
    </div>
}

export default List
