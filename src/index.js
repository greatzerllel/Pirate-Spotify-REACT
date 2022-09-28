//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS
import 'bootstrap/dist/js/bootstrap.bundle'; // JS
import '@fortawesome/fontawesome-free/css/all.min.css' // FONTAWESOME
import './App.css';


//import your own components
import Home from "./Home.jsx";

//render your react application
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Home />);
