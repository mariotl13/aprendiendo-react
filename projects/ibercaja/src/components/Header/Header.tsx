import './Header.scss';

export default function Header() {


    return <div id="header">
        <div className='header-options'>
            <button>icon</button>
            <span>PRODUCTOS</span>
            <span>OPERATIVAS</span>
            <input type="text" />
        </div>
        <div className='header-user'>
            <span>Usuario</span>
            <button>LOGO</button>
        </div>
    </div>
}