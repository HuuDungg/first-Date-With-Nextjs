import { useState } from 'react';
import InputTodoComponent from './components/input.todo'

function App() {
  const myName: string = 'hi there';
  const myAge: number = 34;
  const [mineName, setMineName] = useState<string>("");
  const handleTyping = (v: string) => {
    setMineName(v);
  }
  return (
    <>
      <InputTodoComponent
        myName={myName}
        myAge={myAge}
        handleTyping={handleTyping}
        mineName={mineName}
        setMineName={setMineName}
      >
      </InputTodoComponent>
    </>
  )
}

export default App
