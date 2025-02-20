import { useState, useEffect } from 'react';
import service from './services/services';
import myImage from './assets/images/doodslogo.png';
import myImage2 from './assets/images/INFO-HD.png';

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
          <p>{fruit}</p>
        </div>
      ))}
      <div>
        <img src={myImage2} alt="" />
      </div>
      <div>
        <img src={myImage} alt="" />
      </div>
    </>
  );
}

export default App;
