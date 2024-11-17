import './App.css'
import Burger from './Components/Burger/Burger'
import Button from './Components/Button/Button'
import Person from './Components/Person/Person'
import Title from './Components/Title/Title'

function App() {
  return (
    <div className='container'>
      <Title />
      <Burger />
      <Person userName={'Valera Meladze'} />
      <Button isDisabled={false}>Primary</Button>
      <Button isDisabled={true} btnType='Secondary'>Secondary</Button>
      <Button isDisabled={false} btnType='Secondary 2'>Secondary 2</Button>


    </div>
  )
}

export default App
