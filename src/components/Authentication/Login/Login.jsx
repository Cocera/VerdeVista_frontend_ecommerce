import './Login.scss';
import { useContext, useState } from 'react';
import { UserContext } from '../../../context/UserContext/UserState';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    const emptyDataState = { email: "", password: "" };
    const [data, setData] = useState(emptyDataState);
    const { login } = useContext(UserContext);
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
            <main className='login-main'>
                <form className='login-form' onSubmit={handleSubmit}>
                    <h4>¡Te echabamos de menos!</h4>
                    <input type="email" id="email" name="email" placeholder='email' onChange={handleInputChange} value={data.email} />
                    <input type="password" id="password" name="password" placeholder='contraseña' onChange={handleInputChange} value={data.password} />
                    <button type='submit'>Conectar</button>
                    <p>¿Aun no formas parte de nuestra comunidad? <Link to='/signup'><span className='toRegister'>Regístrate</span></Link></p>
                </form>
            </main>
        </>
    );
};

export default Login;