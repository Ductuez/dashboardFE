import React from "react";
import BackendLayout from "./backend-layout";
import Login from "../pages/auth/login";
import { connect } from "react-redux";

import { checkLogin } from "../ultils/common";

function Layout(props) {
  const ktLogin = checkLogin(props.userDetail);

  console.log(ktLogin);

  if (!ktLogin) return <Login />;
  else if (ktLogin) return <BackendLayout>{props.children}</BackendLayout>;
  else return <BackendLayout>{props.children}</BackendLayout>;
}

const mapStateToProps = (common) => {
  console.log(common);
  return common;
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
