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
      <nav>
        <a href="#one">One</a>
        <a href="#two">Two</a>
        <a href="#three">Three</a>
      </nav>

      <section id="one">
        <div>
          <img src={myImage2} alt="" />
        </div>
      </section>

      <section id="two">
        <div>
          <img src={myImage} alt="" />
        </div>
      </section>

      <section id="three">
        <div>
          {array.map((fruit, index) => (
            <p key={index}>{fruit}</p>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
