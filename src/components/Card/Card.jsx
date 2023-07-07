// Libraries
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Card.module.scss';

const cx = classNames.bind(styles);

function Card({ children }) {
    return <div className={cx('card')}>{children}</div>;
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Card;
