import Header from "./components/Header";
import Meals from "./components/Meals";
import CartProvider from './store/CartContext';
import MealsProvider from './store/MealsContext';

function App() {

    return (
        <CartProvider>
            <MealsProvider>
                <Header></Header>
                <Meals></Meals>
            </MealsProvider>
        </CartProvider>
    );
}

export default App;
