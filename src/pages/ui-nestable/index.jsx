import React from 'react';
import "./index.scss";
import { Row, Col, Card } from 'react-bootstrap';
import Nestable from 'react-nestable';
import 'react-nestable/dist/Nestable/Nestable.css';


const styles = {
    position: "relative",
    padding: "10px 15px",
    fontSize: "20px",
    border: "1px solid #f9fafa",
    background: "#f9fafa",
    cursor: "pointer"
  };
  const handlerStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "10px",
    height: "100%",
    background: "steelblue",
    cursor: "pointer"
  };

class UiNestable extends React.Component {

    
    render() {
        const items = [
            { id: 0, text: 'Andy' },
            {
              id: 1, text: 'Harry',
              children: [
                { id: 2, text: 'David' }
              ]
            },
            { id: 3, text: 'Lisa' }
          ];
          
          const renderItem = ({ item }) => item.text;
          
          const Example = () => (
            <Nestable styles={styles}
              items={items}
              renderItem={renderItem}
            />
          )
        return (
            <React.Fragment>
                <Row>
                    <Col md="12">
                    <Card>
                        <Card.Header>
                        Nestable
                        </Card.Header>
                        <Card.Body>
                        <Row>
                            <Col md="6">
                            
                            <Example />
                           
                            </Col>
                            <Col md="6">
                            <Nestable
                            items={items}
                            renderItem={renderItem}
                            handler={<span style={handlerStyles}/>}
                            />
                            
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

export default UiNestable;
