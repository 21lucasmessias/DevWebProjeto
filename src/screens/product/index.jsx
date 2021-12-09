import React from 'react'
import { useNavigate } from 'react-router'
import ScreenTitle from '../../components/screenTitle/ScreenTitle'

import './styles.css'

export const Product = () => {
    const navigate = useNavigate()

    return (
        <div className='productContainer'>
            <ScreenTitle
                title='Product'
                breadcrumb={[
                    {
                        name: 'Home',
                        onClick: () => { navigate('/') }
                    },
                    {
                        name: 'Product'
                    }
                ]}
            />

        </div>
    )
}