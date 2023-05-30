import React, { useEffect } from "react";
import BackendLayout from "./backend-layout";
import Login from "../pages/auth/login";
import { connect } from "react-redux";
import { userProfile } from "../action";
import { checkLogin } from "../ultil/common";
// import io from "socket.io-client";
// import { API_TX } from "../ultil/services";
// const socket = io(API_TX.baseURL);

function Layout(props) {
  const { userDetail, children } = props;

  useEffect(() => {
    const { userProfile } = props;
    userProfile();

    // // Event handler for 'connect' event
    // socket.on("connect", () => {
    //   console.log("Connected to Socket.IO server");
    // });

    // // Event handler for custom 'message' event
    // socket.on("message", (data) => {
    //   console.log("Received a message:", data);
    // });

    // return () => {
    //   socket.disconnect();
    // };

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
