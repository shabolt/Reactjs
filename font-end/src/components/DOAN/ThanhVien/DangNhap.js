import { Form, Col, Row, FormGroup, Label, Input, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
function DangNhap() {
  return(<>
  <h1>Đăng nhập</h1>
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
          <Row>
        <Col md={6}>
      <NavLink to='/dang-ky' className="dang-ky">Đăng ký</NavLink>
     </Col>
     <Col md={6}>
      <Button>Đăng nhập</Button>
     </Col>
     </Row>
     
    </>);
}
export default DangNhap;


