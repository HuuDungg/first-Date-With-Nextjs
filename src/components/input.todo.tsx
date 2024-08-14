interface myProps {
    myName: string
}
const InputTodoComponent = (props: myProps) => {
    return (
        <>
            <label htmlFor="">Input your todo {props.myName}</label> <br />
            <input type="text" /> <br />
            <button>Save</button>
        </>
    )
}

export default InputTodoComponent