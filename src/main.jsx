import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./components/Test";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <BrowserRouter>
    <Routes>

      <Route path="/" element={<App />}></Route>
      {/* <Route path="/id" element={<Test/>}></Route> */}
      </Routes>
    
    </BrowserRouter>
  </React.StrictMode>
)
