import { Table } from "reactstrap"
import SanPham from "./sp";
import { NavLink } from "react-router-dom";

function GioHang()
{
return(<>
<h1>GIỎ HÀNG</h1>
<Table bordered >
  <thead>
    <tr>
      <th>
        SẢN PHẨM
      </th>
      <th>
        ĐƠN GIÁ
      </th>
      <th>
        SỐ LƯỢNG 
      </th>
      <th>
        THÀNH TIỀN
      </th>
      <th>
        <a href=""> </a>| <a href=""></a>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        1
      </th>
      <td>
        Mark
      </td>
      <td>
        Otto
      </td>
      <td>
        @mdo
      </td>
    </tr>

  </tbody>
</Table>
<div class="row">
<button href="" className="tieptucmuahang col-sm-2">Tiếp Tục mua hàng</button>
<div className="col-sm-8"></div>
<button className="col-sm-2" >
<NavLink to='/gio-hang/thanh-toan' >THANH TOÁN</NavLink>
</button>
</div>
</>);
}

export default GioHang;