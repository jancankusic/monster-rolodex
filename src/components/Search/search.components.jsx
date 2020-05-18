import React from 'react'
import './search.css'

export default function Search({ handleChange, placeholder }) {
    return (
        <input className='search' type='search' placeholder={placeholder} onChange={handleChange}/> 
    )}
