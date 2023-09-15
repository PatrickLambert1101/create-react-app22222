import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const referrer = document.referrer;
    const currentUrl = window.location.href;
  
    if (referrer && referrer !== currentUrl) {
      const referrerUrl = new URL(referrer);
      referrerUrl.searchParams.append('appNotInstalled', 'true');
      window.location.replace(referrerUrl.toString());
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="loader"></div>
        <p>Please wait, initializing...</p>
      </header>
      <style>{`
        .loader {
          border: 5px solid #f3f3f3;
          border-top: 5px solid #3498db;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default App;
