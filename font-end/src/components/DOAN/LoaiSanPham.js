import SanPham from "./sp";

function LoaiSanPham(pros){
    const listsanpham = pros.data.ds_san_pham.map(function (item) {
        return (
            <SanPham data={item} />
        );
    });
    return(
        <>
        <h1 className="ten-loai-san-pham">{pros.data.ten}</h1>
        <div className="row">{listsanpham}</div>
        </>
    );
}
export default LoaiSanPham;