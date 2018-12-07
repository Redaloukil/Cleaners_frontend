import { call, put } from "redux-saga/effects";
import { userLoggedIn } from './../actions/auth';

import { users} from './../api';


export function* fetchUserSaga() {
  const user = yield call(users.currentUser);
  console.log("current user fetched")
  console.log(user);
  yield put(userLoggedIn(user));
}
