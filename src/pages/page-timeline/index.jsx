import React from 'react';
import "./index.scss";
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class PageTimeline extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                        <Col md="12">
                        <Card>
                            <Card.Body>
                            <section id="cd-timeline" className="cd-container">
                                <div className="cd-timeline-block">
                                <div className="cd-timeline-img cd-picture">
                                    <img src="/assets/img/timeline/cd-icon-picture.svg" alt="avatar" />
                                </div> 
                                <div className="cd-timeline-content">
                                    <h2>John Doe</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
                                    <Link to="#0" className="btn btn-primary btn-rounded">Read more</Link>
                                    <span className="cd-date">08 September 18</span>
                                </div> 
                                </div> 
                                <div className="cd-timeline-block">
                                <div className="cd-timeline-img cd-movie">
                                    <img src="/assets/img/timeline/cd-icon-movie.svg" alt="Movie" />
                                </div> 
                                <div className="cd-timeline-content">
                                    <h2>John Doe</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?</p>
                                    <Link to="#0" className="btn btn-primary btn-rounded">Read more</Link>
                                    <span className="cd-date">08 September 18</span>
                                </div> 
                                </div> 
                                <div className="cd-timeline-block">
                                <div className="cd-timeline-img cd-picture">
                                    <img src="/assets/img/timeline/cd-icon-picture.svg" alt="avatar" />
                                </div> 
                                <div className="cd-timeline-content">
                                    <h2>John Doe</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias eaque asperiores voluptatibus cupiditate error assumenda delectus odit similique earum voluptatem doloremque dolorem ipsam quae rerum quis. Odit, itaque, deserunt corporis vero ipsum nisi eius odio natus ullam provident pariatur temporibus quia eos repellat consequuntur perferendis enim amet quae quasi repudiandae sed quod veniam dolore possimus rem voluptatum eveniet eligendi quis fugiat aliquam sunt similique aut adipisci.</p>
                                    <Link to="#0" className="btn btn-primary btn-rounded">Read more</Link>
                                    <span className="cd-date">08 September 18</span>
                                </div> 
                                </div> 
                                <div className="cd-timeline-block">
                                <div className="cd-timeline-img cd-location">
                                    <img src="/assets/img/timeline/cd-icon-location.svg" alt="Location" />
                                </div> 
                                <div className="cd-timeline-content">
                                    <h2>John Doe</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
                                    <Link to="#0" className="btn btn-primary btn-rounded">Read more</Link>
                                    <span className="cd-date">08 September 18</span>
                                </div> 
                                </div> 
                                <div className="cd-timeline-block">
                                <div className="cd-timeline-img cd-location">
                                    <img src="/assets/img/timeline/cd-icon-location.svg" alt="Location" />
                                </div> 
                                <div className="cd-timeline-content">
                                    <h2>John Doe</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.</p>
                                    <Link to="#0" className="btn btn-primary btn-rounded">Read more</Link>
                                    <span className="cd-date">08 September 18</span>
                                </div> 
                                </div> 
                                <div className="cd-timeline-block">
                                <div className="cd-timeline-img cd-movie">
                                    <img src="/assets/img/timeline/cd-icon-movie.svg" alt="Movie" />
                                </div> 
                                <div className="cd-timeline-content">
                                    <h2>John Doe</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.</p>
                                    <span className="cd-date">08 September 18</span>
                                </div> 
                                </div> 
                            </section>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>          
            </React.Fragment>
        );
    }
}

export default PageTimeline;
