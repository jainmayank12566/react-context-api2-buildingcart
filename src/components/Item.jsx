import '../App.css'
import {CounterContext} from '../context/Counter.jsx'
import { useContext } from 'react';
function Item(props){
    const cart=useContext(CounterContext);
    return(
        <div className="colorprops">
            <h3>Item is :{props.name}</h3>
            <h3>Price is :{props.price}</h3>
            <button onClick={()=>cart.setitems([...cart.items,{name:props.name,price:props.price}])}>add to cart</button>
        </div>
    )
}
export default Item;