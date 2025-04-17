import { useCart } from '../context/cartcontext';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container my-5 text-light">
      <h2>Your Cart 🛒</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="d-flex justify-content-between align-items-center border-bottom py-3">
              <div className="d-flex align-items-center gap-3">
                
                <div>
                  <h5>{item.name}</h5>
                  <p className="mb-1">Price: ₹{item.price}</p>
                  <div className="d-flex align-items-center gap-2">
                    <button className="btn btn-sm btn-secondary" onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button className="btn btn-sm btn-secondary" onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>
              </div>
              <div className="text-end">
                <p>Subtotal: ₹{(item.price * item.quantity).toFixed(2)}</p>
                <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(item.id)}>Remove ❌</button>
              </div>
            </div>
          ))}

          <div className="mt-4 text-end">
            <h4>Total: ₹{getTotal()}</h4>
            <button className="btn btn-success mt-2">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
