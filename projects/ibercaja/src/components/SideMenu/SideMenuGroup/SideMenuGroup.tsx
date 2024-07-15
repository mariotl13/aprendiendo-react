import { SideMenuGroupActivity } from './SideMenuGroup.model';
import './SideMenuGroup.scss';

export default function SideMenuGroup({activity}: {activity: SideMenuGroupActivity}) {

    const intlConfig = Intl.DateTimeFormat('es-ES');

    return <div className='side-menu-group'>
        <span className='chip'>{intlConfig.format(activity.date)}</span>
        <div className='items'>
            {activity.items.map(item => (
                <div className='item' key={item.title+item.price}>
                    <span>{item.title}</span>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <span>{item.price}</span>
                        <span className={`status ${item.price >= 0 ? 'status-pos' : 'status-neg'}`}></span>
                    </div>
                </div>
            ))}
        </div>
    </div>
}