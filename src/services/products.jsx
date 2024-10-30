export const getProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data; // Verifica que esto sea un array
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error; // Lanza el error para que pueda ser manejado más arriba
  }
};
  