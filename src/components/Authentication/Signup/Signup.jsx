import './Signup.scss';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from '../../../context/UserContext/UserState';

const Signup = () => {
    const emptyDataState = { username: "", email: "", password: "" };
    const [data, setData] = useState(emptyDataState);
    const { signup } = useContext(UserContext);
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        signup(data);
        navigate("/");
        setData(emptyDataState);
    };

    return (
        <>
        <main className='signup-main'>
                <form className='signup-form' onSubmit={handleSubmit}>
                    <h4>Únete al bando de los verdes</h4>
                    <input type="text" id="username" name="username" placeholder='nombre' onChange={handleInputChange} value={data.username} />
                    <input type="email" id="email" name="email" placeholder='email' onChange={handleInputChange} value={data.email} />
                    <input type="password" id="password" name="password" placeholder='contraseña' onChange={handleInputChange} value={data.password} />
                    <button type='submit'>Únete</button>
                </form>
        </main>
        </>
    );
};

export default Signup;