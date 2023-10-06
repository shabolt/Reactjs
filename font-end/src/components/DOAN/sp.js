import Hinhsp from "./Hinhsp";
import Tensp from "./Tensp";
import Giasp from "./Giasp";
function SanPham(truyen) {
    return (
        <>
            <div class="col-sm-3">
                <div class="SanPham">
                    <div class="TopSP">
                        <Hinhsp url={truyen.data.Hinh} />
                    </div>

                    <div class="Center1SP">
                        <Tensp nm={truyen.data.Ten} />
                    </div>

                    <div class="Center2SP">
                        <Giasp pr={truyen.data.Gia} />
                    </div>
                    <div class="BottomSP">
                        <button type="Submit">BUY</button>
                    </div>

                </div>
            </div>


        </>
    );
}
export default SanPham;