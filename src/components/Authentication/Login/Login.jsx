import './Login.scss';
import { useContext, useState } from 'react';
import { UserContext } from '../../../context/UserContext/UserState';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const emptyDataState = {email: "", password: ""};
    const [data, setData] = useState(emptyDataState);
    const {login} = useContext(UserContext);
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setData({
          ...data,
          [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        login(data);
        navigate("/");
        setData(emptyDataState);
    };

    return (
        <>
        <main>
            <form className='login-signup-form' onSubmit={handleSubmit}>
                <input type="email" id="email" name="email" placeholder='email' onChange={handleInputChange} value={data.email} />
                <input type="password" id="password" name="password" placeholder='password' onChange={handleInputChange} value={data.password} />
                <button type='submit'>Send</button>
            </form>
        </main>
        </>
    );
};

export default Login;