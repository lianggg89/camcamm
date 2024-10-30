import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Register from './Pase/Register';
import Login from './Pase/Login';
import ProductDetail from './Components/Products/Product';
import NotFound from './Pase/NotFound';
import Home from './Components/Products/List';
import Header from './Components/Header';
import Footer from './Components/Footer';



function AppRoutes() {
  const routes = [
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    { path: '/', element: <Home /> },
    { path: '/product/:id', element: <ProductDetail /> },
    {
      path: '*', // Route cho tất cả các đường dẫn không khớp
      element: <NotFound />, // Component cho trang 404
    }
  ];

  return useRoutes(routes);
}

function App() {
  return (
    <Router>
      <Header />
      <AppRoutes />
      <Footer/>
    </Router>
  );
}

export default App;
