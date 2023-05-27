import { Router } from "react-router-dom/cjs/react-router-dom.min";
import * as R from "ramda";

export const xuLyLogin = (props) => (duLieu) => {
  const { dangNhap, userProfile } = props;
  dangNhap(duLieu).then((result) => {
    Router.push("/");
    userProfile();
  });
};

export const xuLyValidCode = (props) => () => {
  const { truyCapValidCode } = props;

  truyCapValidCode();
};

export const xuLyLoginTk88 = (self) => (duLieu) => {
  const { truyCapLogintk88, userProfile } = self.props;

  truyCapLogintk88(duLieu).then(() => {
    setTimeout(() => {
      userProfile();
    }, 1500);
  });
};

export const xuLyTaoBot = (self) => (duLieu) => {
  const { taoBot, listBot } = self.props;

  console.log(duLieu);

  taoBot({ duLieu }).then(() => {
    listBot();
  });
};

export const xuLyStartBot = (self) => (duLieu) => {
  const { startBot } = self.props;
  const game = R.pathOr([], ["game"])(duLieu);

  async function callAPIsSequentially() {
    for (let i = 0; i < game.length; i++) {
      const type = game[i];

      try {
        await startBot({ duLieu: { ...duLieu, botId: duLieu._id }, type });
      } catch (error) {
        console.error("Lỗi khi gọi API:", error.message);
      }
    }
  }

  callAPIsSequentially();
};
export const xuLyStopBot = (self) => (duLieu) => {};

export const xuLyChoiThu = (self) => (e) => {
  const { choiThu } = self.props;
  e.preventDefault();
  choiThu().then((result) => {});
};
