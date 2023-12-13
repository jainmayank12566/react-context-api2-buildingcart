import { useContext } from "react";
import {CounterContext} from '../context/Counter.jsx';
function Cart(){
    const cart=useContext(CounterContext);
    const total=cart.items.reduce((a,b)=>{
        return a+b.price;
    },0)
    return(
        <div>
            <h1>cart</h1>
            {cart?cart.items.map((val)=><li key={val.name}>{val.name}- ${val.price}</li>):<p>nodata</p>}
            <p>total bill: ${total}</p>
        </div>
    )
}
export default Cart;