import styles from './Admin.module.scss';
import classname from 'classnames/bind';

const cx = classname.bind(styles);

function Admin() {
    return <div className={cx('wrapper')}>Admin Pages</div>;
}

export default Admin;
