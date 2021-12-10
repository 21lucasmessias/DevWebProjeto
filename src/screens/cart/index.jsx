import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import ScreenTitle from '../../components/screenTitle/ScreenTitle'
import { CartContext } from '../../contexts/CartContext'

import './styles.css'

export const Cart = (props) => {
    const navigate = useNavigate()

    const { cart, cartSet } = useContext(CartContext)

    const confirm = () => {
        alert('Sucessfully buy! Your cart will be clear in 2 seconds')

        setTimeout(() => {
            cartSet([])
        }, 2000)
    }

    return (
        <div className='mainContainer'>
            <ScreenTitle
                title='Cart'
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
            <div className='cartContainer'>
                <h3>Verify your itens</h3>
                <div className='total'>
                    {cart.map((sale, index) => (
                        <h2 key={`${index}-${sale.title}`}>
                            {`${sale.title} - R$ ${sale.price}`}
                        </h2>
                    ))}
                </div>

                <div className='buttonsLine'>
                    <h2>{`Total: R$ ${cart.reduce((acc, cur) => acc = acc + cur.price, 0)}`}</h2>
                    <button onClick={confirm}>
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    )
}

