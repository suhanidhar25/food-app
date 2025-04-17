
import { useCart } from "../context/cartcontext";
import { toast } from "react-toastify";

const MenuItems = ({item}) => {
  const { addToCart } = useCart();
  const handleOrderNow = () => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`);
  };
  return (
    <div className="menu-body col-md-6 col-lg-4 mb-4">
      
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-light">{item.name}</h5>
          <p className="card-text text-light">{item.description}</p>
          <div className="mt-auto d-flex justify-content-between align-items-center">
            <span className="fw-bold">Rs {item.price.toFixed(2)}</span>
            <button className="btn btn-sm btn-primary" onClick={() => addToCart(item)}>
            Add to Cart
          </button>
          </div>
        </div>
      
    </div>
  )
}

export default MenuItems;
