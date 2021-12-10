import { Modal } from '@material-ui/core'
import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

import './styles.css'

const ProductModal = (props) => {
    const { cart, cartSet } = useContext(CartContext)

    console.log(cart)


    return (
        <Modal className='modal' open={props.visible} onClose={props.onClose}>
            <div className='container'>
                <img src={props.info.img} />
                <h3>{props.info.title}</h3>
                <h2>{`R$ ${props.info.price}`}</h2>

                <div className='buttonLine'>
                    <button onClick={() => {
                        cartSet([...cart, props.info])
                        alert("Successfully added item to cart.")
                    }}>Add to Cart</button>
                </div>
            </div>
        </Modal>
    )
}

export default ProductModal
