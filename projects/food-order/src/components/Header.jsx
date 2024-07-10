import { useContext } from 'react';
import imgLogo from '../assets/logo.jpg';
import { CartContext } from '../store/CartContext';
import CartModal from './CartModal';
import { useRef } from "react";

function Header() {

    const { cart } = useContext(CartContext);
    const cartModal = useRef();

    const cartLenght = Object.values(cart).reduce((t, n) => t + n, 0);

    const handleOpenCart = () => {
        cartModal.current.showModal();
    }

    return (
        <>
            <CartModal ref={cartModal}></CartModal>

            <header id="main-header">
                <h1 id='title'>
                    <img src={imgLogo} alt="ReactFood logo" />
                    {'reactfood'.toUpperCase()}
                </h1>
                <button className='text-button' onClick={handleOpenCart}>Cart ({cartLenght})</button>
            </header>
        </>
    );
}

export default Header;
