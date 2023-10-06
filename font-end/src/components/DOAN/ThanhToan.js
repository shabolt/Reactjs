import { Table } from "reactstrap"
import SanPham from "./sp";


function ThanhToan(props)
{
return(<>
<h1>Thanh Toan</h1>
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
<div className="row">
    <div className="info col-md-4">
    <p>Thông tin người nhận hàng:</p>
        
    </div>
    <div className="col-md-4"></div>
    <div className="col-md-4">
        <p>Hình thức thanh toán:</p>
    </div>
  </div>
<div class="row">
<button href="" className="tieptucmuahang col-sm-2">Tiếp Tục mua hàng</button>
<div className="col-sm-8"></div>
<button href=""className="thanhtoan col-md-2" >Thanh Toán</button>
</div>
</>);
}

export default ThanhToan;