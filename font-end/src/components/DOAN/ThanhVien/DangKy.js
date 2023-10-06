import { Form, Col, Row, FormGroup, Label, Input, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
function DangKy()
{
  return (<>
  <h1>Đăng ký thành viên</h1>
    <Form>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">
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
            />
          </FormGroup>


          <FormGroup>
            <Label for="examplePassword">
              Mật khẩu
            </Label>
            <Input
              id="password"
              name="password"
              placeholder="Mật khẩu"
              type="password"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleRepassword">
              Xác nhận mật khẩu
            </Label>
            <Input
              id="exampleRepassword"
              name="Repassword"
              placeholder="Xác nhận mật khẩu"
            />
          </FormGroup>
        </Col>
      </Row>

     
      <Button>
        Sign in
      </Button>

    </Form>

  </>);
}
export default DangKy;