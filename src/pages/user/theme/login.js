import "./style.scss"

const Login = () => {
    return (
        <div className="inputbox">
            <h3>Đăng nhập</h3>
            <label htmlFor="username">User:</label>
            <input id="username" type="text" />
            <br />
            <label htmlFor="password">Pass:</label>
            <input id="password" type="password" />
            <input id="submit" type="submit" />
        </div>
    );
};
export default Login;