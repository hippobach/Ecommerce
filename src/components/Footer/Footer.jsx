import styles from './Footer.module.scss';
import classname from 'classnames/bind';

const cx = classname.bind(styles);

function Footer() {
    return <div className={cx('footer')}>Footer</div>;
}

export default Footer;
