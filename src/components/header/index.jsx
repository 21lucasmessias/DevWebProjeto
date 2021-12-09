import React, { useState } from 'react'

import { menus } from './menus'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import './styles.css'

const Header = () => {
    const [selectedRoute, selectedRouteSet] = useState('/')

    return (
        <div className='headerContainer'>
            <img src={Logo} alt='logo' />
            <div className='buttons'>
                {menus.map(({ name, Icon, route }) => (
                    <Link
                        key={name}
                        to={route}
                        onClick={() => selectedRouteSet(route)}
                        className={selectedRoute === route ? 'selected' : ''}
                    >
                        <button className='buttonWrapper' >
                            <Icon fontSize='large' />
                            <h2>{name}</h2>
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Header
