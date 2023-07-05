import styles from './Header.module.scss';
import classname from 'classnames/bind';

const cx = classname.bind(styles);

function Header() {
    return <div className={cx('wraper')}>Header</div>;
}

export default Header;
