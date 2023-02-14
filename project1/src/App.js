import './App.css';
import React from 'react';
import H from './Componets/h/h';
import OL from './Componets/ol/ol';
import P from './Componets/p/p';
function App() {


  const [text, setText] = React.useState("")
  const onClickText = () => {
    if (text == "Привет")
      setText("")
    else
    setText("Привет")
  }

  const [score, setScore] = React.useState(0)
  const onClickPlus = () => {
    setScore(score + 1)
  }

  const onClickReset = () => {
    setScore(0)
  }

  const onClickMinus = () => {
    setScore(score - 1)
  }
  return (
    <div className="App">
      <div>
        <H />
        <OL />
        <P />



        <h2>Счётчик</h2>
        <h1>{score}</h1>
        <h1>{text}</h1>
        <button onClick={onClickMinus} className="minus">- Минус</button>
        <button onClick={onClickReset} className="reset"> Сброс</button>
        <button onClick={onClickPlus} className="plus">+ Плюс</button>
        <button onClick={onClickText} className="text">Нажми на меня</button>
      </div>
    </div>
  );
}




export default App;
