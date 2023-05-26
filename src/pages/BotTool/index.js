import React from "react";
import { Row, Col } from "react-bootstrap";
// import * as R from "ramda";
import { Events, animateScroll as scroll, scroller } from "react-scroll";
import { connect } from "react-redux";

import {
  truyCapValidCode,
  userProfile,
  truyCapLogintk88,
  taoBot,
  listBot,
  startBot,
} from "../../action";
import { xuLyTaoBot, xuLyStartBot, xuLyStopBot } from "../../ultil/handler";
import CardBot from "../../components/CardBot/CardBot";
import ListBot from "../../components/ListBot/ListBot";

class BotTool extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.state = {
      form: {
        game: {},
      },
    };
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
  componentDidMount() {
    const { listBot } = this.props;
    listBot();
  }

  render() {
    // const { userDetail } = this.props;

    const propertiesCardBot = {
      xuLyTaoBot: xuLyTaoBot(this),
    };

    const { dsBot } = this.props;

    console.log(this.props);

    const propertiesListBot = {
      dsBot,
      xuLyStartBot: xuLyStartBot(this),
      xuLyStopBot: xuLyStopBot(this),
    };

    return (
      <React.Fragment>
        <Row>
          <Col md='12'>
            <CardBot {...propertiesCardBot} />
          </Col>
          <Col md='12'>
            <ListBot {...propertiesListBot} />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (common) => {
  return common;
};

const mapDispatchToProps = {
  truyCapValidCode,
  userProfile,
  truyCapLogintk88,
  taoBot,
  listBot,
  startBot,
};

export default connect(mapStateToProps, mapDispatchToProps)(BotTool);
