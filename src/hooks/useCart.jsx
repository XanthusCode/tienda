import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

// Hook personalizado para acceder al estado y funciones del carrito
export const useCart = () => {
  // Accede al contexto del carrito
  const context = useContext(CartContext);

  // Verifica si el hook está dentro del provider
  if (!context) {
    throw new Error('useCart debe ser usado dentro de un CartProvider');
  }

  // Retorna todo lo que está en el contexto (estado y funciones)
  return context;
};
