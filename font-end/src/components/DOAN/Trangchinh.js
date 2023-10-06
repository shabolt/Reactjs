import Loaisp from "./sp";
import Header from "./Header";
import Example from "./Hbanner";
import Banner from "./Banner";
// import HeaderLoaisp from "./HeaderLoaisp";
import Footer from "./Footer";
import LoaiSanPham from "./LoaiSanPham";
import { useEffect, useState } from "react";
import { json } from "react-router-dom";




function Trangchinh(props) {
    const[dsloaisanpham,setdsloaisanpham]=useState([])
    useEffect(()=>{
        fetch('http://localhost:9000/get-data.php')
        // .then(response=>{console.log(response.json())})
        .then(response=>response.json())
        .then(json=>setdsloaisanpham(json))
    
        },[]);
    


    const listloaisanpham = dsloaisanpham.map(function (item) {
        return (
            <LoaiSanPham data={item} />
        );
    });
    return (

        <>
            <div className='Body'>

                <div className="header">
                    <Header />
                </div>
                <div className='Hbanner'>
                    <Example />
                </div>
                <div className='banner'>
                    <Banner />
                </div>
                <div class="bodySP">
                    {/* <HeaderLoaisp /> */}
                    <div class="row">
                        {listloaisanpham}
                    </div>
                </div>
                
                    <Footer />
                

            </div>
        </>
    );
}
export default Trangchinh;