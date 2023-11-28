import './Login.scss';
import { useContext, useState } from 'react';
import { UserContext } from '../../../context/UserContext/UserState';

const Login = () => {

    const {login} = useContext(UserContext);
    const emptyDataState = {email: "", password: ""};
    const [data, setData] = useState(emptyDataState);

    const handleInputChange = (event) => {
        setData({
          ...data,
          [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        login(data);
        setData(emptyDataState);
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="email" id="email" name="email" placeholder='email' onChange={handleInputChange} value={data.email} />
            <input type="password" id="password" name="password" placeholder='password' onChange={handleInputChange} value={data.password} />
            <button type='submit'>Send</button>
        </form>
        </>
    );
};

export default Login;