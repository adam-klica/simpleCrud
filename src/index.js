import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Create from './Pages/Create';
import PostDetails from './Pages/PostDetails';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="create" element={<Create />} />
            <Route path="/post/:id" element={<PostDetails />}></Route>
          </Routes>
        </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);


