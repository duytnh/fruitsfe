import { memo, useEffect, useState } from 'react';
import "./style.scss";
import { Link } from 'react-router-dom';
import logo from "assets/users/halonalogo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { HiShoppingBag } from "react-icons/hi2";
import { RiArrowDropDownLine } from "react-icons/ri";
import { ROUTERS } from 'utils/router';

const Header = () => {
    const [selected, setSelected] = useState(0);
    const [menus, setMenus] = useState([
        {
            name: 'Trang chủ',
            path: ROUTERS.USER.HOME
        },
        {
            name: 'Giới thiệu',
            path: ROUTERS.USER.INTRO
        },
        {
            name: <>Cửa hàng<RiArrowDropDownLine /></>,
            path: ROUTERS.USER.STORE,
            isShowSubmenu: false,
            child: [
                {
                    name: 'Trái cây nội địa',
                    path: ''
                },
                {
                    name: 'Trái cây nhập khẩu',
                    path: ''
                },
                {
                    name: 'Các loại hạt dinh dưỡng',
                    path: ''
                },
                {
                    name: 'Các loại rau củ quả',
                    path: ''
                },
                {
                    name: 'Nước ép',
                    path: ''
                }
            ]
        },
        {
            name: 'Tin tức',
            path: ROUTERS.USER.NEWS
        },
        {
            name: 'Liên hệ',
            path: ROUTERS.USER.CONTACTS
        }
    ])

    console.log(setMenus)

    const [isHeaderFixed, setIsHeaderFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsHeaderFixed(true);
            } else {
                setIsHeaderFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='head'>
            <div className='header__top'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6'>
                            Chuyên cung cấp thực phẩm sạch | Halona fruits
                        </div>
                        <div className='col-lg-6 col-md-6 header__top_right'>
                            <ul>
                                <li><Link to="">Tài khoản</Link></li>
                                <li><Link to="">Thanh toán</Link></li>
                                <li><Link to="">Cửa hàng</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={isHeaderFixed ? 'fixed' : 'header__bottom'}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-3 header__bottom_left'>
                            <img src={logo} alt='logo' />
                        </div>
                        <div className='col-lg-3 col-md-3 header__bottom_mid'>
                            <form>
                                <input type='search' placeholder='Tìm kiếm...' className='input_search' />
                                <button type='submit'><AiOutlineSearch className='icon_search' /></button>
                            </form>
                        </div>
                        <div className='col-lg-6 col-md-6 header__bottom_right'>
                            <nav className='header__bottom_menu'>
                                <ul className='menu'>
                                    {menus.map((menu, menuKey) => (
                                        <li key={menuKey} className={menuKey === selected ? 'selected' : ''} onClick={() => setSelected(menuKey)}>
                                            <Link to={menu?.path}>{menu?.name}</Link>
                                            {menu.child && (
                                                <ul className='menu__dropdown'>
                                                    <div className='tamgiac'></div>
                                                    {menu.child.map((item, keyItem) => (
                                                        <li key={`${menuKey}-${keyItem}`}>
                                                            <Link to={item.path}>{item.name}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                    <li className='cart__button' onClick={() => setSelected(null)}>
                                        <Link to={ROUTERS.USER.CART}><HiShoppingBag /></Link><span><h5>5</h5></span>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Header);