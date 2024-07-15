import './SideMenu.scss';
import SideMenuGroup from './SideMenuGroup/SideMenuGroup';
import { SideMenuGroupActivity } from './SideMenuGroup/SideMenuGroup.model';

export default function SideMenu() {

    const RECENT_ACTIVITIES: SideMenuGroupActivity[] = [
        {
            date: new Date(2024,1,1),
            items: [
                {
                    title: 'Pago nóminas',
                    price: -1000
                },{
                    title: 'Pago nóminas',
                    price: 799
                },{
                    title: 'Pago nóminas',
                    price: 25555
                }
            ]
        },
        {
            date: new Date(2024,1,2),
            items: [
                {
                    title: 'Pago nóminas',
                    price: -100000
                },{
                    title: 'Pago nóminas',
                    price: 1000000
                },{
                    title: 'Pago nóminas',
                    price: 23
                },{
                    title: 'Pago nóminas',
                    price: -23
                },{
                    title: 'Pago nóminas',
                    price: 1
                }
            ]
        }
    ]


    return <div id='side-menu'>
        <h3>Actividad reciente</h3>
        {RECENT_ACTIVITIES.map(activity => (
            <SideMenuGroup activity={activity} key={activity.date.getTime()}></SideMenuGroup>
        ))}
    </div>
}