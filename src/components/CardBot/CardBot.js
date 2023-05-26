import React, { useEffect, useState } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ReactSwitch from "react-switch";

const CardBot = (props) => {
  const { xuLyTaoBot } = props;
  const { register, handleSubmit, setValue } = useForm({});

  const [chooseGame, setChooseGame] = useState({});

  const checkbox = [
    {
      label: "Xổ số Miền bắc 75s",
      value: "mb75s",
      valueCL: "CLmb75s",
      valueTX: "TXmb75s",
      labelCL: "Chọn Chẳn Lẻ",
      labelTX: "Chọn Tài Xỉu",
      active: true,
    },
    {
      label: " Xổ số miền trung 75s",
      value: "mt75s",
      valueCL: "CLmt75s",
      valueTX: "TXmt75s",
      labelCL: "Chọn Chẳn Lẻ",
      labelTX: "Chọn Tài Xỉu",
    },
    {
      label: "TKXSST1Phut",
      value: "tkxsst1p",
      valueCL: "CLtkxsst1p",
      valueTX: "TXtkxsst1p",
      labelCL: "Chọn Chẳn Lẻ",
      labelTX: "Chọn Tài Xỉu",
    },
    {
      label: "Xổ số Miền bắc TK 75s",
      value: "mbtk75s",
      valueCL: "CLmbtk75s",
      valueTX: "TXmbtk75s",
      labelCL: "Chọn Chẳn Lẻ",
      labelTX: "Chọn Tài Xỉu",
    },
  ];

  const xuLyNoiBoLogin = (data) => {
    xuLyTaoBot(data);
  };

  useEffect(() => {
    setValue("chooseGame", chooseGame);
  }, [chooseGame]);

  return (
    <Card className='c-card-bot'>
      <Card.Header>Bot</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit(xuLyNoiBoLogin)}>
          <Form.Group className='row'>
            <Form.Label className='col-sm-3 '>Tên Bot</Form.Label>
            <Col sm='9'>
              <Form.Control
                placeholder='Tên bot'
                name='name'
                {...register("name")}
              />
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
                <option value='gapLose'>Tăng khi thua</option>
                <option value='gapWin'>Tăng khi thắng</option>
                <option value='alwayTang'>Luôn luôn tăng</option>
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

          <Form.Group className='c-card-bot-xo-so'>
            <Form.Label>Chọn Xổ số</Form.Label>
            <Row>
              {checkbox.map((item, index) => {
                return (
                  <>
                    <Col xs={4}>
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
                        <Form.Label htmlFor={item.value}>
                          {item.label}
                        </Form.Label>
                      </div>
                    </Col>

                    <Col xs={4}>
                      <Form.Label>{item.labelCL}</Form.Label>
                      <ReactSwitch
                        checked={chooseGame[item.valueCL]}
                        onChange={(check) => {
                          setChooseGame((prevState) => {
                            return {
                              ...prevState,
                              [item.valueCL]: check,
                            };
                          });
                        }}
                      />
                    </Col>
                    <Col xs={4}>
                      <Form.Label>{item.labelTX}</Form.Label>
                      <ReactSwitch
                        checked={chooseGame[item.valueTX]}
                        onChange={(check) => {
                          setChooseGame((prevState) => {
                            return {
                              ...prevState,
                              [item.valueTX]: check,
                            };
                          });
                        }}
                      />
                    </Col>
                  </>
                );
              })}
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
