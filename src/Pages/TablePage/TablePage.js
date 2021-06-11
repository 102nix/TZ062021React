import React from 'react'
import { NavLink } from 'react-router-dom'
import './TablePage.scss'
import homePNG from '../../assets/house.png'
//components&pages:
import { FilterInput } from '../../Components/FilterInput/FilterInput'
import { Pagination } from '../../Components/Pagination/Pagination'
import { RowInfoPage } from '../RowInfoPage/RowInfoPage'
import Loader from '../../Components/Loader/Loader'


export const TablePage = (props) => {
  
  const { 
    data, 
    handlerSortNumbers, 
    handlerSortString, 
    dataOrder, 
    defaultClass, 
    start, 
    end, 
    showRowFromTable, 
    row, 
    toggleModal,
    
  } = props
  console.log(data.length)

    return (
      <>
        {
          data.length === 0 ? <Loader /> :
          <div className="tablepage">
            <NavLink exact to="/" className="tablepage__link">
              <img src={homePNG} alt=""/>
            </NavLink>
            <div className="tablepage__body">
              <Pagination />
              <FilterInput />
              <div className="tablepage__actions">
                <button className="btn-add" onClick={() => toggleModal(true)}>Добавить</button>
              </div>
              <div className="tablepage__table">
                <table className="table">
                  <thead>
                    <tr>
                      <th
                        data-order={dataOrder}
                        onClick={(e) => handlerSortNumbers(e)}
                        className={ defaultClass === 'id' ? 'sorted' : ''}
                      >
                        id
                      </th>
                      <th 
                        data-order={dataOrder}
                        onClick={(e) => handlerSortString(e)}
                        className={ defaultClass === 'firstName' ? 'sorted' : ''}
                      >
                        firstName
                      </th>
                      <th
                        data-order={dataOrder}
                        onClick={(e) => handlerSortString(e)}
                        className={ defaultClass === 'lastName' ? 'sorted' : ''}
                      >
                        lastName
                      </th>
                      <th
                        data-order={dataOrder}
                        onClick={(e) => handlerSortString(e)}
                        className={ defaultClass === 'email' ? 'sorted' : ''}
                      >
                        email
                      </th>
                      <th
                        data-order={dataOrder}
                        onClick={(e) => handlerSortNumbers(e)}
                        className={ defaultClass === 'phone' ? 'sorted' : ''}
                      >
                        phone
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data
                      .slice(start, end)
                        .map(element => (
                          <tr onClick={() => showRowFromTable(element)} key={element.id}>
                            <td>{element.id}</td>
                            <td>{element.firstName}</td>
                            <td>{element.lastName}</td>
                            <td>{element.email}</td>
                            <td>{element.phone}</td>
                          </tr>
                        ))
                    }
                  </tbody>
                </table>
              </div>
              {
                row !== null &&
                <RowInfoPage 
                  firstName={row[0].firstName} 
                  lastName={row[0].lastName}
                  description={row[0].description}
                  address={row[0].address} 
                />
              }
            </div>
          </div>
        }
      </>
      
  )
}