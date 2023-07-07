// Libraries
import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';

import styles from '../Auth.module.scss';
import Card from '../../../components/Card/Card';

const cx = classnames.bind(styles);

function Reset() {
    return (
        <section className={cx('auth')}>
            <Card>
                <div className={cx('form')}>
                    <h2>Reset Password</h2>
                    <form>
                        <input type="text" placeholder="Email" required />
                        <input type="password" placeholder="New Password" required />
                        <button className={cx('btn-login')}>Confirm</button>
                        <div className={cx('tranform')}>
                            <p>
                                <Link to="/login" className={cx('link-tranform')}>Login</Link>
                            </p>
                            <p>
                                <Link to="/register" className={cx('link-tranform')}>Register</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </Card>
        </section>
    );
}

export default Reset;
