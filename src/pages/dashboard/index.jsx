import React from "react";
import "./index.scss";
import {
  Row,
  Col,
  Card,
  InputGroup,
  Form,
  Table,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { VectorMap } from "react-jvectormap";
import C3Chart from "react-c3js";
import { Events, animateScroll as scroll, scroller } from "react-scroll";

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

  render() {
    return (
      <React.Fragment>
        <Row className="w-no-padding margin-b-30">
          <Col md="3">
            <div className="widget  bg-light">
              <Row className="row-table ">
                <div className="margin-b-30">
                  <h2 className="margin-b-5">Product</h2>
                  <p className="text-muted">Total Product</p>
                  <span className="float-right text-primary widget-r-m">
                    37859
                  </span>
                </div>
                <div className="progress margin-b-10  progress-mini">
                  <div
                    style={{ width: "50%" }}
                    className="progress-bar bg-primary"
                  />
                </div>
                <p className="text-muted float-left margin-b-0">Change</p>
                <p className="text-muted float-right margin-b-0">50%</p>
              </Row>
            </div>
          </Col>
          <Col md="3">
            <div className="widget  bg-light">
              <Row className="row-table ">
                <div className="margin-b-30">
                  <h2 className="margin-b-5">Sales</h2>
                  <p className="text-muted">Total Sales</p>
                  <span className="float-right text-indigo widget-r-m">
                    1758
                  </span>
                </div>
                <div className="progress margin-b-10 progress-mini">
                  <div
                    style={{ width: "45%" }}
                    className="progress-bar bg-indigo"
                  />
                </div>
                <p className="text-muted float-left margin-b-0">Change</p>
                <p className="text-muted float-right margin-b-0">450%</p>
              </Row>
            </div>
          </Col>
          <Col md="3">
            <div className="widget  bg-light">
              <Row className="row-table ">
                <div className="margin-b-30">
                  <h2 className="margin-b-5">Orders</h2>
                  <p className="text-muted">Total Orders</p>
                  <span className="float-right text-success widget-r-m">
                    1385
                  </span>
                </div>
                <div className="progress margin-b-10 progress-mini">
                  <div
                    style={{ width: "85%" }}
                    className="progress-bar bg-success"
                  />
                </div>
                <p className="text-muted float-left margin-b-0">Change</p>
                <p className="text-muted float-right margin-b-0">85%</p>
              </Row>
            </div>
          </Col>
          <Col md="3">
            <div className="widget  bg-light">
              <Row className="row-table ">
                <div className="margin-b-30">
                  <h2 className="margin-b-5">Visitors</h2>
                  <p className="text-muted">Total Visitors</p>
                  <span className="float-right text-warning widget-r-m">
                    98421
                  </span>
                </div>
                <div className="progress margin-b-10 progress-mini">
                  <div
                    style={{ width: "38%" }}
                    className="progress-bar bg-warning"
                  />
                </div>
                <p className="text-muted float-left margin-b-0">Change</p>
                <p className="text-muted float-right margin-b-0">38%</p>
              </Row>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                Current Visitors
                <p className="text-muted">Different Devices Used to Visit</p>
              </Card.Header>
              <Card.Body>
                <div id="world-map-markers" style={{ height: 472 }}>
                  <VectorMap
                    map={"us_aea"}
                    backgroundColor="#ffffff"
                    zoomOnScroll={false}
                    ref="map"
                    containerStyle={{
                      width: "100%",
                      height: "100%",
                      initial: {
                        fill: "#c9d6de",
                      },
                    }}
                    markers={[
                      {
                        latLng: [40.7, -78.0],
                        name: "Newyork: 175",
                        style: { fill: "#4b71fa" },
                      },
                      {
                        latLng: [39.0, -98.48],
                        name: "Kansas: 386",
                        style: { fill: "#f4516c" },
                      },
                      {
                        latLng: [37.0, -122.05],
                        name: "Vally : 450",
                        style: { fill: "#F6BB42" },
                      },
                    ]}
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <Card.Header>
                Our Visitors
                <p className="text-muted">Different Devices Used to Visit</p>
              </Card.Header>
              <Card.Body>
                <div id="donut" />
                <C3Chart data={donut} />
                <ul className="list-1 list-group">
                  <li className="list-group-item">
                    Desktop{" "}
                    <span className="float-right text-indigo">
                      <i className="fa fa-arrow-up" /> 45.0%
                    </span>
                  </li>
                  <li className="list-group-item">
                    Mobile{" "}
                    <span className="float-right text-primary">
                      <i className="fa fa-minus" /> 25.0%
                    </span>
                  </li>
                  <li className="list-group-item">
                    Tablet{" "}
                    <span className="float-right text-teal">
                      <i className="fa fa-arrow-down" /> 15.0%
                    </span>
                  </li>
                  <li className="list-group-item">
                    Other{" "}
                    <span className="float-right text-muted">
                      <i className="fa fa-arrow-up" /> 15.0%
                    </span>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card>
              <Card.Header>
                Recent Comments
                <p className="text-muted">Latest Comments on users</p>
              </Card.Header>
              <div className="comment-widgets">
                <div className="d-flex flex-row comment-row">
                  <div className="mr-2">
                    <img
                      alt="user"
                      className="rounded-circle"
                      src="/assets/img/avtar-1.png"
                      width={50}
                    />
                  </div>
                  <div className="comment-text w-100">
                    <h5>John Doe</h5>
                    <p className="m-b-5">
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry.
                    </p>
                    <div className="comment-footer">
                      <span className="text-muted pull-right">
                        April 8, 2018
                      </span>
                      <span className="label label-info">Pending</span>
                      <span className="action-icons">
                        <Link to="#be">
                          <i className="ti-pencil-alt" />
                        </Link>
                        <Link to="#be">
                          <i className="ti-check" />
                        </Link>
                        <Link to="#be">
                          <i className="ti-heart" />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-row comment-row active">
                  <div className="mr-2">
                    <span className="round">
                      <img
                        alt="user"
                        src="/assets/img/avtar-2.png"
                        width={50}
                      />
                    </span>
                  </div>
                  <div className="comment-text active w-100">
                    <h5>John Doe</h5>
                    <p className="m-b-5">
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry.
                    </p>
                    <div className="comment-footer">
                      <span className="text-muted pull-right">
                        April 7, 2018
                      </span>
                      <span className="label label-success">Approved</span>
                      <span className="action-icons">
                        <Link to="#be">
                          <i className="ti-pencil-alt" />
                        </Link>
                        <Link to="#be">
                          <i className="ti-check" />
                        </Link>
                        <Link to="#be">
                          <i className="ti-heart" />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
                {/* Comment Row */}
                <div className="d-flex flex-row comment-row">
                  <div className="mr-2">
                    <span className="round">
                      <img
                        alt="user"
                        src="/assets/img/avtar-3.png"
                        width={50}
                      />
                    </span>
                  </div>
                  <div className="comment-text w-100">
                    <h5>John Doe</h5>
                    <p className="m-b-5">
                      Lorem Ipsum has beenorem Ipsum is simply dummy text of the
                      printing and type setting industry.
                    </p>
                    <div className="comment-footer">
                      <span className="text-muted pull-right">
                        April 6, 2018
                      </span>{" "}
                      <span className="label label-danger">Rejected</span>{" "}
                      <span className="action-icons">
                        <Link to="#be">
                          <i className="ti-pencil-alt" />
                        </Link>{" "}
                        <Link to="#be">
                          <i className="ti-check" />
                        </Link>{" "}
                        <Link to="#be">
                          <i className="ti-heart" />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
                {/* Comment Row */}
                <div className="d-flex flex-row comment-row">
                  <div className="mr-2">
                    <span className="round">
                      <img
                        alt="user"
                        src="/assets/img/avtar-4.png"
                        width={50}
                      />
                    </span>
                  </div>
                  <div className="comment-text w-100">
                    <h5>John Doe</h5>
                    <p className="m-b-5">
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry.
                    </p>
                    <div className="comment-footer">
                      <span className="text-muted pull-right">
                        April 5, 2018
                      </span>{" "}
                      <span className="label label-info">Pending</span>{" "}
                      <span className="action-icons">
                        <Link to="#be">
                          <i className="ti-pencil-alt" />
                        </Link>{" "}
                        <Link to="#be">
                          <i className="ti-check" />
                        </Link>{" "}
                        <Link to="#be">
                          <i className="ti-heart" />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-row comment-row">
                  <div className="mr-2">
                    <span className="round">
                      <img
                        alt="user"
                        src="/assets/img/avtar-2.png"
                        width={50}
                      />
                    </span>
                  </div>
                  <div className="comment-text active w-100">
                    <h5>John Doe</h5>
                    <p className="m-b-5">
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry.
                    </p>
                    <div className="comment-footer">
                      <span className="text-muted pull-right">
                        April 7, 2018
                      </span>
                      <span className="label label-success">Approved</span>
                      <span className="action-icons">
                        <Link to="#be">
                          <i className="ti-pencil-alt" />
                        </Link>
                        <Link to="#be">
                          <i className="ti-check" />
                        </Link>
                        <Link to="#be">
                          <i className="ti-heart" />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <Card.Header>
                <Row>
                  <Col md="6">
                    Todo List
                    <p className="text-muted">Lorem ipsum dolor sit amet</p>
                  </Col>
                  <Col md="6">
                    <Link
                      to="#be"
                      className="btn btn-success btn-border box-shadow btn-circle pull-right"
                    >
                      <i className="fa fa-plus" />
                    </Link>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <div className="scrollDiv">
                  <ul className="todo-list">
                    <li>
                      <div className="checkbox checkbox-primary margin-r-5">
                        <input id="checkbox1" type="checkbox" />
                        <label htmlFor="checkbox1">
                          Lorem Ipsum is simply dummy text of the printing{" "}
                          <small className="label label-info">Today</small>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="checkbox checkbox-primary margin-r-5">
                        <input id="checkbox2" type="checkbox" />
                        <label htmlFor="checkbox2">
                          {" "}
                          Lorem Ipsum is simply dummy text of the printing dummy
                          text of the printing and typesetting industry.{" "}
                          <small className="label label-danger">
                            Yesterday
                          </small>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="checkbox checkbox-primary margin-r-5">
                        <input id="checkbox3" type="checkbox" />
                        <label htmlFor="checkbox3">
                          {" "}
                          Lorem Ipsum is simply dummy text of the printing dummy
                          text of the{" "}
                          <small className="label label-info">1 Week</small>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="checkbox checkbox-primary margin-r-5">
                        <input id="checkbox4" type="checkbox" />
                        <label htmlFor="checkbox4">
                          {" "}
                          Lorem Ipsum is simply dummy text of the{" "}
                          <small className="label label-primary">
                            <i className="fa fa-clock-o" /> 3 Mins
                          </small>
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </Card.Body>
              <Card.Footer>
                <InputGroup>
                  <Form.Control placeholder="Add Todo..." />
                  <span className="input-group-btn">
                    <Button variant="primary" type="button">
                      Add
                    </Button>
                  </span>
                </InputGroup>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Header>
                Chat
                <p className="text-muted">Lorem ipsum dolor sit amet</p>
              </Card.Header>
              <Card.Body>
                <div className="scrollDiv">
                  <ul
                    as="ul"
                    className="chat-list list-unstyled"
                    style={{
                      position: "relative",
                      height: "270px",
                      overflowY: "scroll",
                    }}
                  >
                    <li className="clearfix chat-element media">
                      <Link to="#be" className="float-left">
                        <img
                          src="/assets/img/avtar-2.png"
                          alt=""
                          className="rounded-circle"
                        />
                      </Link>
                      <div className="media-body ">
                        <div className="speech-box">
                          <small className="float-right text-primary">
                            1m ago
                          </small>
                          <strong>John Doe</strong>
                          <p className="margin-b-0">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been
                          </p>
                          <small className="text-info">
                            Today 12:31 pm - 10.08.2018
                          </small>
                        </div>
                      </div>
                    </li>
                    <li className="clearfix chat-element right media">
                      <div className="media-body text-right float-left">
                        <div className="speech-box">
                          <strong className="float-left">John Doe</strong>
                          <small className="text-right text-primary">
                            1m ago
                          </small>
                          <p className="margin-b-0 text-left">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been
                          </p>
                          <small className="text-info">
                            Today 12:31 pm - 10.08.2018
                          </small>
                        </div>
                      </div>
                      <Link to="#be" className="float-right">
                        <img
                          src="/assets/img/avtar-2.png"
                          alt=""
                          className="rounded-circle"
                        />
                      </Link>
                    </li>
                    <li className="clearfix chat-element media">
                      <Link to="#be" className="float-left">
                        <img
                          src="/assets/img/avtar-2.png"
                          alt=""
                          className="rounded-circle"
                        />
                      </Link>
                      <div className="media-body ">
                        <div className="speech-box">
                          <small className="float-right text-primary">
                            1m ago
                          </small>
                          <strong>John Doe</strong>
                          <p className="margin-b-0">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been
                          </p>
                          <small className="text-info">
                            Today 12:31 pm - 10.08.2018
                          </small>
                        </div>
                      </div>
                    </li>
                    <li className="clearfix chat-element media">
                      <Link to="#be" className="float-left">
                        <img
                          src="/assets/img/avtar-2.png"
                          alt=""
                          className="rounded-circle"
                        />
                      </Link>
                      <div className="media-body ">
                        <div className="speech-box">
                          <small className="float-right text-primary">
                            1m ago
                          </small>
                          <strong>John Doe</strong>
                          <p className="margin-b-0">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been
                          </p>
                          <small className="text-info">
                            Today 12:31 pm - 10.08.2018
                          </small>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Card.Body>
              <Card.Footer>
                <InputGroup>
                  <Form.Control placeholder="Type your message here..." />
                  <span className="input-group-btn">
                    <button className="btn btn-primary">
                      <i className="fa fa-send" />
                    </button>
                  </span>
                </InputGroup>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="8" xlg="9">
            <Card>
              <Card.Header>
                Activity Timeline
                <p className="text-muted">Lorem ipsum dolor sit amet</p>
              </Card.Header>
              <Card.Body>
                <div className="profiletimeline">
                  <div className="sl-item">
                    <div className="sl-left">
                      {" "}
                      <img
                        src="/assets/img/avtar-1.png"
                        alt="user"
                        className="rounded-circle"
                      />{" "}
                    </div>
                    <div className="sl-right">
                      <div>
                        <Link to="#be" className="link">
                          John Doe
                        </Link>{" "}
                        <span className="sl-date">12 minutes ago</span>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                        <Row>
                          <div className="col-lg-3 col-md-6 mb-2">
                            <img
                              src="/assets/img/gallery/1s.jpg"
                              alt="user"
                              className="img-fluid rounded"
                            />
                          </div>
                          <div className="col-lg-3 col-md-6 mb-2">
                            <img
                              src="/assets/img/gallery/2s.jpg"
                              alt="user"
                              className="img-fluid rounded"
                            />
                          </div>
                          <div className="col-lg-3 col-md-6 mb-2">
                            <img
                              src="/assets/img/gallery/3s.jpg"
                              alt="user"
                              className="img-fluid rounded"
                            />
                          </div>
                          <div className="col-lg-3 col-md-6 mb-2">
                            <img
                              src="/assets/img/gallery/4s.jpg"
                              alt="user"
                              className="img-fluid rounded"
                            />
                          </div>
                        </Row>
                        <div className="like-comm">
                          <Link to="#be" className="link mr-2">
                            385 comment
                          </Link>
                          <Link to="#be" className="link mr-2">
                            <i className="fa fa-heart text-danger" /> 174 Love
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="sl-item">
                    <div className="sl-left">
                      {" "}
                      <img
                        src="/assets/img/avtar-2.png"
                        alt="user"
                        className="rounded-circle"
                      />{" "}
                    </div>
                    <div className="sl-right">
                      <div>
                        {" "}
                        <Link to="#be" className="link">
                          John Doe
                        </Link>{" "}
                        <span className="sl-date">8 minutes ago</span>
                        <Row className="mt-2">
                          <Col md="3" xs="12">
                            <img
                              src="/assets/img/gallery/1s.jpg"
                              alt="user"
                              className="img-fluid rounded"
                            />
                          </Col>
                          <Col md="9" xs="12">
                            <p>
                              {" "}
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Integer nec odio. Praesent libero. Sed
                              cursus ante dapibus diam.{" "}
                            </p>
                          </Col>
                        </Row>
                        <div className="like-comm mt-2">
                          <Link to="#be" className="link mr-2">
                            248 comment
                          </Link>
                          <Link to="#be" className="link mr-2">
                            <i className="fa fa-heart text-danger" /> 84 Love
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="sl-item">
                    <div className="sl-left">
                      {" "}
                      <img src="/assets/img/avtar-3.png" alt="user" />{" "}
                    </div>
                    <div className="sl-right">
                      <div>
                        <Link to="#be" className="link">
                          John Doe
                        </Link>{" "}
                        <span className="sl-date">6 minutes ago</span>
                        <p className="mt-1">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer nec odio. Praesent libero. Sed cursus
                          ante dapibus diam. Sed nisi. Nulla quis sem at nibh
                          elementum imperdiet. Duis sagittis ipsum. Praesent
                          mauris. Fusce nec tellus sed augue semper{" "}
                        </p>
                      </div>
                      <div className="like-comm mt-2">
                        <Link to="#be" className="link mr-2">
                          68 comment
                        </Link>
                        <Link to="#be" className="link mr-2">
                          <i className="fa fa-heart text-danger" /> 36 Love
                        </Link>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="sl-item">
                    <div className="sl-left">
                      {" "}
                      <img
                        src="/assets/img/avtar-4.png"
                        alt="user"
                        className="rounded-circle"
                      />{" "}
                    </div>
                    <div className="sl-right">
                      <div>
                        <Link to="#be" className="link">
                          John Doe
                        </Link>
                        <span className="sl-date">4 minutes ago</span>
                        <blockquote className="mt-1">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="weather">
              <div className="city-selected">
                <div className="weather-box">
                  <div className="info">
                    <div className="city">Ankara</div>
                    <div className="night">Night - 22:07 PM</div>
                    <div className="temp text-primary">3°</div>
                    <div className="wind">
                      <i className="wi wi-windy" />
                      <span>25 km/h</span>
                    </div>
                  </div>
                  <div className="icon text-primary">
                    <i className="wi wi-night-alt-hail" />
                  </div>
                </div>
              </div>
              <div className="days">
                <div className="row row-no-gutter">
                  <Col md="4">
                    <div className="day">
                      <h1>Monday</h1>
                      <i className="wi wi-day-rain" />
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="day">
                      <h1>Tuesday</h1>
                      <i className="wi wi-day-storm-showers" />
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="day">
                      <h1>Wednesday</h1>
                      <i className="wi wi-solar-eclipse" />
                    </div>
                  </Col>
                </div>
              </div>
            </Card>
            <Card>
              <Card.Header>
                Browser Stats
                <p className="text-muted">Lorem ipsum dolor sit amet</p>
              </Card.Header>
              <Card.Body>
                <Table borderless className="browser">
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src="/assets/img/browser/chrome-logo.png"
                          alt="logo"
                        />
                      </td>
                      <td>Google Chrome</td>
                      <td className="text-right">
                        <span className="label label-primary">33%</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="/assets/img/browser/firefox-logo.png"
                          alt="logo"
                        />
                      </td>
                      <td>Mozila Firefox</td>
                      <td className="text-right">
                        <span className="label label-success">27%</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="/assets/img/browser/safari-logo.png"
                          alt="logo"
                        />
                      </td>
                      <td>Apple Safari</td>
                      <td className="text-right">
                        <span className="label label-info">17%</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="/assets/img/browser/internet-logo.png"
                          alt="logo"
                        />
                      </td>
                      <td>Internet Explorer</td>
                      <td className="text-right">
                        <span className="label label-warning">11%</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="/assets/img/browser/opera-logo.png"
                          alt="logo"
                        />
                      </td>
                      <td>Opera mini</td>
                      <td className="text-right">
                        <span className="label label-danger">8%</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="/assets/img/browser/internet-logo.png"
                          alt="logo"
                        />
                      </td>
                      <td>Microsoft edge</td>
                      <td className="text-right">
                        <span className="label label-indigo">4%</span>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Dashboard;
