import React from 'react';
import "./index.scss";
import { Row, Col, Card } from 'react-bootstrap';
import Slider from 'react-rangeslider';
// To include the default styles
import 'react-rangeslider/lib/index.css';

class UiRangeSlider extends React.Component {

    constructor (props, context) {
        super(props, context)
        this.state = {
            value1: 10,
            value2: -10,
            value3: 12.5,
            value4: 25,
            value5: 10,
            value6: 10,
            value7: 10,
            value8: 10,
            horizontal: 10,
            vertical: 50
        }
      }

    handleChange1 = value => {
        this.setState({
            value1: value
        })
    };

    handleChange2 = value => {
        this.setState({
            value2: value
        })
    };
    
    handleChange3 = value => {
        this.setState({
            value3: value
        })
    };
    handleChange4 = value => {
        this.setState({
            value4: value
        })
    };
    

    handleChangeHorizontal = value => {
        this.setState({
          horizontal: value
        })
      };
    
      handleChangeVertical = value => {
        this.setState({
          vertical: value
        })
      };
    
    render() {

        const { horizontal, vertical } = this.state
        const horizontalLabels = {
          0: 'Low',
          50: 'Medium',
          100: 'High'
        }
    
        const verticalLabels = {
          10: 'Getting started',
          50: 'Half way',
          90: 'Almost done',
          100: 'Complete!'
        }
    
        const formatkg = value => value + ' kg'
        const formatPc = p => p + '%'

        return (
            <React.Fragment>
                <Row>             
                    <Col md="12">
                    <Card>
                        <Card.Header>
                        Sliders
                        </Card.Header>
                        <Card.Body>

                        <Row>
                            <Col>
                                <h5><small>Basic Slider</small></h5>

                                <div className='slider'>
                                    <Slider
                                        min={0}
                                        max={100}
                                        value={this.state.value1}
                                        onChange={this.handleChange1 }
                                    />
                                    <div className='value'>{this.state.value1}</div>
                                </div>
                            </Col>
                            </Row>
                        <Row>
                            <Col>
                                <h5><small>Negative Values (No Tooltip)</small></h5>
                                <div className='slider'>
                                    <Slider
                                        min={-20}
                                        max={0}
                                        tooltip={false}
                                        value={this.state.value2}
                                        onChange={this.handleChange2 }
                                    />
                                    <div className='value'>{this.state.value2}</div>
                                </div>
                                
                            </Col>
                        </Row>
                        <div className="row mt-5">
                            <Col>
                            <h5><small>Prefix</small></h5>
                            
                            <div className='slider'>
                                <Slider
                                    min={10}
                                    max={20}
                                    step={0.5}
                                    value={this.state.value3}
                                    onChange={this.handleChange3 }
                                />
                                <div className='value'>{this.state.value3}</div>
                            </div>
                            
                            </Col>
                            </div>
                        <Row>
                            <Col>
                            <h5><small>Custom Labels & Formatting</small></h5>
                            
                            
                            <div className='slider custom-labels'>
                                <Slider
                                    min={0}
                                    max={100}
                                    value={horizontal}
                                    labels={horizontalLabels}
                                    format={formatkg}
                                    handleLabel={horizontal}
                                    onChange={this.handleChangeHorizontal}
                                />
                                <div className='value'>{formatkg(horizontal)}</div>

                                </div>
                            </Col>
                        </Row>
                        <div className="row  mt-5">
                            <Col>
                            <h5><small>Custom Labels & Formatting</small></h5>
                            <div className='slider custom-labels'>
      
       
                            <Slider
                                value={vertical}
                                orientation='vertical'
                                labels={verticalLabels}
                                handleLabel={vertical}
                                format={formatPc}

                                onChange={this.handleChangeVertical}
                            />
                                <div className='value'>{formatPc(vertical)}</div>
                            </div>
                            </Col>	
                            </div>
                        <Row>
                            <Col>
                            <h5><small>Custom Values</small></h5>
                            <div className='slider-vertical'>
                                <Slider
                                    min={0}
                                    max={100}
                                    value={this.state.value4}
                                    orientation='vertical'
                                    onChange={this.handleChange4}
                                />
                                <div className='value'>{this.state.value4}</div>
                                </div>
                            </Col>
                        </Row>
                        
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default UiRangeSlider;
