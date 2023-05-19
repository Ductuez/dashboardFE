import React,{Fragment} from 'react';
import Chart from 'react-apexcharts'
import { 
    areaSpaline,
    apexAreaChart,
    apexColumnChartsone,
    apexPieChart,
    apex3DbubbleCharts,
    apexRadialBarChart,
    apexCandleStickCharts,
    apexRadarPolygonfillCharts,
    apexSteplineChart,
    apexLineWithAnnotationCharts,
    apexDonutCharts,
    apexMixedCharts,
    apexBarChart } from "./ApexData";
import {Row,Col,Card} from 'react-bootstrap'

const Apexcharts = (props)  => {
    return (
        <Fragment>
        <Row>
          <Col sm="12" xl="8">
            <Card>
              <Card.Header>
                <h5>Area Spaline Chart </h5>
              </Card.Header>
              <Card.Body>
                <Chart options={areaSpaline.options} series={areaSpaline.series} height="350" type="area" /> 
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" xl="4">
            <Card>
              <Card.Header>
                <h5>Basic Area Chart </h5>
              </Card.Header>
              <Card.Body>
                <div id="basic-apex">
                <Chart options={apexAreaChart.options} series={apexAreaChart.series} type="area" height={350} />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" xl="8">
            <Card>
              <Card.Header>
                <h5>Column Chart </h5>
              </Card.Header>
              <Card.Body>
                <div id="column-chart">
                <Chart options={apexColumnChartsone.options} series={apexColumnChartsone.series} type="bar" height={350} />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" xl="4">
            <Card>
              <Card.Header>
                <h5>Pie Chart </h5>
              </Card.Header>
              <Card.Body className="apex-chart">
                <div id="piechart">
                <Chart options={apexPieChart.options} series={apexPieChart.series} type="pie" width={380} />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" xl="8">
            <Card>
              <Card.Header>
                <h5>
                   3d Bubble Chart </h5>
              </Card.Header>
              <Card.Body>
                <div id="chart-bubble">
                <Chart options={apex3DbubbleCharts.options} series={apex3DbubbleCharts.series} type="bubble" height={350} />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" xl="4">
            <Card>
              <Card.Header>
                <h5>Radial Bar Chart</h5>
              </Card.Header>
              <Card.Body>
                <div id="circlechart">
                <Chart options={apexRadialBarChart.options} series={apexRadialBarChart.series} type="radialBar" height={350} />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" xl="8">
            <Card>
              <Card.Header>
                <h5>Candlestick Chart </h5>
              </Card.Header>
              <Card.Body>
                <div id="candlestick">
                <Chart options={apexCandleStickCharts.options} series={apexCandleStickCharts.series} type="candlestick" height={350} />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" xl="4">
            <Card>
              <Card.Header>
                <h5>Radar Chart </h5>
              </Card.Header>
              <Card.Body>
                <div id="radarchart">
                <Chart options={apexRadarPolygonfillCharts.options} series={apexRadarPolygonfillCharts.series} type="radar" height={350} />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" xl="8">
            <Card>
              <Card.Header>
                <h5>Stepline Chart </h5>
              </Card.Header>
              <Card.Body>
                <div id="stepline">
                <Chart options={apexSteplineChart.options} series={apexSteplineChart.series} type="line" height={350} />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" xl="4">
            <Card>
              <Card.Header>
                <h5>Bar chart</h5>
              </Card.Header>
              <Card.Body>
                <div id="basic-bar">
                <Chart options={apexBarChart.options} series={apexBarChart.series} type="bar" height={350} />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <Card.Header>
                <h5>Column Chart</h5>
              </Card.Header>
              <Card.Body>
                <div id="annotationchart">
                <Chart options={apexLineWithAnnotationCharts.options} series={apexLineWithAnnotationCharts.series} type="line" height={350} />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" xl="4">
            <Card>
              <Card.Header>
                <h5>Donut Chart</h5>
              </Card.Header>
              <Card.Body className="apex-chart">
                <div id="donutchart">
                <Chart options={apexDonutCharts.options} series={apexDonutCharts.series} type="donut" />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xl="8" sm="12">
            <Card>
              <Card.Header>
                <h5>Mixed Chart</h5>
              </Card.Header>
              <Card.Body>
                <div id="mixedchart">
                <Chart options={apexMixedCharts.options} series={apexMixedCharts.series} type="line" height={350} />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
}

export default Apexcharts;