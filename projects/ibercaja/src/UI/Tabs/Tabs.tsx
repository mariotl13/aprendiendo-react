

import './Tabs.scss';

export default function Tabs({tabs}: {tabs: {title: string}[]}) {


    return (
        <div className='tabs'>
            {tabs.map(tab => (
                <span key={tab.title}>{tab.title}</span>
            ))}
        </div>
    )
}