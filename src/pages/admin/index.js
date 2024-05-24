import { Link } from "react-router-dom";
const AdminPage=() =>{
    return<>
        <div style={{color: 'blue',fontSize:'25px'}}>
            Day la trang admin
        </div> 
        <Link to="/">
                <button style={{ marginTop: '10px' }}>
                    Go to HomePage Page
                </button>
        </Link>
    </>
};
export default AdminPage;