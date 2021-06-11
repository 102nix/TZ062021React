import { RootReducerConsts } from './rootReducerConsts'

export const actions = {
  getSmallDataSaga: () => ({type: RootReducerConsts.getSmallDataSaga}),
  getBigDataSaga: () => ({type: RootReducerConsts.getBigDataSaga}),
  setData: (payload) => ({type: RootReducerConsts.setData, payload}),
  setCurrentPage: (val) => ({type: RootReducerConsts.UpdateCurrentPage, val}),
  setRow: (row) => ({type: RootReducerConsts.setRow, row}),
  setModal: (value) => ({type: RootReducerConsts.setModal, value}),
  setBigSmall: (value) => ({type: RootReducerConsts.setBigSmall, value})
}