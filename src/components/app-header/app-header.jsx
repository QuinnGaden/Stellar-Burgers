import React from 'react';
import headerStyles from './app-header.module.css';
import MenuItem from '../menu-item/menu-item';
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
function AppHeader() {
  return (
    <header className={headerStyles.header}>
      <nav className={headerStyles.header__nav}>
        <ul className={headerStyles.header__list}>
          <MenuItem text='Конструктор' textStyles={'text text_type_main-default'}>

          </MenuItem>
          <MenuItem text='Лента заказов' textStyles={'text text_type_main-default'}>

          </MenuItem>
          <MenuItem text='Личный кабинет' textStyles={'text text_type_main-default'}>

          </MenuItem>
        </ul>
      </nav>
    </header>
  )
}

export default AppHeader;