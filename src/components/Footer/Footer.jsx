import styles from './Footer.module.scss';
import classname from 'classnames/bind';

const cx = classname.bind(styles);

const date = new Date();
const year = date.getFullYear();

function Footer() {
    return <div className={cx('footer')}>&copy; {year} All Rights Reserved</div>;
}

export default Footer;
