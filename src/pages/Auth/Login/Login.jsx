import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import classnames from 'classnames/bind';
import styles from './Login.module.scss';
// import loginImage from '../../../assets/login.png';

const cx = classnames.bind(styles);

function Login() {
    return (
        <section className={cx('auth')}>
            <div className={cx('form')}>
                <h2>Login</h2>
                <form>
                    <input type="text" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button className={cx('btn-login')}>Login</button>
                    <div className={cx('links')}>
                        <Link to="/reset" className={cx('link-reset')}>
                            Reset Password
                        </Link>
                    </div>
                    <p>-- or --</p>
                </form>
                <button className={cx('btn-sub-login')}>
                    <FaGoogle color="#fff" className={cx('sub-logo')} />
                    Login With Google
                </button>
                <span className={cx('register')}>
                    <p>Don't have an account?</p>{' '}
                    <Link to="/register" className={cx('link-register')}>
                        Register
                    </Link>
                </span>
            </div>
        </section>
    );
}

export default Login;
