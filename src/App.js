import { RouterProvider } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import './App.css';
import { router } from './Routers/Routes/Routes';

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <ScrollToTop smooth color="#19D3AE" />
    </div>
  );
}

export default App;
