import React from 'react'
import './Card.css'
export default function Card({children}) {
  return (
    <div className='custom-card p-4 my-4'>{children}</div>
  )
}
