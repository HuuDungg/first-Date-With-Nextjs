import InputTodoComponent from './components/input.todo'

function App() {
  const myName: string = 'hi there';
  const myAge: number = 34
  return (
    <>
      <InputTodoComponent
        myName={myName}
        myAge={myAge}
      >
      </InputTodoComponent>
    </>
  )
}

export default App
