//css
import './App.css';

//React
import { useState } from 'react';

///data
import { wordList } from './data/words';

//components
import Game from './components/Game';
import GameOver from './components/GameOver';
import StartScreen from './components/StartScreen';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState("");

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  const pickWordAndCategory = () =>{
    //picked a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    console.log(category);

    //picked a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    console.log(word)

    return{word, category}
  }
  
  const startGame = () =>{
    const {word, category} = pickWordAndCategory();

    let wordLetters = word.split("")
    wordLetters = wordLetters.map((l) => l.toLowerCase());
    
    console.log(word, category)
    console.log(wordLetters)

    setPickedWord(word)
    setPickedCategory(category)
    setLetters(letters)

    setGameStage(stages[1].name)
  }

  const verifyLetter = ()=>{
    setGameStage(stages[2].name)
  }

  const retry = ()=>{
    setGameStage(stages[0].name)
  }

  return (
    <div className="app">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter}/>}
      {gameStage === "end" && <GameOver retry={retry}/>}
    </div>
  );
}

export default App;
