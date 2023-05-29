import React from "react";
import { Container, Row, Col, Form, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  truyCapLogintk88,
  truyCapValidCode,
  dangNhap,
  userProfile,
} from "../../../action";
import { xuLyLogin } from "../../../ultil/handler";
import { useForm } from "react-hook-form";

const Login = (props) => {
  const { register, handleSubmit } = useForm();

  return (
    <React.Fragment>
      <div className='misc-wrapper'>
        <div className='misc-content'>
          <Container>
            <Row className='justify-content-center'>
              <Col sm='12' md='5' lg='4' className='col-4'>
                <div to='#javascript' className='misc-header text-center'>
                  <Link to='/'>
                    <Image
                      alt=''
                      src='/assets/img/icon.png'
                      className='logo-icon margin-r-10'
                    />
                    <Image
                      alt=''
                      src='/assets/img/logo-dark.png'
                      className='toggle-none hidden-xs'
                    />
                  </Link>
                </div>
                <div className='misc-box'>
                  <form onSubmit={handleSubmit(xuLyLogin(props))}>
                    <Form.Group>
                      <label htmlFor='exampleuser1'>Username</label>
                      <div className='group-icon'>
                        <input
                          id='exampleuser1'
                          type='text'
                          placeholder='Username'
                          className='form-control'
                          name='email'
                          {...register("email")}
                        />
                        <span className='icon-user text-muted icon-input' />
                      </div>
                    </Form.Group>
                    <Form.Group>
                      <label htmlFor='exampleInputPassword1'>Password</label>
                      <div className='group-icon'>
                        <input
                          id='exampleInputPassword1'
                          type='password'
                          placeholder='Password'
                          className='form-control'
                          name='password'
                          {...register("password")}
                        />
                        <span className='icon-lock text-muted icon-input' />
                      </div>
                    </Form.Group>
                    <div className='clearfix'>
                      <div className='float-right'>
                        <input
                          onClick={handleSubmit(xuLyLogin(props))}
                          className='btn btn-block btn-primary btn-rounded box-shadow'
                          value='Login'
                        />
                      </div>
                    </div>
                    <hr />
                    <p className='text-center'>Need to Signup?</p>
                    <Link
                      to={`/auth/register`}
                      className='btn btn-block btn-success btn-rounded box-shadow'
                    >
                      Register Now
                    </Link>
                  </form>
                </div>
                <div className='text-center misc-footer'>
                  <p>Copyright © 2020 Ducor</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (common) => {
  return common;
};

const mapDispatchToProps = {
  truyCapValidCode,
  truyCapLogintk88,
  dangNhap,
  userProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
