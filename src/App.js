// import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import QuoteBox from './components/QuoteBox';

import quotes from './quotes.json'

const colors = [
  "#845EC2",
  "#D65DB1",
  "#FF6F91",
  "#FF9671",
  "#FFC75F",
  "#F9F871",
  "#581845"
];

function App() {

  const [citas, setCitas] = useState(quotes[getNumber(quotes.length)]);

  const background = colors[getNumber(colors.length)];

  const handleCitas = () => {
    const cantidadCitas = getNumber(quotes.length);
    setCitas(quotes[cantidadCitas]);
  };

  document.body.style = `background: ${background}`;

    return (
    <div className='app'>
    <QuoteBox 
      quote={citas.quote} 
      author={citas.author}
      background={background}
      changeCitas={handleCitas}
    />
    </div>
  );
}

const getNumber = (max) => Math.floor(Math.random() * max);

export default App;
