import './Sidebar.scss';
import SidebarGroup from './SidebarGroup/SidebarGroup';
import { SidebarGroupActivity } from './SidebarGroup/SidebarGroup.model';

export default function Sidebar() {

    const RECENT_ACTIVITIES: SidebarGroupActivity[] = [
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


    return <div id='sidebar'>
        <h3>Actividad reciente</h3>
        {RECENT_ACTIVITIES.map(activity => (
            <SidebarGroup activity={activity} key={activity.date.getTime()}></SidebarGroup>
        ))}
    </div>
}