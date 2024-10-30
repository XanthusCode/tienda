import { useContext } from 'react';
import Swal from 'sweetalert2';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext); 

  const handleRemove = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        Swal.fire(
          'Eliminado!',
          'Tu producto ha sido eliminado.',
          'success'
        );
      }
    });
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <p>No hay artículos en el carrito.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <div className="product-card" key={index}>
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <p>Precio: ${item.price}</p>
              <p>{item.category}</p>
              <button onClick={() => handleRemove(item.id)}>Eliminar</button>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
