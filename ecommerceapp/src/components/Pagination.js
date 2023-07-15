import React from 'react'
import { setCurrentUser } from '../app/userSlice';

import "./style/pagination.css";

function Pagination({totalProducts, productsPerPage, setCurrentPage, currentPage}) {
  let pages = [];
  for (let i=1; i<=Math.ceil(totalProducts/productsPerPage); i++){
    pages.push(i);
  }

  return (
    <div className='pagination'>
      {pages.map((page,index)=>{
        return <button key={index} onClick={()=>setCurrentPage(page)} className={page === currentPage? 'active': ''} >{page}</button>;
      })}
    </div>
  )
}

export default Pagination