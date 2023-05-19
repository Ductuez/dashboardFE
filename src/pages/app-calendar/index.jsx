import React from 'react';
import "./index.scss";
import { Row, Col, Card } from 'react-bootstrap';
//fullcalendar
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
//react-infinite-calendar
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

class AppCalendar extends React.Component {
  
    render() {
      let today = new Date();
      let lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);  
        return (
            <React.Fragment>    
              <Row>
                <Col md="12">
                  <Card>
                    <Card.Header>
                      Calendar [fullcalendar]
                    </Card.Header>
                    <Card.Body>
                      <Row>
                        <Col>
                        <FullCalendar 
                          defaultView="dayGridMonth" 
                          plugins={[ dayGridPlugin,interactionPlugin ]} 
                          weekends={false}
                          events={[
                            { title: 'event 1', date: '2019-04-01' },
                            { title: 'event 2', date: '2019-04-02' }
                          ]}
                        />
                        </Col>
                      
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            
              <Row>
                <Col md="12">
                  <Card>
                    <Card.Header>
                      Calendar 2
                    </Card.Header>
                    <Card.Body>
                      <Row>
                        <Col sm="12">
                          <InfiniteCalendar
                            selected={today}
                            minDate={lastWeek} 
                            className="calendar-content"
                            style={{ with: '100%'}}
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

export default AppCalendar;
