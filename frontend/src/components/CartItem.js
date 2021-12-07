import './CartItem.css';
import { Link } from 'react-router-dom';

const CartItem = ({item, qtyChangeHandler, removeHandler}) => {
    return (
        <div className="cartitem">
            <div className="cartitemImage">
                <img src={item.imageUrl} alt={item.name} />
            </div>

            <Link to={`product/${item.product}`} className="cartitemName">
                <p>{item.name}</p>
            </Link>

            <p className="cartitemPrice">${item.price}</p>

            <select className="cartitemSelect" value={item.qty} onChange={(e)=>qtyChangeHandler(item.product, e.target.value)}>
               {[...Array(item.countInStock).keys()].map((x) => (
                   <option key={x+1} value={x+1}>
                       {x+1}
                    </option>
               ))}
            </select>

            <button className="cartitemDeleteBtn" onClick={()=>removeHandler(item.product)}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default CartItem;