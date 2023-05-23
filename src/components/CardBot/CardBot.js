import React from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const CardBot = (props) => {
  const { xuLyTaoBot } = props;
  const { register, handleSubmit } = useForm({
    defaultValues: {},
  });

  const checkbox = [
    {
      label: "Xổ số Miền bắc 75s",
      value: "mb75s",
    },
    {
      label: " Xổ số miền trung 75s",
      value: "mt75s",
    },
    {
      label: "TKXSST1Phut",
      value: "tkxsst1p",
    },
    {
      label: "Xổ số Miền bắc TK 75s",
      value: "mbtk75s",
    },
  ];

  const xuLyNoiBoLogin = (data) => {
    console.log(data, "datadatadatadatadatadata");
    xuLyTaoBot(data);
  };
  return (
    <Card>
      <Card.Header>Bot</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit(xuLyNoiBoLogin)}>
          <Form.Group className='row'>
            <Form.Label className='col-sm-3 '>Tên Bot</Form.Label>
            <Col sm='9'>
              <Form.Control
                placeholder='Tên bot'
                name='name_bot'
                {...register("name_bot")}
              />
            </Col>
          </Form.Group>
          <Form.Group className='row'>
            <Form.Label className='col-sm-3 '>Quản lý vốn</Form.Label>
            <Col sm='9'>
              <Form.Control
                as='select'
                name='quanLyVon'
                className='m-b'
                {...register("quanLyVon")}
              >
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group className='row'>
            <Form.Label className='col-sm-3 '>
              Hình thức tăng giá trị
            </Form.Label>
            <Col sm='9'>
              <Form.Control
                as='select'
                {...register("tangGiaTri")}
                className='m-b'
              >
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
              </Form.Control>
            </Col>
          </Form.Group>

          <Form.Group className='row'>
            <Form.Label className='col-sm-3 '>Giá trị vào lệnh</Form.Label>
            <Col sm='9'>
              <Form.Control
                placeholder='1000,2000,4000,8000'
                {...register("von")}
              />
            </Col>
          </Form.Group>

          <Form.Group className='row'>
            <Form.Label className='col-sm-3 '>Chốt lãi</Form.Label>
            <Col sm='9'>
              <Form.Control
                placeholder='300000'
                name='chotLai'
                {...register("chotLai")}
              />
            </Col>
          </Form.Group>

          <Form.Group className='row'>
            <Form.Label className='col-sm-3 '>Chốt lỗ</Form.Label>
            <Col sm='9'>
              <Form.Control
                placeholder='150000'
                name='chotLo'
                {...register("chotLo")}
              />
            </Col>
          </Form.Group>

          <Form.Group className='row'>
            <Form.Label className='col-sm-3 '>Phương pháp đánh</Form.Label>
            <Col sm='9'>
              <Form.Control
                as='select'
                className='m-b'
                {...register("phuongPhap")}
              >
                <option>Random</option>
                <option>Tuỳ chỉnh</option>
              </Form.Control>
            </Col>
          </Form.Group>

          <Form.Group>
            <Form.Label>Chọn Xổ số</Form.Label>
            <Row>
              <Col>
                {checkbox.map((item, index) => {
                  return (
                    <div
                      className='checkbox checkbox-primary margin-r-5'
                      key={index}
                    >
                      <input
                        id={item.value}
                        type='checkbox'
                        value={item.value}
                        {...register("game")}
                      />
                      <Form.Label htmlFor={item.value}>{item.label}</Form.Label>
                    </div>
                  );
                })}
              </Col>
            </Row>
          </Form.Group>

          <Button
            type='submit'
            className='btn-sm'
            onClick={handleSubmit(xuLyNoiBoLogin)}
          >
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default CardBot;
