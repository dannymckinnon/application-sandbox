import { useState, useEffect } from 'react';
import service from './services/services';
import myImage from './assets/images/eating.png';
import myImage2 from './assets/images/TOPRIGHTHOMEBUTTON.png';

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
      <div className="flex">
        <div className="toolbar">
          {array.map((fruit, index) => (
            <p key={index}>{fruit}</p>
          ))}
        </div>
        <div>
          <img src={myImage2} alt="" />
          <img src={myImage} alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
