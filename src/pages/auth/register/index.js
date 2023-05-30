import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

import { dangNhap, userProfile, dangKy } from "../../../action";
import FormDangKy from "../../../components/FormDangKy/FormDangKy";
import { xuLyDangKy } from "../../../ultil/handler";

class Register extends React.Component {
  state = {
    hasError: false,
  };

  FormHandler(event) {
    //event.preventDefault();
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    const propertiesFormDangKy = {
      xuLyDangKy: xuLyDangKy(this),
    };

    return (
      <React.Fragment>
        <div className='misc-wrapper'>
          <div className='misc-content'>
            <Container>
              <Row className='justify-content-center'>
                <Col md={4} xs={12}>
                  <FormDangKy {...propertiesFormDangKy} />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (common) => {
  return common;
};

const mapDispatchToProps = {
  dangNhap,
  userProfile,
  dangKy,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
