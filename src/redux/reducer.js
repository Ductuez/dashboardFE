// Chung
import { reducer as dangNhapReducer } from "./dangNhap";
import { reducer as truyCapValidCodeReducer } from "./truyCapValidCode";
import { reducer as truyCapLogintk88Reducer } from "./truyCapLogintk88";
import { reducer as userProfileReducer } from "./userProfile";
import { reducer as taoBotReducer } from "./taoBot";
import { reducer as listBotReducer } from "./listBot";
import { reducer as startBotReducer } from "./startBot";
import { reducer as choiThuReducer } from "./choiThu";
import { reducer as listDsBetReducer } from "./listDsBet";

const reducers = [
  // Chung
  dangNhapReducer,
  truyCapValidCodeReducer,
  truyCapLogintk88Reducer,
  userProfileReducer,
  taoBotReducer,
  listBotReducer,
  startBotReducer,
  listDsBetReducer,
  choiThuReducer,
];

export default function reducer(state = {}, action) {
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
