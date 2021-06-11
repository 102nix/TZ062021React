    import React from 'react'
    import { useSelector, useDispatch } from 'react-redux'
    import { actions } from '../../redux/AC'

    export const Pagination = () => {
      
      const dispatch = useDispatch()

      const data = useSelector((state) => state.dataReducer.data)
      const currentPage = useSelector((state) => state.dataReducer.currentPage)
      const start = useSelector((state) => state.dataReducer.start)
      const end = useSelector((state) => state.dataReducer.end)
      
      /////Pagination/////
      let pages = []
   
      if (data !== null) {
        const pageSize = 50
        const pageCount = Math.ceil(data.length / pageSize)
    
        for (let i = 1; i <= pageCount; i++) {
          pages.push(i)
        }
      }
   
      const arrowPaginate = (val) => {
        const dataPaginat = {
          currentPage: (currentPage + val[0]),
          start: (start + val[1]),
          end: (end + val[1])
        }
        dispatch(actions.setCurrentPage(dataPaginat))
      }

      const numberPaginate = (val) => {
        const dataPaginat = {
          currentPage: val[0],
          start: val[0],
          end: val[1]
        }
        dispatch(actions.setCurrentPage(dataPaginat))
      }
    
     /////Pagination/////

     return (
      <div className="tablepage__paginate">
        { 
          currentPage !== 1 &&
          <small className="goto-back-forward" onClick={() => arrowPaginate([-1, -49])}>&#171;</small>
        }
        { pages.length > 1 &&
          pages.map(page => (
            <small 
              className={page === currentPage ? 'current-page' : 'pages-number'}
              onClick={() => numberPaginate([page, page + 49]) }
            >
              {page}
            </small>
          ))
        }
        {
          currentPage < pages.length &&  
          <small className="goto-back-forward" onClick={() => arrowPaginate([1, 49])}>&#187;</small>
        }
      </div>
     )
    }
    