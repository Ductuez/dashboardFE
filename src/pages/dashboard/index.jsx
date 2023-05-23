import React from "react";
import "./index.scss";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { MD5 } from "crypto-js";
import * as R from "ramda";

import C3Chart from "react-c3js";
import { Events, animateScroll as scroll, scroller } from "react-scroll";
import { connect } from "react-redux";
import { truyCapValidCode, userProfile, truyCapLogintk88 } from "../../action";
import { xuLyLoginTk88 } from "../../ultil/handler";

const donut = {
  columns: [
    ["Other", 15],
    ["Desktop", 45],
    ["Tablet", 15],
    ["Mobile", 25],
  ],
  type: "donut",
  onclick: function (d, i) {
    console.log("onclick", d, i);
  },
  onmouseover: function (d, i) {
    console.log("onmouseover", d, i);
  },
  onmouseout: function (d, i) {
    console.log("onmouseout", d, i);
  },

  donut: {
    label: {
      show: false,
    },
    title: "Our Visits",
    width: 20,
  },

  legend: {
    hide: true,
  },
  color: {
    pattern: ["#909fa7", "#967ADC", "#00c5dc", "#5867dd"],
  },
};

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.state = {
      base64String: "",
      identity: "",
    };
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container",
      })
    );
  }

  componentDidMount() {
    const { truyCapValidCode } = this.props;
    truyCapValidCode().then((result) => {
      this.setState({
        base64String: result.img,
        form: {
          // validCodeIdentity: result.identity,
        },
      });
    });
  }

  render() {
    const { userDetail } = this.props;

    const hasTokenBet88 = R.pathOr("", ["duLieu", "tokenBet"])(userDetail);

    // const renderImageFromBase64 = () => {
    //   return (
    //     <img
    //       src={`data:image/png;base64,${this.state.base64String}`}
    //       alt='Base64 Image'
    //     />
    //   );
    // };

    const xuLyNoiBoLogin = (e) => {
      e.preventDefault();
      const passwordMD5 = MD5(this.state.form.password).toString();
      xuLyLoginTk88(this)({ ...this.state.form, password: passwordMD5 });
    };

    const handleChange = (e) => {
      const { value, name } = e.target;

      this.setState({
        form: {
          ...this.state.form,
          [name]: value,
        },
      });
    };

    return (
      <React.Fragment>
        <Row className='w-no-padding margin-b-30'>
          <Col md='3'>
            <div className='widget  bg-light'>
              <Row className='row-table '>
                <div className='margin-b-30'>
                  <h2 className='margin-b-5'>Product</h2>
                  <p className='text-muted'>Total Product</p>
                  <span className='float-right text-primary widget-r-m'>
                    37859
                  </span>
                </div>
                <div className='progress margin-b-10  progress-mini'>
                  <div
                    style={{ width: "50%" }}
                    className='progress-bar bg-primary'
                  />
                </div>
                <p className='text-muted float-left margin-b-0'>Change</p>
                <p className='text-muted float-right margin-b-0'>50%</p>
              </Row>
            </div>
          </Col>
          <Col md='3'>
            <div className='widget  bg-light'>
              <Row className='row-table '>
                <div className='margin-b-30'>
                  <h2 className='margin-b-5'>Sales</h2>
                  <p className='text-muted'>Total Sales</p>
                  <span className='float-right text-indigo widget-r-m'>
                    1758
                  </span>
                </div>
                <div className='progress margin-b-10 progress-mini'>
                  <div
                    style={{ width: "45%" }}
                    className='progress-bar bg-indigo'
                  />
                </div>
                <p className='text-muted float-left margin-b-0'>Change</p>
                <p className='text-muted float-right margin-b-0'>450%</p>
              </Row>
            </div>
          </Col>
          <Col md='3'>
            <div className='widget  bg-light'>
              <Row className='row-table '>
                <div className='margin-b-30'>
                  <h2 className='margin-b-5'>Orders</h2>
                  <p className='text-muted'>Total Orders</p>
                  <span className='float-right text-success widget-r-m'>
                    1385
                  </span>
                </div>
                <div className='progress margin-b-10 progress-mini'>
                  <div
                    style={{ width: "85%" }}
                    className='progress-bar bg-success'
                  />
                </div>
                <p className='text-muted float-left margin-b-0'>Change</p>
                <p className='text-muted float-right margin-b-0'>85%</p>
              </Row>
            </div>
          </Col>
          <Col md='3'>
            <div className='widget  bg-light'>
              <Row className='row-table '>
                <div className='margin-b-30'>
                  <h2 className='margin-b-5'>Visitors</h2>
                  <p className='text-muted'>Total Visitors</p>
                  <span className='float-right text-warning widget-r-m'>
                    98421
                  </span>
                </div>
                <div className='progress margin-b-10 progress-mini'>
                  <div
                    style={{ width: "38%" }}
                    className='progress-bar bg-warning'
                  />
                </div>
                <p className='text-muted float-left margin-b-0'>Change</p>
                <p className='text-muted float-right margin-b-0'>38%</p>
              </Row>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md='4'>
            <Card>
              <Card.Header>
                Our Visitors
                <p className='text-muted'>Different Devices Used to Visit</p>
              </Card.Header>
              <Card.Body>
                <div id='donut' />
                <C3Chart data={donut} />
                <ul className='list-1 list-group'>
                  <li className='list-group-item'>
                    Desktop{" "}
                    <span className='float-right text-indigo'>
                      <i className='fa fa-arrow-up' /> 45.0%
                    </span>
                  </li>
                  <li className='list-group-item'>
                    Mobile{" "}
                    <span className='float-right text-primary'>
                      <i className='fa fa-minus' /> 25.0%
                    </span>
                  </li>
                  <li className='list-group-item'>
                    Tablet{" "}
                    <span className='float-right text-teal'>
                      <i className='fa fa-arrow-down' /> 15.0%
                    </span>
                  </li>
                  <li className='list-group-item'>
                    Other{" "}
                    <span className='float-right text-muted'>
                      <i className='fa fa-arrow-up' /> 15.0%
                    </span>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          {!hasTokenBet88 && (
            <Col md='8'>
              <Card>
                <Card.Header>Tài khoản Tk88</Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Group className='row'>
                      <Form.Label htmlFor='inputEmail3' className='col-sm-2 '>
                        Username
                      </Form.Label>
                      <Col sm='10'>
                        <Form.Control
                          placeholder='Email'
                          onChange={handleChange}
                          name='account'
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group className='row'>
                      <Form.Label htmlFor='inputEmail3' className='col-sm-2 '>
                        Password
                      </Form.Label>
                      <Col sm='10'>
                        <Form.Control
                          type='password'
                          placeholder='Password'
                          className='Form-control'
                          onChange={handleChange}
                          name='password'
                        />
                      </Col>
                    </Form.Group>

                    {/* <Form.Group className='row '>
                    <Form.Label className='col-sm-2 '>Mã xác nhận</Form.Label>
                    <Col sm='10'>
                      <Form.Control
                        type='text'
                        placeholder='validcod'
                        className='Form-control'
                        onChange={handleChange}
                        name='validCode'
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group className='row '>
                    <Col sm='10'>{renderImageFromBase64()}</Col>
                  </Form.Group> */}
                    <Button
                      type='submit'
                      className='btn-sm'
                      onClick={(e) => xuLyNoiBoLogin(e)}
                    >
                      Sign in
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (common) => {
  return common;
};

const mapDispatchToProps = {
  truyCapValidCode,
  userProfile,
  truyCapLogintk88,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
