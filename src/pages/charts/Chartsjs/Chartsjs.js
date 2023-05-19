import React,{Fragment} from 'react';
import { Radar, Line, Bar, Doughnut, Polar } from 'react-chartjs-2';
import { doughnutData, doughnutOption,barChartData, barChartOptions ,lineChartData,lineChartOptions,polarOption,polarData, lineChart2Data,lineChart2option ,data} from './ChartsData';
import {Row,Col,Card} from "react-bootstrap";

const Charts = (props) => {
    const datasetKeyProvider = () =>{
      return Math.random();
    }
    return (
        <Fragment>

        <Row>
          <Col xl="6" md="12">
            <Card>
              <Card.Header>
                <h5>Bar Chart</h5>
              </Card.Header>
              <Card.Body className="chart-block">
                  <Bar data={barChartData} options={barChartOptions} width={778} height={400} />
              </Card.Body>
            </Card>
          </Col>
          <Col xl="6" md="12">
            <Card>
              <Card.Header>
                <h5>Line Chart</h5>
              </Card.Header>
              <Card.Body className="chart-block">
                 <Line data={lineChartData} options={lineChartOptions}  datasetKeyProvider={datasetKeyProvider} width={778} height={400} />
              </Card.Body>
            </Card>
          </Col>
          <Col xl="6" md="12">
            <Card>
              <Card.Header>
                <h5>Line Chart-2 Chart</h5>
              </Card.Header>
              <Card.Body className="chart-block">
                  <Line data={lineChart2Data} options={lineChart2option}  datasetKeyProvider={datasetKeyProvider} width={778} height={400} />
              </Card.Body>
            </Card>
          </Col>
          <Col xl="6" md="12">
            <Card>
              <Card.Header>
                <h5>Doughnut Chart</h5>
              </Card.Header>
              <Card.Body className="chart-block">
                 <Doughnut data={doughnutData} options={doughnutOption} width={778} height={400} />
              </Card.Body>
            </Card>
          </Col>
          <Col xl="6" md="12">
            <Card>
              <Card.Header>
                <h5>Radar Chart</h5>
              </Card.Header>
              <Card.Body className="chart-block chart-vertical-center">
                  <Radar data={data}  width={778} height={400} />
              </Card.Body>
            </Card>
          </Col>
          <Col xl="6" md="12">
            <Card>
              <Card.Header>
                <h5>Polar Chart</h5>
              </Card.Header>
              <Card.Body className="chart-block chart-vertical-center">
                 <Polar data={polarData} options={polarOption} width={778} height={400} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
}

export default Charts;