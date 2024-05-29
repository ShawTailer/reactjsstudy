import HomePage from "./pages/user/body/index.js";
import AdminPage from "./pages/admin/index.js";
import { ROUTERS } from "./utils/router";
import { Route,Routes } from "react-router-dom";
import MasterLayout from "./pages/masterLayout/index.js";
import Header from "./pages/user/header/index.js";
import Login from "./pages/user/theme/login.js";
const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage/>
        },
        {
            path: ROUTERS.USER.USERPAGE,
            component: <AdminPage/>
        },
        {
            path: ROUTERS.USER.LOGIN,
            component: <Login/>
        },
    ]
    return (
        <>
        <Header/>
        <MasterLayout>
        <Routes>
            {
                userRouters.map((item,key) => (
                    <Route key={key} path={item.path} element = {item.component} />  
            ))}
        </Routes>
        </MasterLayout>
        
        </>
    );
}

const RouterCustom = () => {
    return renderUserRouter(); 
}

export default RouterCustom;