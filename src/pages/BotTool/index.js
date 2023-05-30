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
  listDsBet,
  xoaBot,
  ngungBot,
} from "../../action";
import {
  xuLyTaoBot,
  xuLyStartBot,
  xuLyXoaBot,
  xuLyNgungBot,
} from "../../ultil/handler";
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
    const { listBot, listDsBet } = this.props;
    listBot();
    listDsBet();
  }

  componentWillUnmount() {}

  render() {
    // const { userDetail } = this.props;

    const propertiesCardBot = {
      xuLyTaoBot: xuLyTaoBot(this),
    };

    const { dsBot } = this.props;

    const propertiesListBot = {
      dsBot,
      xuLyStartBot: xuLyStartBot(this),
      xuLyXoaBot: xuLyXoaBot(this),
      xuLyNgungBot: xuLyNgungBot(this),
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

          <h3>Lịch sử cược</h3>
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
  listDsBet,
  xoaBot,
  ngungBot,
};

export default connect(mapStateToProps, mapDispatchToProps)(BotTool);
