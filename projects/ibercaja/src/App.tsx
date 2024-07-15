
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage'
import SideMenu from './components/SideMenu/SideMenu'

function App() {

    return (
        <>
            <Header />
            <div className='layout'>
                <MainPage />
                <SideMenu />
            </div>
            <Footer />
        </>
    )
}

export default App
