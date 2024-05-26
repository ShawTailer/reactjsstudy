import "./style.scss";
import { Link }  from "react-router-dom";
const Header = () => {
    return (
        <div className="header_top"> 
            <Link to= "/login">
                <button style={{ margin: '10px' ,fontSize:'15px'}}>
                    Đăng nhập
                </button>
            </Link>
            <Link to= "/register">
                <button style={{ margin: '10px', fontSize:'15px' }}>
                    Đăng kí
                </button>
            </Link>
        </div>
    );
};
export default Header;