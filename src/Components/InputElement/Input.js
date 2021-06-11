import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../redux/AC'
import './Input.scss'

export const Input = ({label, ...props}) => {

  const [value, setValue] = useState('')

  const dispatch = useDispatch()
  
  const smallBig = useSelector((state) => state.dataReducer.smallBig)
  const data = useSelector((state) => state.dataReducer.data)

  const filterHandler = (e) => {
    const filterValue = e.target.value
    setValue(filterValue)

    if (filterValue.length > 0) {
      let arrSearchElms = []
      data.forEach(element => (
        Object.values(element).toString().toLowerCase().indexOf(filterValue.toLowerCase()) !== -1 && arrSearchElms.push(element)))
      dispatch(actions.setData(arrSearchElms))
    }  
    else if (filterValue.length === 0) {
      dispatch(smallBig === 'big' ? actions.getBigDataSaga(): actions.getSmallDataSaga()) 
    }
  }

  return (
    <div className="search">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        {...props}
        value={value}
        onChange={(e) => filterHandler(e)}
      />
      <button onClick={filterHandler}>Найти</button>
    </div>
  )
}
