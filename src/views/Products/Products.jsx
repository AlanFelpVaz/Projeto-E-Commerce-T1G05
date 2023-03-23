import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Products = () => {
  return (
    <div>
      <h1>products</h1>
      <button>
      <Link to={`/pay`}>pay</Link>
      </button>
      </div>
    
  )
}

export default Products