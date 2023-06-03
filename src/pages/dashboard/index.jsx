import React from "react";
import "./index.scss";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { MD5 } from "crypto-js";
import * as R from "ramda";
import { withRouter } from "react-router-dom";

import { Events, animateScroll as scroll, scroller } from "react-scroll";
import { connect } from "react-redux";
import {
  truyCapValidCode,
  userProfile,
  truyCapLogintk88,
  choiThu,
  capNhatToken88,
} from "../../action";
import { xuLyLoginTk88, xuLyToken88 } from "../../ultil/handler";
import { NumericFormat } from "react-number-format";

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
    const { userDetail, dsBot, dsBet } = this.props;

    const hasTokenBet88 = R.pathOr("", ["duLieu", "tokenBet"])(userDetail);
    const money = R.pathOr("", ["duLieu", "money"])(userDetail);
    const tongThangThua = R.pathOr(0, ["duLieu", "other", "rewardRebate"])(
      dsBet
    );

    const BotDangHoatDong = R.compose(
      R.find((item) => item.status === true),
      R.pathOr([], ["duLieu"])
    )(dsBot);

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

    const xuLyNoiBoToken88 = (e) => {
      e.preventDefault();
      xuLyToken88(this)(this.state.form.token88);
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
                  <h2 className='margin-b-5'>Money</h2>
                  <p className='text-muted'>vnđ </p>
                  <span className='float-right text-primary widget-r-m'>
                    <NumericFormat
                      value={money}
                      thousandSeparator=','
                      displayType='text'
                      renderText={(value) => <b>{value} </b>}
                    />
                  </span>
                </div>
              </Row>
            </div>
          </Col>
          <Col md='3'>
            <div className='widget  bg-light'>
              <Row className='row-table '>
                <div className='margin-b-30'>
                  <h2 className='margin-b-5'>Win/Lose</h2>
                  <p className='text-muted'>Count</p>
                  <span className='float-right text-indigo widget-r-m'>
                    {BotDangHoatDong?.winCount} / {BotDangHoatDong?.loseCount}
                  </span>
                </div>
              </Row>
            </div>
          </Col>
          <Col md='3'>
            <div className='widget  bg-light'>
              <Row className='row-table '>
                <div className='margin-b-30'>
                  <h2 className='margin-b-5'>Lãi Bot đang chạy</h2>
                  <p className='text-muted'>Vnđ</p>
                  <span className='float-right text-success widget-r-m'>
                    <NumericFormat
                      value={BotDangHoatDong?.moneyWin || 0}
                      thousandSeparator=','
                      displayType='text'
                      renderText={(value) => <b>{value} </b>}
                    />
                  </span>
                </div>
              </Row>
            </div>
          </Col>
          <Col md='3'>
            <div className='widget  bg-light'>
              <Row className='row-table '>
                <div className='margin-b-30'>
                  <h2 className='margin-b-5'>Lãi ngày</h2>
                  <p className='text-muted'>Vnd</p>
                  <span className='float-right text-warning widget-r-m'>
                    <NumericFormat
                      value={tongThangThua || 0}
                      thousandSeparator=','
                      displayType='text'
                      renderText={(value) => <b>{value} </b>}
                    />
                  </span>
                </div>
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
                <ul className='list-1 list-group'>
                  <li className='list-group-item'>
                    Desktop
                    <span className='float-right text-indigo'>
                      <i className='fa fa-arrow-up' /> 45.0%
                    </span>
                  </li>
                  <li className='list-group-item'>
                    Mobile
                    <span className='float-right text-primary'>
                      <i className='fa fa-minus' /> 25.0%
                    </span>
                  </li>
                  <li className='list-group-item'>
                    Tablet
                    <span className='float-right text-teal'>
                      <i className='fa fa-arrow-down' /> 15.0%
                    </span>
                  </li>
                  <li className='list-group-item'>
                    Other
                    <span className='float-right text-muted'>
                      <i className='fa fa-arrow-up' /> 15.0%
                    </span>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          {!hasTokenBet88 && (
            <>
              <Col xs='8'>
                <Card>
                  <Card.Header>Tài khoản Tk88</Card.Header>
                  <Card.Body>
                    <Form validated>
                      <Form.Group className='row'>
                        <Form.Label htmlFor='inputEmail3' className='col-sm-2 '>
                          Username
                        </Form.Label>
                        <Col sm='10'>
                          <Form.Control
                            placeholder='Email'
                            onChange={handleChange}
                            name='account'
                            required
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
                            required
                          />
                        </Col>
                      </Form.Group>

                      <Button
                        type='submit'
                        className='btn-sm mr-2'
                        onClick={(e) => xuLyNoiBoLogin(e)}
                      >
                        Đăng nhập
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>

              {!hasTokenBet88 && (
                <Col xs='8'>
                  <Card>
                    <Card.Header>Token 88</Card.Header>
                    <Card.Body>
                      <Form validated>
                        <Form.Group className='row'>
                          <Form.Label className='col-sm-2 '>
                            Token 88
                          </Form.Label>
                          <Col sm='10'>
                            <Form.Control
                              placeholder='Vui lòng nhập Token88'
                              onChange={handleChange}
                              name='token88'
                              required
                            />
                          </Col>
                        </Form.Group>

                        <Button
                          type='submit'
                          className='btn-sm mr-2'
                          onClick={(e) => xuLyNoiBoToken88(e)}
                        >
                          Submit
                        </Button>
                      </Form>
                    </Card.Body>
                  </Card>
                </Col>
              )}
            </>
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
  choiThu,
  capNhatToken88,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Dashboard));
