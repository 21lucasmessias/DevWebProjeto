import React from 'react'
import { useNavigate } from 'react-router'
import ScreenTitle from '../../components/screenTitle/ScreenTitle'

import './styles.css'

export const Cart = (props) => {
    const navigate = useNavigate()

    return (
        <div className='cartContainer'>
            <ScreenTitle
                title='Cart'
                subtitle='Verify your itens'
                breadcrumb={[
                    {
                        name: 'Home',
                        onClick: () => { navigate('/') }
                    },
                    {
                        name: 'Cart'
                    }
                ]}
            />

        </div>
    )
}

