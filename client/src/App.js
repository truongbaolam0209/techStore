import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/navbar/Navbar';
import RouterURL from './router/RouterURL';
import GuestState from './context/guestContext/GuestState';





function App() {


    return (
        <Router>
            <GuestState>
                <GlobalStyle />
                <Navbar />
                <RouterURL />
            </GuestState>
        </Router>
    );
}
export default App;





const GlobalStyle = createGlobalStyle`
    * {
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
}
body {
    font-family: 'Muli', sans-serif;
}
:root {
    --grey: rgb(216, 216, 216);
    --pink: rgb(212, 0, 53);
    --dark1: rgb(27, 21, 21);
}
`;

