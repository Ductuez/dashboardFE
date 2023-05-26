import React, { useEffect } from "react";
import BackendLayout from "./backend-layout";
import Login from "../pages/auth/login";
import { connect } from "react-redux";
import { userProfile } from "../action";
import { checkLogin } from "../ultils/common";

function Layout(props) {
  const { userDetail, children } = props;
  useEffect(() => {
    const { userProfile } = props;
    userProfile();
  }, []);
  const ktLogin = checkLogin(userDetail);

  if (!ktLogin) return <Login />;
  else if (ktLogin) return <BackendLayout>{children}</BackendLayout>;
  else return <BackendLayout>{children}</BackendLayout>;
}

const mapStateToProps = (common) => {
  return common;
};

const mapDispatchToProps = {
  userProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
