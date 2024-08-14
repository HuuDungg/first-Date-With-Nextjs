interface myProps {
    myName: string
    myAge: number
}
const InputTodoComponent = (props: myProps) => {
    const todos = ["todo 1", "todo 2", "todo 1", "todo 2", "todo 1", "todo 2", "todo 1", "todo 2",]
    const { myName, myAge } = props
    return (
        <>
            <label htmlFor="">Input your todo {myName} an my age {myAge}</label> <br />
            <input type="text" /> <br />
            <button>Save</button>

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