import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Image } from "react-bootstrap";
import "./style.scss";

const TopbarUserProfile = (props) => {
  const { username, xuLyDangXuat } = props;

  return (
    <React.Fragment>
      <Dropdown as='li' className='avtar-dropdown'>
        <Dropdown.Toggle>
          <Image
            src='/assets/img/avtar-2.png'
            className='mr-1'
            roundedCircle
            width={30}
          />
          {username}
        </Dropdown.Toggle>
        <Dropdown.Menu as='ul' className={`top-dropdown`}>
          <Dropdown.Item as='li'>
            <Link to='#be'>
              <i className='icon-bell' />
              Activities
            </Link>
          </Dropdown.Item>
          <Dropdown.Item as='li'>
            <Link to='#be'>
              <i className='icon-user' />
              Profile
            </Link>
          </Dropdown.Item>
          <Dropdown.Item as='li'>
            <Link to='#be'>
              <i className='icon-settings' />
              Settings
            </Link>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item as='li'>
            <span href='#' onClick={() => xuLyDangXuat()}>
              <i className='icon-logout' />
              Logout
            </span>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </React.Fragment>
  );
};

export default TopbarUserProfile;
