import { Router } from "react-router-dom/cjs/react-router-dom.min";

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
  const { truyCapLogintk88 } = self.props;

  truyCapLogintk88(duLieu);
};

export const xuLyTaoBot = (self) => (duLieu) => {
  const { taoBot } = self.props;
  taoBot({ duLieu });
};
