import React, { useEffect, useState } from 'react';

function App() {
  const [backendData, setBackendData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setIsLoading(true);
    fetch('/api')
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <button onClick={fetchData}>Bring Data from Backend</button>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {backendData.users ? (
              backendData.users.map((user, i) => <p key={i}>{user}</p>)
            ) : (
              <p>No data available.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
