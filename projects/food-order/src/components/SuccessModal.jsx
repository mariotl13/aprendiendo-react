import { forwardRef } from 'react';

const SuccessModal = forwardRef(function SuccessModal(_, ref) {

    return (
        <dialog ref={ref} className='modal'>
            <h2>Success!</h2>
            <p>Your order was submitted successfully.</p>
            <p>We will get back to you eith more details via email within the next five minutes.</p>
            <form method="dialog" className='modal-actions' >
                <button className='button'>Okay</button>
            </form>
        </dialog>
    );
})

export default SuccessModal;
