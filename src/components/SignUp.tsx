import {useNavigate} from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {Form} from './Form/Form';
import {setUser} from '../store/slices/userSlice';
import { useAppDispatch } from '../hooks/redux-hooks';

const SignUp = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                navigate('/');
            })
            .catch(()=> alert("Пароль должен содержать минимум 6 символов"))
    }

    return (
        <Form
            title="Register"
            handleClick={handleRegister}
        />
    )
}
 
export {SignUp}