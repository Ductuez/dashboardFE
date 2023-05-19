import Router from "next/router";

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

export const xuLyLoginTk88 = (props) => (duLieu) => {
  const { truyCapLogintk88 } = props;
  truyCapLogintk88(duLieu);
};
