import { useEffect, useState } from "react";


export default function QuestionTimer({ timeout, onTimeout }) {

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        console.log('creo el interval');
        const interval = setInterval(() => {
            setProgress(curr => curr + 10);
        }, 10);

        return () => {
            clearInterval(interval);
        }
    }, [])

    useEffect(() => {
        console.log('creo el timeout');
        setProgress(0);
        const timer = setTimeout(() => {
            onTimeout('');
        }, timeout);

        return () => {
            clearTimeout(timer);
        }
    }, [timeout, onTimeout])

    return (
        <>
            <progress id='question-time' value={progress} max={timeout}></progress>
        </>
    )
}