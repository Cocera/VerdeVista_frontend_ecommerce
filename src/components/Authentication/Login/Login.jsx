import './Login.scss';
import { useContext } from 'react';
import { UserContext } from '../../../context/UserContext/UserState';

const Login = () => {

    const {login} = useContext(UserContext);

    const onFinish = (userValues) => {
        login(userValues)
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <>
        <form on>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder='email' />
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder='password' />
            <button>Send</button>
        </form>
        </>
    );
};

export default Login;