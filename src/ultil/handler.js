import { Router } from "react-router-dom/cjs/react-router-dom.min";
import * as R from "ramda";

export const xuLyLogin = (self) => (duLieu) => {
  const { dangNhap, userProfile } = self.props;
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

export const xuLyXoaBot = (self) => (duLieu) => {
  const { xoaBot, listBot } = self.props;

  const idBot = duLieu._id;
  const duLieuGui = {
    idBot,
  };

  xoaBot(duLieuGui).then(() => {
    listBot();
  });
};

export const xuLyDangKy = (self) => (duLieu) => {
  const { dangKy, userProfile } = self.props;
  const duLieuBieuMau = {
    ...duLieu,
  };

  dangKy(duLieuBieuMau).then(() => {
    userProfile();
  });
};
