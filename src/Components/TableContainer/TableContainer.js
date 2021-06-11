import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../redux/AC'
//components&pages:
import { TablePage } from '../../Pages/TablePage/TablePage'
import { AddRowForm } from '../Modal/AddRowForm'

export const TableContainer = () => {
  const [defaultClass, setDefaultClass] = useState('') 
  const [reverse, setReverse] = useState(false)
  const [dataOrder, setDataOrder] = useState('')

  useEffect(() => {
    if (smallBig === null) dispatch(actions.getSmallDataSaga())
    if (smallBig === 'small') dispatch(actions.getSmallDataSaga())
    if (smallBig === 'big') dispatch(actions.getBigDataSaga())
  }, []) 

  const dispatch = useDispatch()
  
  const smallBig = useSelector((state) => state.dataReducer.smallBig)
  const data = useSelector((state) => state.dataReducer.data)
  const start = useSelector((state) => state.dataReducer.start)
  const end = useSelector((state) => state.dataReducer.end)
  const row = useSelector((state) => state.dataReducer.row)
  const isModal = useSelector((state) => state.dataReducer.isModal)

  //show|hide modalWindow
  const toggleModal = (value) => {
    dispatch(actions.setModal(value))
  }

  //sort numbers
  const handlerSortNumbers = (event) => {
    let newArr = [...data.sort(function(a, b) {
        if (!reverse) {
          setReverse(true)
          dataOrder === '1' ? setDataOrder('-1') : setDataOrder('1')  
          if (typeof(a[event.target.innerText]) === 'string') {
            return parseInt(a[event.target.innerText].slice(1,-1)) - parseInt(b[event.target.innerText].slice(1,-1))
          }
          return parseInt(a[event.target.innerText]) - parseInt(b[event.target.innerText])
        } else {
          setReverse(false)
          dataOrder === '-1' ? setDataOrder('1') : setDataOrder('-1')  
          if (typeof(a[event.target.innerText]) === 'string') {
            return parseInt(b[event.target.innerText].slice(1,-1)) - parseInt(a[event.target.innerText].slice(1,-1))  
          }
          return parseInt(b[event.target.innerText]) - parseInt(a[event.target.innerText])
        }
    })]
    dispatch(actions.setData(newArr))
    setDefaultClass(event.target.outerText)
  }

  //sort string
  const handlerSortString = (event) => {
    let newArr = [...data.sort(function(a, b) {
        if ((a[event.target.innerText] >= b[event.target.innerText]) && !reverse) {
          setReverse(prev => !prev)
          dataOrder === '1' ? setDataOrder('-1') : setDataOrder('1')  
          setDataOrder('1')
          return 1
        } else {
          setReverse(prev => !prev)
          dataOrder === '-1' ? setDataOrder('1') : setDataOrder('-1')  
          return -1
        }
        return 0
    })]
    dispatch(actions.setData(newArr))
    setDefaultClass(event.target.outerText)
  }

  //if click -> show row under the table
  const showRowFromTable = (row) => {
    const filterRow = [...data.filter(el => el.id === row.id)]
    dispatch(actions.setRow(filterRow))
  }

  return (
    <>
      { isModal &&
        <AddRowForm toggleModal={toggleModal}/> 
      }
      {
        data !== null &&
          <TablePage
            data={data} 
            handlerSortNumbers={handlerSortNumbers} 
            handlerSortString={handlerSortString}
            dataOrder={dataOrder}
            defaultClass={defaultClass}
            start={start}
            end={end}
            showRowFromTable={showRowFromTable}
            row={row}
            toggleModal={toggleModal}
          /> 
      }
      </>
  )
}