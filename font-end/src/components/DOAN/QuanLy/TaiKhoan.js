import { Form, Col, Row, FormGroup, Label, Input, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
function TaiKhoan()
{
  return (<>
  <h1>Quản lí tài khoản</h1>
    <Form>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label fo="exampleEmail">
              Họ Tên 
            </Label>
            <Input
              id="ho-ten"
              name="ho-ten"
              placeholder="Họ và tên"
              type="ho-ten"
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleEmail">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="email"
              type="email"
              value="email"
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleLogin">
              Tên đăng nhập
            </Label>
            <Input
              id="login"
              name="login"
              placeholder="Tên đăng nhập"
              type="login"
              value="ten dang nhap"
            />
          </FormGroup>


          <FormGroup>
            <Label for="examplePhone">
            Điện thoại

            </Label>
            <Input
              id="Phone"
              name="Phone"
              placeholder="Điện thoại"
              type="Phone"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
        <FormGroup>
            <Label for="exampleEmail">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="email"
              type="email"
         
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
        <FormGroup>
            <Label for="exampleAddress">
              Địa chỉ
            </Label>
            <Input
              id="Address"
              name="Address"
              placeholder="Address"
              type="Address"
         
            />
          </FormGroup>
        </Col>
      </Row>
     
      <Button>
        Cập nhật
      </Button>

    </Form>

  </>);
}
export default TaiKhoan;