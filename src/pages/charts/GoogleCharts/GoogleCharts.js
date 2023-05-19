import React,{Fragment} from 'react';
import {Col,Row,Card} from "react-bootstrap";
import {GooglePieChart1,
        GooglePieChart2,
        GoogleDonutChart,
        GoogleRotatingPieChart1,
        GoogleRotatingPieChart2,
        GoogleSliceCharts,
        GoogleAreaChart,
        GoogleStackingChart,
        GoogleGhantChart,
        GoogleBasicbarChart,
        GoogleMaterialDesignChart,
        GoogleLineChart,
        GoogleComboChart,
        GoogleBarChart2,
        GoogleTreeChart} from "./GooglechartData";
const GoogleCharts = (props) => {
    return (
        <Fragment>

            <Row>
              <Col sm="12" xl="6">
                <Card>
                  <Card.Header>
                    <h5>Pie Chart <span className="digits">1</span></h5>
                  </Card.Header>
                  <Card.Body className="chart-block">
                    <div className="chart-overflow" id="pie-chart1">
                        <GooglePieChart1/>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="12" xl="6">
                <Card>
                  <Card.Header>
                    <h5>Pie Chart <span className="digits">2</span></h5>
                  </Card.Header>
                  <Card.Body className="chart-block">
                        <GooglePieChart2/>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="12" xl="6">
                <Card>
                  <Card.Header>
                    <h5>Donut Chart</h5>
                  </Card.Header>
                  <Card.Body className="chart-block">
                    <GoogleDonutChart/>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="12" xl="6">
                <Card>
                  <Card.Header>
                    <h5>Rotating A Pie Chart <span className="digits">1</span></h5>
                  </Card.Header>
                  <Card.Body className="chart-block">
                    <GoogleRotatingPieChart1/>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="12" xl="6">
                <Card>
                  <Card.Header>
                    <h5>Rotating A Pie Chart <span className="digits">2</span></h5>
                  </Card.Header>
                  <Card.Body className="chart-block">
                    <GoogleRotatingPieChart2/>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="12" xl="6">
                <Card>
                  <Card.Header>
                    <h5>Slice Visibility Threshold</h5>
                  </Card.Header>
                  <Card.Body className="chart-block">
                    <GoogleSliceCharts/>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="12" xl="6">
                <Card>
                  <Card.Header>
                    <h5>Area Chart</h5>
                  </Card.Header>
                  <Card.Body className="chart-block">
                    <GoogleAreaChart/>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="12" xl="6">
                <Card>
                  <Card.Header>
                    <h5>Stacking Area Chart</h5>
                  </Card.Header>
                  <Card.Body className="chart-block">
                    <GoogleStackingChart/>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="12" xl="6">
                <Card>
                  <Card.Header>
                    <h5>Basic bar Chart</h5>
                  </Card.Header>
                  <Card.Body className="chart-block">
                    <GoogleBasicbarChart/>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="12" xl="6">
                <Card>
                  <Card.Header>
                    <h5>Material Design</h5>
                  </Card.Header>
                  <Card.Body className="chart-block">
                    <GoogleMaterialDesignChart/>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="12">
                <Card>
                  <Card.Header>
                    <h5>Gantt Chart</h5>
                  </Card.Header>
                  <Card.Body className="chart-block">
                    <GoogleGhantChart/>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="12">
                <Card>
                  <Card.Header>
                    <h5>Line Chart</h5>
                  </Card.Header>
                  <Card.Body className="chart-block">
                    <GoogleLineChart/>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="12">
                <Card>
                  <Card.Header>
                    <h5>Combo Chart</h5>
                  </Card.Header>
                  <Card.Body className="chart-block">
                    <GoogleComboChart/>
                  </Card.Body>
                </Card>
              </Col>  

              <Col sm="12" xl="6 box-col-12 xl-100">
                <Card>
                  <Card.Header>
                    <h5>bar-chart2</h5>
                  </Card.Header>
                  <Card.Body className="chart-block">
                  <GoogleBarChart2/>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="12" xl="6 box-col-12 xl-100">
                <Card>
                  <Card.Header>
                    <h5>Word tree</h5>
                  </Card.Header>
                  <Card.Body className="chart-block">
                    <GoogleTreeChart/>
                  </Card.Body>
                </Card>
              </Col>
              
            </Row>

          </Fragment>
        );
}

export default GoogleCharts;