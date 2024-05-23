import HomePage from "./pages/user/index.js";
import AdminPage from "./pages/admin/index.js";
import { ROUTERS } from "./utils/router";
import { Route,Routes } from "react-router-dom";
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
    ]
    return (
        <Routes>
            {
                userRouters.map((item,key) => (
                    <Route key={key} path={item.path} element = {item.component} />  
            ))}
        </Routes>
    );
}

const RouterCustom = () => {
    return renderUserRouter();
}

export default RouterCustom;