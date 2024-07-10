import { forwardRef, useRef, useContext } from 'react';
import SuccessModal from './SuccessModal';
import { CartContext } from '../store/CartContext';
import { currencyFormatter } from '../utils/formatting';


const API = "http://localhost:3000";

const CheckoutModal = forwardRef(function CheckoutModal({ price }, ref) {

    const { _, dispatchCart } = useContext(CartContext);
    const successModal = useRef();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        const body = {
            order: {
                items: ['item1', 'item2'],
                customer: Object.fromEntries(formData.entries())
            }
        }

        const response = await fetch(`${API}/orders`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
        await response.json();

        dispatchCart({ type: 'CLEAR' })

        ref.current.close()
        successModal.current.showModal()
    }

    return (
        <>
            <SuccessModal ref={successModal}></SuccessModal>
            <dialog ref={ref} className='modal'>
                <h2>Checkout</h2>
                <p>Total amount: {currencyFormatter.format(price)}</p>
                <form onSubmit={handleSubmit}>
                    <div className='control'>
                        <label htmlFor="name">Full name</label>
                        <input id='name' name='name' type="text" required />
                    </div>
                    <div className='control'>
                        <label htmlFor="email">Email</label>
                        <input id='email' name='email' type="email" required />
                    </div>
                    <div className='control'>
                        <label htmlFor="street">Street</label>
                        <input id='street' name='street' type="text" required />
                    </div>
                    <div className='control-row'>
                        <div className='control'>
                            <label htmlFor="postal-code">Postal code</label>
                            <input id='postal-code' name='postal-code' type="text" required />
                        </div>
                        <div className='control'>
                            <label htmlFor="city">City</label>
                            <input id='city' name='city' type="text" required />
                        </div>
                    </div>
                    <div className='modal-actions' >
                        <button type='button' className='text-button' onClick={() => ref.current.close()}>Close</button>
                        <button type='submit' className='button'>Submit Order</button>
                    </div>
                </form>
            </dialog>
        </>
    );
})

export default CheckoutModal;
