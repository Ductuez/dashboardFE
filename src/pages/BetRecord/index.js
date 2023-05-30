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
} from "../../action";
// import {} from "../../ultil/handler";
import ListBet from "../../components/ListBet/ListBet";

class BetRecord extends React.Component {
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

    const { dsBet, listDsBet } = this.props;

    const propertiesListBet = {
      dsBet,
      listDsBet,
    };

    return (
      <React.Fragment>
        <Row>
          <h3>Lịch sử cược</h3>

          <Col md='12'>
            <ListBet {...propertiesListBet} />
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
  listDsBet,
  xoaBot,
};

export default connect(mapStateToProps, mapDispatchToProps)(BetRecord);
