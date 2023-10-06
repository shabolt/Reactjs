import { NavLink } from "react-router-dom";
function Hinhsp(Anh)
{
    return(
    <>
        <NavLink to="/chi-tiet" className="Nav-Link active" class="menu"> <img class="AnhSP" src={Anh.url}/></NavLink>
    </>
    )
}

export default Hinhsp;