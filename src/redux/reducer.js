import initialState from "./initialState";
// Chung
import { reducer as dangNhapReducer } from "./dangNhap";
import { reducer as truyCapValidCodeReducer } from "./truyCapValidCode";
import { reducer as truyCapLogintk88Reducer } from "./truyCapLogintk88";
import { reducer as userProfileReducer } from "./userProfile";

const reducers = [
  // Chung
  dangNhapReducer,
  truyCapValidCodeReducer,
  truyCapLogintk88Reducer,
  userProfileReducer,
];

export default function reducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}
