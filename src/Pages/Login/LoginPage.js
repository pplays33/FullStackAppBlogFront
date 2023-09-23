import styles from './login.module.scss';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { feathAuth, selectorIsAuth } from '../../redux/slices/auth';

export default function Login() {
    const isAuth = useSelector(selectorIsAuth);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        dispatch(feathAuth(data));
    };
    console.log(isAuth);
    
    return (
        <>
            <div className={styles['container_login']} >
                {/* <div className={styles['login']} > */}
                <h2> Login →</h2>
                <form onSubmit={handleSubmit(onSubmit)} className={styles['login']}>
                    <input {...register('email', { required: true })} placeholder='E-mail' className={styles['email']} />
                    {errors.password && <p>Last name is required.</p>}
                    <input {...register('password', { required: true })} type='password' placeholder='Password' className={styles['password']} />
                    {errors.password && <p>Last name is required.</p>}
                    <input type="submit" className={styles['btn']}/>
                </form>
                {/* </div> */}
            </div>
        </>
    );
}