import React from 'react'
import './RowInfoPage.scss'

export const RowInfoPage = ({firstName, lastName, description, address}) => {
  return (
    <div className="home__row">
      <div className="home__row-title">
        Выбран пользователь <b>{firstName} {lastName}</b>
      </div>
      <textarea defaultValue={description} />
      <div className="home__row-info">
        <div>Адрес проживания: <b>{address.streetAddress}</b></div> 
        <div>Город: <b>{address.city}</b></div>
        <div>Провинция/штат: <b>{address.state}</b></div>
        <div>Индекс: <b>{address.zip}</b></div>
      </div>
    </div>
  )
}