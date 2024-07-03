import './App.css';
import { useEffect, useState } from 'react';
import { Button } from './components/01/Button';
import { CursorFollower } from './components/02/CursorFollower';
import { getCatData } from './components/03/service';


//      01 !!!!
// export function App() {

//   const buttons = [
//     'holaa',
//     '2222',
//     '3333'
//   ];

//   const handleOnClickChild = (value) => {
//     console.log('detecto el click desde el padre', value);
//   }

//   return (
//     <div className='buttons_container'>
//       {buttons.map((button, index) => {
//         return <Button key={index} height={'20px'} clickCallback={handleOnClickChild}>{button}</Button>
//       })}
//     </div>
//   )
// }



//        02 !!!!!!!
// export function App() {

//   const [enabled, setEnabled] = useState(false);

//   const handleOnClick = () => {
//     setEnabled(!enabled);
//   }

//   return (
//     <>
//       <button onClick={handleOnClick}>Pulsar para {enabled ? 'desactivar' : 'activar'} seguimiento</button>
//       {enabled && <CursorFollower></CursorFollower>}
//     </>
//   )
// }


//        03 !!!!!!!
export function App() {

    const [fact, setFact] = useState()
    const [image, setImage] = useState()

    useEffect(() => {
        console.log('queeeeee');
        getCatData(setFact, setImage)
    }, [])

    const handleOnClick = () => {
        getCatData(setFact, setImage)
    }

    return (
        <>
            <button onClick={handleOnClick}>Refrescar</button>
            <div className='fact'>{fact}</div>
            <img src={image} />
        </>
    )
}
