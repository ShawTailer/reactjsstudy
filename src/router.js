import HomePage from "./pages/user/index.js";
import { ROUTERS } from "./utils/router";
const RouterCustom = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage/>
        }
    ]
}

export default RouterCustom;