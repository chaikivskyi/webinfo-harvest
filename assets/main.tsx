import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './js/App';

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
} else {
    console.error("Root element with id 'root' not found.");
}
