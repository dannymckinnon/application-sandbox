import { useState, useEffect } from 'react';

const backendUrl = process.env.BACKEND_URL || 'http://localhost:3000/api';

function App() {
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const response = await fetch(backendUrl);
    const { fruits } = await response.json();
    setArray(fruits);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      {array.map((fruit, index) => (
        <div key={index}>
          <p>{fruit}</p>
        </div>
      ))}
    </>
  );
}

export default App;
