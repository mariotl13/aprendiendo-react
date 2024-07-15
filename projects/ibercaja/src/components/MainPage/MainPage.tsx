import Tabs from '../../UI/Tabs/Tabs';
import './MainPage.scss';

export default function MainPage() {

    const TABS = [
        {title: 'CUENTAS TARJETAS Y TPVS'},
        {title: 'FINANCIACIÓN'},
        {title: 'COMERCIO EXTERIOR'},
        {title: 'COBROS Y PAGOS'},
    ]

    return <div id='main-page'>
        <Tabs tabs={TABS}></Tabs>
    </div>
}