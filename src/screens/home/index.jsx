import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import ScreenTitle from '../../components/screenTitle/ScreenTitle'

import FF14 from '../../assets/ff14/ff14.png'
import newWorld from '../../assets/nw/nw.jpg'
import teso from '../../assets/teso/teso.jpg'

import './styles.css'
import { betterProducts } from './betterProducts'
import ProductModal from '../../components/productModal'

export const Home = () => {
    const navigate = useNavigate()
    const [order, orderSet] = useState([0, 1, 2])

    const [modalVisible, modalVisibleSet] = useState(false)
    const [info, infoSet] = useState({
        title: '',
        price: 0,
        img: null
    })

    useEffect(() => {
        setTimeout(() => {
            orderSet([order[2], order[0], order[1]])
        }, 5000)
    }, [order])

    return (
        <div className='mainContainer'>
            <ScreenTitle
                title='Home'
                breadcrumb={[]}
            />
            <div className='homeContainer'>
                <div className='carousel'>
                    <div className={`item order${order[0]}`} onClick={() => navigate('/product/FF14')}>
                        <div className='text'>
                            <h3>50% OFF</h3>
                        </div>
                        <div className='image'>
                            <img src={FF14} alt='FF14' />
                        </div>
                    </div>
                    <div className={`item order${order[1]}`} onClick={() => navigate('/product/newWorld')}>
                        <div className='text'>
                            <h3>Loucura de fim de semana</h3>
                        </div>
                        <div className='image'>
                            <img src={newWorld} alt='newWorld' />
                        </div>
                    </div>
                    <div className={`item order${order[2]}`} onClick={() => navigate('/product/teso')}>
                        <div className='text'>
                            <h3>70% OFF</h3>
                        </div>
                        <div className='image'>
                            <img src={teso} alt='teso' />
                        </div>
                    </div>
                </div>

                <h3>Seus jogos favoritos em um só lugar</h3>

                <div className='betterProducts'>
                    {betterProducts.map(({ name, img, info }) => {
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
            </div>

            <ProductModal visible={modalVisible} onClose={() => modalVisibleSet(false)} info={info} />
        </div>
    )
}