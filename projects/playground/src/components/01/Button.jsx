import { useState } from 'react';
import './Button.css'


export function Button({ children, height, clickCallback }) {
    console.log('botonnnn');

    const [valor, setValor] = useState(false);

    const handleOnClick = () => {
        const newValue = !valor;
        setValor(newValue);
        clickCallback(newValue);
        console.log('me han clikao', newValue);
    }

    // TODOS:
    //     - ng-content
    //     - outputs
    //     - ngfor
    //     - useEffect (oninit?)

    return (
        <>
            <button style={{ height: height }} className={`button ${valor ? "button--active" : ""}`} onClick={handleOnClick}>{children}</button>
            {valor && 'seleccionado'}
        </>
    )
}
