import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import ScreenTitle from '../../components/screenTitle/ScreenTitle'
import { CartContext } from '../../contexts/CartContext'

import './styles.css'

export const Cart = (props) => {
    const navigate = useNavigate()

    const { cart, cartSet } = useContext(CartContext)
    const [cupom, cupomSet] = useState('')
    const [discount, discountSet] = useState(1.0)

    const confirm = () => {
        alert('Sucessfully buy! Your cart will be clear in 2 seconds')

        setTimeout(() => {
            cartSet([])
        }, 2000)
    }

    useEffect(() => {
        if (cupom === 'UTFPR') {
            discountSet(0.85)
        }
    }, [cupom])

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
                        <div className='item'>
                            <h2 key={`${index}-${sale.title}`}>
                                {`${sale.title} - R$ ${sale.price}`}
                            </h2>
                            <button onClick={() => cartSet([...cart.filter((p, idx) => idx != index)])}>Remove item</button>
                        </div>
                    ))}
                </div>

                <div className='buttonsLine'>
                    <div>
                        <h2>{`Total: R$ ${cart.reduce((acc, cur) => acc = acc + cur.price, 0) * discount}`}</h2>
                        <div>
                            <h1>Insert your cupom here: </h1>
                            <input value={cupom} onChange={(e) => cupomSet(e.target.value)}></input>
                        </div>
                    </div>
                    <button onClick={confirm}>
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    )
}

