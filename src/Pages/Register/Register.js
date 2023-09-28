import styles from './register.module.scss';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";

import { feathRegister, selectorIsAuth } from '../../redux/slices/auth';

export default function Register() {
    const isAuth = useSelector(selectorIsAuth);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const data_auth = await dispatch(feathRegister(data));
        // console.log(data_auth);

        if(!data_auth.payload) {
            alert("не удалось зарегестрироватся!");
            return;
        }

        if( 'token' in data_auth.payload ){
            
            window.localStorage.setItem('token', data_auth.payload.token);

        }

    };
    console.log(isAuth);

    if(isAuth){
        return <Navigate to="/" />;
    }
    
    return (
        <>
            <div className={styles['container_login']} >
                {/* <div className={styles['login']} > */}
                <h2> Login →</h2>
                <form onSubmit={handleSubmit(onSubmit)} className={styles['login']}>
                    <input {...register('fullName', { required: true })} placeholder='fullName' className={styles['email']} />
                    {errors.fullName && <p>fullName is required.</p>}
                    <input {...register('email', { required: true })} placeholder='E-mail' className={styles['email']} />
                    {errors.email && <p>email is required.</p>}
                    <input {...register('password', { required: true })} type='password' placeholder='Password' className={styles['password']} />
                    {errors.password && <p>password is required.</p>}
                    <input type="submit" className={styles['btn']}/>
                </form>
                {/* </div> */}
            </div>
        </>
    );
}