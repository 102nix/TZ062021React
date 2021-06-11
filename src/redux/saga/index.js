import { all } from 'redux-saga/effects'
import { getBigDataWotcher } from './getBigDataSaga'
import { getSmallDataWotcher } from './getSmallDataSaga'

export function* rootWatcher () {
  yield all ([getBigDataWotcher(), getSmallDataWotcher()])
}