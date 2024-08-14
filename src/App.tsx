import InputTodoComponent from './components/input.todo'

function App() {
  const myName: string = 'hi there';
  return (
    <>
      <InputTodoComponent
        myName={myName}
      >
      </InputTodoComponent>
    </>
  )
}

export default App
