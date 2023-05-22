export const xuLyLogin = (self) => (duLieu) => {
  const { dangNhap, userProfile } = self.props;
  dangNhap(duLieu).then((result) => {
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
