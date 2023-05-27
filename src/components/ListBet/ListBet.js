import React, { useEffect } from "react";
import * as R from "ramda";
import * as moment from "moment";
import { NumericFormat } from "react-number-format";

const ListBet = (props) => {
  const { dsBet, listDsBet } = props;

  const duLieuDsBet = R.pathOr([], ["duLieu"])(dsBet);
  const duLieuRow = R.pathOr([], ["rows"])(duLieuDsBet);

  useEffect(() => {
    const intervalId = setInterval(() => {
      listDsBet();
    }, 30000);

    return () => clearInterval(intervalId);
  }, [listDsBet]);

  return (
    <table
      id='datatable'
      className='table table-striped nowrap dataTable no-footer dtr-inline'
      width='100%'
    >
      <thead>
        <tr>
          <th>
            <strong>Loại Xổ số</strong>
          </th>
          <th>
            <strong>Lượt xổ</strong>
          </th>
          <th>
            <strong>Thời gian cược</strong>
          </th>
          <th>
            <strong>Thông tin đặt cược</strong>
          </th>
          <th>
            <strong>Tổng số tiền</strong>
          </th>
          <th>
            <strong>Trạng thái</strong>
          </th>
        </tr>
      </thead>
      <tbody>
        {duLieuRow.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item?.gameName}</td>
              <td>{item?.turnNum}</td>
              <td>{moment(item?.turnDate).format("DD-MM-YYYY ")}</td>
              <td>{item?.playName}</td>
              <td>
                <NumericFormat
                  value={item?.totalMoney}
                  thousandSeparator=','
                  displayType='text'
                  renderText={(value) => <b>{value} vnđ</b>}
                />
              </td>
              <td>
                {item?.winMoney === 0
                  ? "Thua"
                  : item?.winnable
                  ? "Đang chờ"
                  : "Thắng"}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ListBet;
