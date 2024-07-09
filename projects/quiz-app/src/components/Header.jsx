import displayLogo from '../assets/quiz-logo.png';


export default function Header() {

    return (<header>
        <img src={displayLogo} alt="Quiz logo" />
        <h1>ReactQuiz</h1>
    </header>)
}