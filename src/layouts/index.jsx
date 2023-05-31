import React, { useEffect } from "react";
import BackendLayout from "./backend-layout";
import Login from "../pages/auth/login";
import { connect } from "react-redux";
import { userProfile } from "../action";
import { checkLogin } from "../ultil/common";
import io from "socket.io-client";
import { API_TX } from "../ultil/services";
const socket = io(API_TX.baseURL);

function Layout(props) {
  const { userDetail, children } = props;

  console.log(socket);

  useEffect(() => {
    const { userProfile } = props;
    userProfile().then((result) => {
      socket.on("connect", (socket) => {
        console.log(socket);
      });

      // Event handler for custom 'message' event
      socket.on("message", (data) => {
        console.log("Received a message:", data);
      });
    });

    // Event handler for 'connect' event

    return () => {
      socket.disconnect();
    };

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
