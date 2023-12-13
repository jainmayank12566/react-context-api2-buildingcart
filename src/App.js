import Item from './components/Item.jsx';
import Cart from './components/Cart.jsx';
function App(){
    return(
        <div>
            <Item name="icecream" price={35}/>
            <Item name="dairymik" price={10}/>
            <Item name="milk" price={33}/>
            <Cart/>
        </div>
    )
}
export default App;