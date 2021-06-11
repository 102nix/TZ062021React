import { call, put, takeEvery } from 'redux-saga/effects'
import { api } from '../../api'
import { actions } from '../AC'
import { RootReducerConsts } from '../rootReducerConsts'

function* getBigDataWorker () {
  try {
    const reaponse = yield call (api.getBigData)
    yield put (actions.setData(reaponse.data))
  } catch (err) {
    console.log(err)
  }
}

export function* getBigDataWotcher () {
  yield takeEvery ( RootReducerConsts.getBigDataSaga, getBigDataWorker)
}