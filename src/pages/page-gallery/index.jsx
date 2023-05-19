import React from 'react';
import "./index.scss";
import { Row, Col, Card } from 'react-bootstrap';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
//import { Link } from 'react-router-dom';

class PageGallery extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          photoSrc: "",
          isOpen: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (event) => {
        event.preventDefault();
        const imgSrc = event.target.parentNode.href?? '';
        this.setState({ photoSrc: imgSrc })
        this.setState({ isOpen: true })
      }


    render() {

        const { photoSrc, isOpen } = this.state;

        return (
            <React.Fragment>
                <Row>
                    <Col md="12">
                        <Card>
                            <Card.Header>
                            Lightbox2 Gallery
                            </Card.Header>
                            <Card.Body>
                                <div className="lightboxGallery" onClick={this.handleClick}>
                                <a onClick={(e) => this.handleClick(e)} href="/assets/img/gallery/1.jpg" title="Unsplash Images" data-lightbox="gallery"><img src="/assets/img/gallery/1s.jpg" alt="" /></a>
                                <a onClick={(e) => this.handleClick(e)} href="/assets/img/gallery/2.jpg" title="Unsplash Images" data-lightbox="gallery"><img src="/assets/img/gallery/2s.jpg" alt="" /></a>
                                <a onClick={(e) => this.handleClick(e)} href="/assets/img/gallery/3.jpg" title="Unsplash Images" data-lightbox="gallery"><img src="/assets/img/gallery/3s.jpg" alt="" /></a>
                                <a onClick={(e) => this.handleClick(e)} href="/assets/img/gallery/4.jpg" title="Unsplash Images" data-lightbox="gallery"><img src="/assets/img/gallery/4s.jpg" alt="" /></a>
                                <a onClick={(e) => this.handleClick(e)} href="/assets/img/gallery/2.jpg" title="Unsplash Images" data-lightbox="gallery"><img src="/assets/img/gallery/2s.jpg" alt="" /></a>
                                <a onClick={(e) => this.handleClick(e)} href="/assets/img/gallery/3.jpg" title="Unsplash Images" data-lightbox="gallery"><img src="/assets/img/gallery/3s.jpg" alt="" /></a>
                                <a onClick={(e) => this.handleClick(e)} href="/assets/img/gallery/4.jpg" title="Unsplash Images" data-lightbox="gallery"><img src="/assets/img/gallery/4s.jpg" alt="" /></a>
                                <a onClick={(e) => this.handleClick(e)} href="/assets/img/gallery/2.jpg" title="Unsplash Images" data-lightbox="gallery"><img src="/assets/img/gallery/2s.jpg" alt="" /></a>
                                <a onClick={(e) => this.handleClick(e)} href="/assets/img/gallery/4.jpg" title="Unsplash Images" data-lightbox="gallery"><img src="/assets/img/gallery/4s.jpg" alt="" /></a>
                                <a onClick={(e) => this.handleClick(e)} href="/assets/img/gallery/2.jpg" title="Unsplash Images" data-lightbox="gallery"><img src="/assets/img/gallery/2s.jpg" alt="" /></a>
                                <a onClick={(e) => this.handleClick(e)} href="/assets/img/gallery/3.jpg" title="Unsplash Images" data-lightbox="gallery"><img src="/assets/img/gallery/3s.jpg" alt="" /></a>
                                <a onClick={(e) => this.handleClick(e)} href="/assets/img/gallery/1.jpg" title="Unsplash Images" data-lightbox="gallery"><img src="/assets/img/gallery/1s.jpg" alt="" /></a>
                            </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    {isOpen && (
                        <Lightbox
                            mainSrc={photoSrc}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                        />
                    )}
                </Row>           
            </React.Fragment>
        );
    }
}

export default PageGallery;
