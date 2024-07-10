import { forwardRef, useContext, useRef } from 'react';
import { CartContext } from '../store/CartContext';
import { MealsContext } from '../store/MealsContext';
import CheckoutModal from './CheckoutModal';
import { currencyFormatter } from '../utils/formatting';



const CartModal = forwardRef(function CartModal(_, ref) {

    const checkoutModal = useRef();

    const { cart, dispatchCart } = useContext(CartContext);
    const meals = useContext(MealsContext);

    let totalPrice = 0;
    Object.keys(cart).forEach((key) => {
        const meal = meals.find(item => item.id === key);
        totalPrice += cart[key] * meal.price;
    }, 0);

    const handleOnGoToCheckout = () => {
        checkoutModal.current.showModal();
    }

    return (
        <>
            <CheckoutModal ref={checkoutModal} price={totalPrice}></CheckoutModal>
            <dialog ref={ref} className='cart modal'>
                <h2>Your cart</h2>
                <ul>
                    {Object.keys(cart).filter(key => cart[key] > 0).map(key => {
                        const meal = meals.find(item => item.id === key);

                        return <li className='cart-item' key={meal.id}>
                            <p>{meal.name} - {cart[key]} x {currencyFormatter.format(meal.price)}</p>
                            <div className='cart-item-actions'>
                                <button onClick={() => dispatchCart({ type: 'SUBSTRACT', payload: key })}>-</button>
                                <span>{cart[key]}</span>
                                <button onClick={() => dispatchCart({ type: 'ADD', payload: key })}>+</button>
                            </div>
                        </li>
                    })}
                </ul>
                <div className='cart-total'>{currencyFormatter.format(totalPrice)}</div>
                <form method="dialog" className='modal-actions' >
                    <button className='text-button'>Close</button>
                    <button className='button' onClick={handleOnGoToCheckout}>Go to checkout</button>
                </form>
            </dialog>
        </>
    );
})

export default CartModal;
