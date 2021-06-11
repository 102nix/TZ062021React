import { RootReducerConsts } from './rootReducerConsts'

let initialState = {
  data: null,
  currentPage: 1,
  start: 0,
  end: 49,
  row: null,
  isModal: false,
  smallBig: null
}

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case RootReducerConsts.setData:
      return {
        ...state,
        data: action.payload
      }
    case RootReducerConsts.UpdateCurrentPage:
      return {
        ...state,
        currentPage: action.val.currentPage,
        start: action.val.start,
        end: action.val.end
      }
    case RootReducerConsts.setRow:
      return {
        ...state,
        row: action.row
      }
    case RootReducerConsts.setModal:
      return {
        ...state,
        isModal: action.value
      }
    case RootReducerConsts.setBigSmall:
      return {
        ...state,
        smallBig: action.value
      }
    default: return state
  }
}

export default dataReducer