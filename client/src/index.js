import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ChatContextProvider } from './contexts/ChatContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
     <ChatContextProvider>
     <App />
     </ChatContextProvider>
    
      
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
