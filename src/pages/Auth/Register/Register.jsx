import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';
import styles from '../Auth.module.scss';

import Card from '../../../components/Card/Card';

const cx = classnames.bind(styles);

function Login() {
    return (
        <section className={cx('auth')}>
            <Card>
                <div className={cx('form')}>
                    <h2>Register</h2>
                    <form>
                        <input type="text" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <input type="password" placeholder="Confirm Password" required />
                        <button className={cx('btn-login')}>Register</button>
                    </form>
                    <span className={cx('register')}>
                        <p>Already an account</p>{' '}
                        <Link to="/login" className={cx('link-register')}>
                            Login
                        </Link>
                    </span>
                </div>
            </Card>
        </section>
    );
}

export default Login;
