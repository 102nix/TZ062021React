import { call, put, takeEvery } from 'redux-saga/effects'
import { api } from '../../api'
import { actions } from '../AC'
import { RootReducerConsts } from '../rootReducerConsts'

function* getSmallDataWorker () {
  try {
    const reaponse = yield call (api.getSmallData)
    yield put (actions.setData(reaponse.data))
  } catch (err) {
    console.log(err)
  }
}

export function* getSmallDataWotcher () {
  yield takeEvery ( RootReducerConsts.getSmallDataSaga, getSmallDataWorker)
}