import { useState, useEffect } from 'react';

function App() {
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const response = await fetch('http://localhost:3000/api');
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
