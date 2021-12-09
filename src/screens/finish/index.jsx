import React from 'react'
import { useNavigate } from 'react-router'
import ScreenTitle from '../../components/screenTitle/ScreenTitle'

import './styles.css'

export const Finish = () => {
    const navigate = useNavigate()

    return (
        <div className='finishContainer'>
            <ScreenTitle
                title='Finish'
                breadcrumb={[
                    {
                        name: 'Home',
                        onClick: () => { navigate('/') }
                    },
                    {
                        name: 'Finish'
                    }
                ]}
            />

        </div>
    )
}