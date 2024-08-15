import { useState } from "react"

interface myProps {
    myName: string
    myAge: number
}
const InputTodoComponent = (props: myProps) => {
    const [todos, setTodos] = useState(["todo 1", "todo 2", "todo 1", "todo 2", "todo 1", "todo 2", "todo 1", "todo 2"])
    const { myName, myAge } = props
    const [mineName, setMineName] = useState<string>("")
    const handleTyping = (name: string) => {
        setMineName(name)
    }
    const handleClick = () => {
        setTodos([...todos, mineName])
        setMineName('')
    }
    return (
        <>
            <label htmlFor="">Input your todo {myName} an my age {myAge}</label> <br />
            <div>Name input with state {mineName}</div>
            <input type="text" value={mineName} onChange={(event) => {
                handleTyping(event.target.value)
            }} /> <br />
            <button
                onClick={() => { handleClick() }}
            >Save</button>

            <ul>
                {todos.map((items, index) => {
                    return (
                        <>
                            <li key={index + "lew"}>{items}</li>
                        </>
                    )
                })}
            </ul>
        </>
    )
}

export default InputTodoComponent