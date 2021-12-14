import React from 'react';
import headerStyles from './app-header.module.css';
import MenuItem from '../menu-item/menu-item';
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
function AppHeader() {
  return (
    <header className={headerStyles.header}>
      <nav className={headerStyles.header__nav}>
        <ul className={headerStyles.header__list}>
          <MenuItem text='Конструктор' textStyles={'text text_type_main-default ml-2'} styles={`${headerStyles.header__item}  pl-5 pr-6`}>
            <BurgerIcon type='primary' />
          </MenuItem>
          <MenuItem text='Лента заказов' textStyles={'text text_type_main-default ml-2'} styles={`${headerStyles.header__item}  pl-6 pr-5`}>
            <ListIcon type='secondary' />
          </MenuItem>
          <MenuItem styles={`${headerStyles.header__logo}`}>
            <Logo />
          </MenuItem>
          <MenuItem text='Личный кабинет' textStyles={'text text_type_main-default ml-2'} styles={`${headerStyles.header__item}  pl-5 pr-5`}>
            <ProfileIcon type='secondary' />
          </MenuItem>
        </ul>
      </nav>
    </header>
  )
}

export default AppHeader;