import React, { useEffect } from 'react';
import './App.css';

function App() {
useEffect(() => {
  const referrer = document.referrer;
  
  if (referrer) {
    const referrerUrl = new URL(referrer);

    // Logging URL components
    console.log('Full URL:', referrerUrl.toString());
    console.log('Protocol:', referrerUrl.protocol);
    console.log('Hostname:', referrerUrl.hostname);
    console.log('Pathname:', referrerUrl.pathname);
    console.log('Search:', referrerUrl.search);
    console.log('Hash:', referrerUrl.hash);

    // Logging search parameters
    for (const [key, value] of referrerUrl.searchParams.entries()) {
      console.log(`Param ${key}: ${value}`);
    }

    const parentUrl = referrerUrl.searchParams.get('parentUrl');
    
    // Always append 'appNotInstalled=true' to the referrer URL
    referrerUrl.searchParams.append('appNotInstalled', 'true');

    if (parentUrl) {
      window.location.replace(parentUrl);
    } else {
      window.location.replace(referrerUrl.toString());
    }
  }
}, []);






  return (
    <div className="App">
      <header className="App-header">
        <div className="loader"></div>
        <p>Please wait, 123...</p>
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
