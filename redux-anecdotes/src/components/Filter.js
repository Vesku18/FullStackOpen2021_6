import React from 'react'
import {setFilter} from '../reducers/filterReducer'

import { useDispatch } from 'react-redux'

const Filter = () => {

  const dispatch = useDispatch()

  const handleChange = (event) => {
    event.preventDefault()
    // input-kentän arvo muuttujassa event.target.value
    const filterValue = event.target.value
    dispatch(setFilter(filterValue))
    }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} name="filter"/>
    </div>
  )
}

export default Filter