import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { actions } from '../../redux/AC'
import './HomePage.scss'

export const HomePage = () => {

  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    dispatch(actions.setData([]))
  }, [])

  const choiceSize = (value) => {
    dispatch(actions.setBigSmall(value))
    history.push('/table')
  }

  return (
    <div className="homepage">
      <div className="homepage__body">
        <div className="homepage__title">ТЗ по React</div>
        <div className="homepage__content">
          <button className="btn" onClick={() => choiceSize('small')}>Маленький набор данных</button>
          <button className="btn" onClick={() => choiceSize('big')}>Большой набор данных</button>
        </div>
      </div>
    </div>
  )
}