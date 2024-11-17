import { useRef, useState } from 'react'
import './App.css'
import Burger from './Components/Burger/Burger'
import Button from './Components/Button/Button'
import Person from './Components/Person/Person'
import Title from './Components/Title/Title'

function App() {
  const [word, setWord] = useState("");
  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  };
  const inputRef = useRef<HTMLInputElement>(null);
  const count = useRef(1);
  const handler = () => {
    inputRef.current?.focus();
    count.current++;
  };
  return (
    <div className='container'>
      <Title />
      <Burger />
      <Person userName={'Valera Meladze'} />
      <Button isDisabled={false}>Primary</Button>
      <Button isDisabled={true} btnType='Secondary'>Secondary</Button>
      <Button isDisabled={false} btnType='Secondary 2'>Secondary 2</Button>
      <>
      <input
        ref={inputRef}
        value={word}
        onChange={changeInputValue}
        placeholder="Напиши сюда что нибудь"
      />
      <button onClick={handler}>Focus the Input</button>
    </>

    </div>
  )
}

export default App
