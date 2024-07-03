import { useEffect, useState } from 'react';
import './CursorFollower.css'


export function CursorFollower() {
    console.log('cursor follower');

    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMove = (event) => {
            const newPosition = { x: event.clientX, y: event.clientY };
            setPosition(newPosition);
            console.log('newPosition', newPosition);
        }

        window.addEventListener('pointermove', handleMove);

        return () => { window.removeEventListener('pointermove', handleMove) };
    }, [])

    return (
        <div className='cursor-follower' style={{ transform: `translate(${position.x}px, ${position.y}px)` }}></div>
    )
}
