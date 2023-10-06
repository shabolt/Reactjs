import { Form, Col, Row, FormGroup, Label, Input, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
function MatKhau() {
  return(<>
  <h1>Đăng nhập</h1>
    <FormGroup>
            <Label for="exampleOldPassword">
              Mật khẩu cũ
            </Label>
            <Input
              id="OldPassword"
              name="OldPassword"
              placeholder="Mật khẩu cũ"
              type="OldPassword"
            />
          </FormGroup>


          <FormGroup>
            <Label for="exampleNewPassword">
              Mật khẩu Mới
            </Label>
            <Input
              id="NewPassword"
              name="NewPassword"
              placeholder="Mật khẩu"
              type="NewPassword"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleReNewPassword">
              Mật khẩu Mới
            </Label>
            <Input
              id="ReNewPassword"
              name="ReNewPassword"
              placeholder="Xác nhận mật khẩu"
              type="ReNewPassword"
            />
          </FormGroup>
          <Row>
        <Col md={6}>
  
     </Col>
     <Col md={6}>
      <Button>Xác nhận</Button>
     </Col>
     </Row>
     
    </>);
}
export default MatKhau;