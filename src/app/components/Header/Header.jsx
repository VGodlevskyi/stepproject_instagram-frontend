import React from 'react';
import InstagramBrand from "../SvgIcons/InstagramBrand";
import HomeIcon from "../SvgIcons/HomeIcon";
import DirectIcon from "../SvgIcons/DirectIcon";
import CompassIcon from "../SvgIcons/CompasIcon";
import LikeIcon from "../SvgIcons/LikeIcon";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import userSelector from "../../store/selectors/userSelector";
import "./Header.scss"


const Header = () => {

  const { _id, img, name } = useSelector(userSelector)

  return (
    <header className='header'>
      <div className="container">
        <div className='header__inner'>
          <Link to='/'>
            <div className='header__brand'>
              <InstagramBrand/>
            </div>
          </Link>
          <input className='header__search' type="text" placeholder="Поиск"/>
          <div className='header__menu'>
            <NavLink activeClassName='header__menu__home-active' exact to='/'>
              <HomeIcon/>
            </NavLink>
            <NavLink activeClassName='header__menu__direct-active' exact to='/direct'>
              <DirectIcon/>
            </NavLink>
            <NavLink activeClassName='header__menu__find-people-active' exact to='/find-people'>
              <CompassIcon/>
            </NavLink>
            <NavLink activeClassName='header__menu__likes-active' exact to='/likes'>
              <LikeIcon/>
            </NavLink>
            <NavLink className='header__menu__profile__link'
                     activeClassName='header_menu__profile__link--active'
                     to={ `/user/${ _id }` }>
              <div className='header__menu__profile'>
                <img src={ img || '/no_user_photo.png' } alt={ name }/>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;