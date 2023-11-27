import './Login.scss';

const Login = () => {
    return (
        <>
        <form>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder='email' />
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder='password' />
        </form>
        </>
    );
};

export default Login;