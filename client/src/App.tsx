import { useState, useEffect } from 'react';
import service from './services/services';

function App() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const fruits = await service.getFruits();
      setArray(fruits);
    };
    getData();
  }, []);

  return (
    <>
      {array.map((fruit, index) => (
        <div key={index}>
          <p>{fruit} 22222</p>
        </div>
      ))}
    </>
  );
}

export default App;
