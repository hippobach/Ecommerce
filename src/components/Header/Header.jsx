// Libraries
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import classname from 'classnames/bind';

import styles from './Header.module.scss';

const cx = classname.bind(styles);

// Export Internal
const logo = (
    <div className={cx('logo')}>
        <Link to="/">
            <h2>
                hippo<span>Shop</span>.
            </h2>
        </Link>
    </div>
);

const cart = (
    <span className={cx('cart')}>
        <Link to="/cart">
            Cart
            <FaShoppingCart size={20} />
            <p>0</p>
        </Link>
    </span>
);

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : '');

function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const handleToggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleHideMenu = () => {
        setShowMenu(false);
    };

    return (
        <header>
            <div className={cx('header')}>
                {logo}
                <nav className={cx(showMenu ? 'show-nav' : 'hide-nav')}>
                    <div
                        className={cx(showMenu ? 'nav-wrapper show-nav-wrapper' : 'nav-wrapper')}
                        onClick={handleHideMenu}
                    ></div>
                    <ul onClick={handleHideMenu}>
                        <li className={cx('logo-mobile')}>
                            {logo}
                            <FaTimes size={22} color="#fff" onClick={handleHideMenu} />
                        </li>
                        <li>
                            <NavLink to="/" className={activeLink}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={activeLink}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>

                    <div className={cx('header-right')} onClick={handleHideMenu}>
                        <span className={cx('links')}>
                            <NavLink to="/login">Login</NavLink>
                            <NavLink to="/register">Register</NavLink>
                            <NavLink to="/order-history">My Orders</NavLink>
                        </span>
                        {cart}
                    </div>
                </nav>
                <div className={cx('menu-icon')}>
                    {cart}
                    <HiOutlineMenuAlt3 size={28} onClick={handleToggleMenu} />
                </div>
            </div>
        </header>
    );
}

export default Header;
