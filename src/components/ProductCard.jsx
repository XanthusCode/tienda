import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

import '../App.css';

const ProductCard = ({ product, addToCart }) => {

  const handleAddToCart = () => {
    Swal.fire({
      title: 'Producto añadido!',
      text: 'El producto ha sido añadido al carrito',
      icon: 'success',
      confirmButtonText: 'Ok'
    });
    addToCart(product); // Llama a addToCart con el producto actual
  };
  

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>Precio: ${product.price}</p>
      <p>{product.category}</p>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductCard;

