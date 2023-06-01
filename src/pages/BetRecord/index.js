import React from "react";
import { Row, Col } from "react-bootstrap";
import * as R from "ramda";
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
import { NumericFormat } from "react-number-format";

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

    const tongCuoc = R.pathOr(0, ["duLieu", "other", "totalMoney"])(dsBet);
    const tongThangThua = R.pathOr(0, ["duLieu", "other", "rewardRebate"])(
      dsBet
    );

    return (
      <React.Fragment>
        <Row>
          <div className='d-flex'>
            <h3 className='ml-3'>Lịch sử cược</h3>
            <h3 className='ml-3 text-info'>
              Tổng cược:&nbsp;
              <NumericFormat
                value={tongCuoc}
                thousandSeparator=','
                displayType='text'
                renderText={(value) => <b>{value} vnđ</b>}
              />
            </h3>
            <h3 className='ml-3 text-primary'>
              Tổng Thắng thua:&nbsp;
              <NumericFormat
                value={tongThangThua}
                thousandSeparator=','
                displayType='text'
                renderText={(value) => <b>{value} vnđ</b>}
              />
            </h3>
          </div>

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
