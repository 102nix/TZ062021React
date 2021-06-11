import React from 'react'
import './FilterInput.scss'
import { Input } from '../InputElement/Input'

export const FilterInput = () => {
  return(
    <div className="filter">
      <Input
        label="Filter" 
        id="filter"
        type="text"
        name="filter" 
      />
    </div>
  )
}