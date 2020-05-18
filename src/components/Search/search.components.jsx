import React from 'react'

export default function Search({ handleChange, placeholder }) {
    return (
        <input type='search' placeholder={placeholder} onChange={handleChange}/> 
    )}
