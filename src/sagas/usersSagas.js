import { call, put } from "redux-saga/effects";
import {  } from './../actions/users';
import { userLoggedIn } from './../actions/auth';

import { users} from './../api';


// export function* createUserSaga(action) {
//   try {
//     const user = yield call(users.signup ,action.user);
//     localStorage.trndy = user.token;
//     yield put(userLoggedIn(user));
//     history.push("/dashboard");
//   } catch (err) {
//     yield put(createUserFailure(err.response.data.errors));
//   }
// }

export function* fetchUserSaga() {
  const user = yield call(users.currentUser);
  console.log("current user fetched")
  console.log(user);
  yield put(userLoggedIn(user));
}