import React from "react";
import * as R from "ramda";
import { Button } from "react-bootstrap";
import * as moment from "moment";

const ListBot = (props) => {
  const { dsBot, xuLyStartBot, xuLyXoaBot } = props;

  const duLieuDsBot = R.pathOr([], ["duLieu"])(dsBot);

  console.log(duLieuDsBot);
  return (
    <table
      id='datatable'
      className='table table-striped nowrap dataTable no-footer dtr-inline'
      width='100%'
    >
      <thead>
        <tr>
          <th>
            <strong>Name</strong>
          </th>
          <th>
            <strong>Status</strong>
          </th>
          <th>
            <strong>Date</strong>
          </th>
          <th>
            <strong>Date</strong>
          </th>
          <th>
            <strong>Action</strong>
          </th>
        </tr>
      </thead>
      <tbody>
        {duLieuDsBot.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.name}</td>

              <td>
                {item.status ? (
                  <span className='label label-warning'>New</span>
                ) : (
                  <span className='label label-warning'>New</span>
                )}
              </td>
              <td className='text-center'>
                <span className='label label-warning'>New</span>
              </td>
              <td>{moment(item.updatedAt).format("DD-MM-YYYY")}</td>
              <td className='text-center'>
                <Button
                  variant='success'
                  size='sm'
                  onClick={() => xuLyStartBot(item)}
                  className='mr-2'
                >
                  <i className=' icon-control-play' />
                </Button>
                <Button
                  variant='danger'
                  size='sm'
                  onClick={() => xuLyXoaBot(item)}
                >
                  <i className='fa fa-trash' />
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ListBot;
