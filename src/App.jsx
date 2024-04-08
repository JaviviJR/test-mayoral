import Search from './components/Search';
import ProductList from './components/ProductList';
import { useContext, useEffect } from 'react';
import { ProductContext } from './context/ProductContext';

function App() {
  const { getProducts, orderProducts } = useContext(ProductContext);
  
  useEffect(() => {
      getProducts();
  }, []);

  const handleSearch = (search) => {
    getProducts(search);
  };

  const handleOrder = (order) => {
    orderProducts(order, 'price');
  };

  return (
    <>
      <Search handleSearch={ handleSearch } handleOrder={ handleOrder }/>
      <ProductList />
    </>
  )
}

export default App
