import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import ProductModal from '../../components/productModal'
import ScreenTitle from '../../components/screenTitle/ScreenTitle'
import { products } from './products'

import './styles.css'

export const Product = () => {
    const navigate = useNavigate()

    const [modalVisible, modalVisibleSet] = useState(false)
    const [info, infoSet] = useState({
        title: '',
        price: 0,
        img: null
    })

    return (
        <div className='productContainer'>
            <ScreenTitle
                title='Products'
                breadcrumb={[
                    {
                        name: 'Home',
                        onClick: () => { navigate('/') }
                    },
                    {
                        name: 'Products'
                    }
                ]}
            />

            <div className='betterProducts'>
                {products.map(({ name, img, info }) => {
                    return (
                        <div key={name} className='image' onClick={() => {
                            infoSet(info)
                            modalVisibleSet(true)
                        }}>
                            <img src={img} alt={name} />
                        </div>
                    )
                })}
            </div>

            <ProductModal visible={modalVisible} onClose={() => modalVisibleSet(false)} info={info} />
        </div>
    )
}