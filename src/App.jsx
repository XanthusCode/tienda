import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Asegúrate de que la ruta sea correcta
import CartPage from './pages/CartPage'; // Asegúrate de que la ruta sea correcta
import Header from './components/Header'; // Asegúrate de que la ruta sea correcta
import { CartProvider } from './context/CartContext'; // Asegúrate de que la ruta sea correcta

const App = () => {
  try {
    return (
      <CartProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Router>
      </CartProvider>
    );
  // eslint-disable-next-line no-unreachable
  } catch (error) {
    console.error("Error en la aplicación:", error);
    return <div>Error al cargar la aplicación. Por favor, revisa la consola.</div>;
  }
};


export default App;
