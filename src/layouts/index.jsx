import React, { useEffect } from "react";
import BackendLayout from "./backend-layout";
import Login from "../pages/auth/login";
import { connect } from "react-redux";
import { userProfile } from "../action";
import { checkLogin } from "../ultils/common";

function Layout(props) {
  useEffect(() => {
    props.userProfile();
  }, []);
  const ktLogin = checkLogin(props.userDetail);

  if (!ktLogin) return <Login />;
  else if (ktLogin) return <BackendLayout>{props.children}</BackendLayout>;
  else return <BackendLayout>{props.children}</BackendLayout>;
}

const mapStateToProps = (common) => {
  return common;
};

const mapDispatchToProps = {
  userProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
