import { takeLatest } from "redux-saga/effects";
import { FETCH_CURRENT_USER_REQUEST } from "./types/types";
import { fetchUserSaga } from "./sagas/usersSagas";


export default function* rootSaga(){
  yield takeLatest(FETCH_CURRENT_USER_REQUEST, fetchUserSaga);
}