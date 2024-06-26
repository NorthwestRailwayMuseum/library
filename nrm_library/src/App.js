// src/App.js
import React from 'react';
import Home from './components/home';
import NavBar from './components/NavBar';

function App() {
    return (
        <div>
            <NavBar />
            <main>
                <Home />
            </main>
        </div>
    );
}

export default App;