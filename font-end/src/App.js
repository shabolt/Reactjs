import logo from './logo.svg';
import './App.css';
import './bootstrap-5.2.3-dist/css/bootstrap-grid.min.css';
import Header from './components/DOAN/Header';
import Banner from './components/DOAN/Banner';
import HeaderLoaisp from './components/DOAN/HeaderLoaisp';
import Loaisp from './components/DOAN/sp';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import GioiThieu from './components/DOAN/Chitiet';
import Example from './components/DOAN/Hbanner';
import Footer from './components/DOAN/Footer';
import Chitiet from './components/DOAN/Chitiet';
import Trangchinh from './components/DOAN/Trangchinh';
import GioHang from './components/DOAN/GioHang';
import ThanhToan from './components/DOAN/ThanhToan';
import DangNhap from './components/DOAN/ThanhVien/DangNhap';
import DangKy from './components/DOAN/ThanhVien/DangKy';
import TaiKhoan from './components/DOAN/QuanLy/TaiKhoan';
import MatKhau from './components/DOAN/QuanLy/MatKhau';
import DonHang from './components/DOAN/QuanLy/DonHang';







// const Member=[
//   {
//     IMGSP: "Hinhxe04.png",
//     NameSP: "SP thu 1",
//     PriceSP: 50000,
//   }];

// for (let i=1;i<8;i++){
//   Member[i]={IMGSP: "Hinhxe04.png",
//   NameSP: "SP thu "+i,
//   PriceSP: 50000,}
// }
function App() {
  // const listMember= Member.map(function(item){
  //   return (
  //     <Loaisp member={item}/>
  // );
  // });
  return (

    <>
      <div className='Body'>
        
        <Routes>
          <Route path='/' element={<Trangchinh />}></Route>
          <Route path='/chi-tiet' element={<Chitiet />}></Route>
          <Route path='/gio-hang' element={<GioHang/>}></Route>
          <Route path='/gio-hang/thanh-toan' element={<ThanhToan/>}></Route>
          <Route path='/dang-nhap'element={<DangNhap/>}></Route>
          <Route path='/dang-ky' element={<DangKy/>}></Route>
          <Route path='/tai-khoan' element={<TaiKhoan/>}></Route>
          <Route path='/tai-khoan/thay-doi-mat-khau' element={<MatKhau/>}></Route>
          <Route path='/DonHang' element={<DonHang/>}></Route>
    
        </Routes>


      </div>
    </>
  );
}
export default App;