import React,{useEffect,Fragment} from 'react';
import {Row,Col,Card} from "react-bootstrap";
import Knob from "knob";
import './style.scss';

const primary = '#158df7';
//const secondary = '#fb2e63';

const KnobChart = (props) => {

    useEffect(() => {
        var profit = Knob({
            value: 35,
            left: 1,
            angleOffset: 90,
            className: "review",
            thickness: 0.1,
            fgColor: primary,
            readOnly: true,
            dynamicDraw: true,
            tickColorizeValues: true,
            bgColor: '#f6f7fb',
            lineCap: 'round',
            displayPrevious:false,
        })
        document.getElementById('profit').appendChild(profit);

        var cursormode = Knob({
            value: 29,
            angleOffset: 90,
            className: "review",
            thickness: 0.1,
            width: 200,
            cursor:true,
            fgColor: primary,
            readOnly: true,
            bgColor: '#f6f7fb',
            lineCap: 'round',
            displayPrevious:false
        })
        document.getElementById('cursormode').appendChild(cursormode);

        var offsetArc = Knob({
            value: 35,
            angleOffset: -125,
            className: "review",
            angleArc:250,
            thickness: 0.1,
            cursor:false,
            fgColor: primary,
            readOnly: true,
            bgColor: '#f6f7fb',
            lineCap: 'round',
            displayPrevious:false
        })
        document.getElementById('offsetArc').appendChild(offsetArc);

        var displayInputDisable = Knob({
            className: "review",
            thickness: 0.1,
            fgColor: primary,
            bgColor: '#f6f7fb',
            lineCap: 'round',
            displayPrevious:false,
            value:null
        })
        document.getElementById('displayInputDisable').appendChild(displayInputDisable);

        var displayPrevious = Knob({
            value: 44,
            min:-100,
            className: "review",
            thickness: 0.1,
            fgColor: primary,
            bgColor: '#f6f7fb',
            lineCap: 'round',
            displayPrevious:true
        })
        document.getElementById('displayPrevious').appendChild(displayPrevious);

        var digitstep = Knob({
            value:0,
            className: "review",
            thickness: 0.1,
            step:0.1,
            max:10000,
            min:-10000,
            fgColor: primary,
            bgColor: '#f6f7fb',
            lineCap: 'round',
            displayPrevious:false,
        })
        document.getElementById('digitstep').appendChild(digitstep);

    }, []);
    
    return (
        <Fragment>
            <Row>
              <Col xl="4 xl-50" md="6">
                <Card>
                  <Card.Header>
                    <h5>Angle Offset</h5>
                  </Card.Header>
                  <Card.Body>
                    <div className="text-center">
                        <div className="knob" id="profit">
                        </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="4 xl-50" md="6">
                <Card>
                  <Card.Header>
                    <h5>Disable Display Input</h5>
                  </Card.Header>
                  <Card.Body>
                    <div className="text-center">
                      <div className="knob" id="displayInputDisable" style={{position:"relative"}}></div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="4 xl-50" md="6">
                <Card>
                  <Card.Header>
                    <h5>Cursor Mode</h5>
                  </Card.Header>
                  <Card.Body>
                    <div className="text-center">
                      <div className="knob" id="cursormode"></div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="4 xl-50" md="6">
                <Card>
                  <Card.Header>
                    <h5>Display Previous Value</h5>
                  </Card.Header>
                  <Card.Body>
                    <div className="text-center">
                      <div className="knob" id="displayPrevious"></div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="4 xl-50" md="6">
                <Card>
                  <Card.Header>
                    <h5>Angle Offset & Arc</h5>
                  </Card.Header>
                  <Card.Body>
                    <div className="text-center">
                      <div className="knob" id="offsetArc"></div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="4 xl-50" md="6">
                <Card>
                  <Card.Header>
                    <h5>4-digit, step 0.1</h5>
                  </Card.Header>
                  <Card.Body>
                    <div className="text-center">
                      <div className="knob" id="digitstep"></div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Fragment>
    );
}

export default KnobChart;