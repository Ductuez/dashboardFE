import React from "react";
import { Form, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const FormDangKy = (props) => {
  const { xuLyDangKy } = props;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password", "");

  const submitForm = (data) => {
    console.log(data);
    xuLyDangKy(data);
  };

  return (
    <Form>
      <div className='misc-header text-center'>
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
        <p className='text-center'>Sign up to get instant access.</p>
        <Form onSubmit={handleSubmit(submitForm)}>
          <Form.Group>
            <label htmlFor='eampleuser1'>Email </label>
            <div className='group-icon'>
              <input
                id='eampleuser1'
                type='email'
                placeholder='Enter Email'
                className='form-control'
                {...register("email")}
              />
              <span className='icon-envelope text-muted icon-input' />
            </div>
          </Form.Group>
          <Form.Group className='group-icon'>
            <label htmlFor='exampleInputPassword1'>Password</label>
            <div className='group-icon'>
              <input
                id='exampleInputPassword1'
                type='password'
                placeholder='Password'
                className='form-control'
                {...register("password")}
              />
              <span className='icon-lock text-muted icon-input' />
            </div>
          </Form.Group>

          <button
            className='btn btn-block btn-primary btn-rounded box-shadow mt-10'
            onClick={handleSubmit(submitForm)}
          >
            Register Now
          </button>
          <hr />
          <p className=' text-center'>Have an account?</p>
          <Link
            to={"/auth/login"}
            className='btn btn-block btn-success btn-rounded box-shadow'
          >
            Login
          </Link>
        </Form>
      </div>
      <div className='text-center'>
        <p>Copyright © 2020 Ducor</p>
      </div>
    </Form>
  );
};

export default FormDangKy;
